<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">出機單設定</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <Area v-for="(item, index) in currentArea"
                           :key='item.index'  
                           :area-name="item['printerAreaName']"
                           :class="{ active: index === 0 }"
                           class="card-class"                           
                           @area-on-click="AreaOnClick($event, item['printerAreaID'])"
                           @area-change-name="AreaChangeName($event, item['printerAreaID'])"
                           @area-delete="AreaDelete($event, item['printerAreaID'])"
                    >
                    </Area>
                    <AddNewArea  class="add-new-card"
                                 @add-area-name="addNewArea($event)"
                    >
                    </AddNewArea>
                </div>
            </Col>
            <Col span="5">
                <div class="title">櫃檯出單機</div>
                <div class="union">
                    <h4>出單機名稱</h4>
                    <Printer v-for="(item, index) in currentPrinter"
                           :key='item.index'
                           :printer-name="item['printerName']" 
                           class="card-item"
                           @printer-on-click="PrinterOnClick($event, item)"
                           @printer-change-name="PrinterChangeName($event, item['printerID'], item['ip'])"
                           @printer-delete="PrinterDelete($event, item['printerID'])"
                    >
                    </Printer>
                    <AddNewPrinter
                            class="add-new-card"
                            @add-printer-name="addNewPrinter($event, AreaId)"
                    >
                    </AddNewPrinter>
                </div>
            </Col>
            <Col span="9">
                <div class="title">和牛區</div>
                <div class="union">
                    <h4>基本設定</h4>
                    <PrinterInfo
                        v-show="PrinterInfoShow"
                        :printer-id="currentPrinterInfo['printerID']"
                        :printer-name="currentPrinterInfo['printerName']"
                        :printer-ip="currentPrinterInfo['ip']"
                        :printer-emulation="currentPrinterInfo['emulation']"
                        @printer-info-change="changePrinterInfo($event)"
                    >
                    </PrinterInfo>
                </div>
            </Col>
            <Col span="5">
             
            </Col>
        </Row>        
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import Area from './Area.vue';
import Printer from './Printer.vue';
import PrinterInfo from './PrinterInfo.vue'
import AddNewPrinter from './addNewPrinter.vue'
import AddNewArea from './addNewArea.vue'

  export default {
    components: {
        Area,
        Printer,
        PrinterInfo,
        AddNewPrinter,
        AddNewArea
    },
    data() {
        return {
            currentArea: [],
            AreaId: '',
            currentPrinter: [],
            currentPrinterInfo: [],
            PrinterInfoShow: false
        }
    },
    created () {
        this.getPrinterArea();
        this.AreaId = 1;
    },
    computed: {
      ...mapGetters([
          'isLoading'
      ]),
    },
    watch: {
        currentArea: function(value) {
            const PrinterAreaID = this.currentArea[0]['printerAreaID'];
            this.getPrinter(PrinterAreaID); 
        },
        isLoading (value) {
            if (value) {
                this.$Message.loading({
                    content: 'Loading...',
                    duration: 0.8
                });
            }
        }
    },
    methods: {
        AreaOnClick (AreaName, AreaId) {
            this.AreaId = AreaId;
            this.getPrinter(AreaId);
            this.PrinterInfoShow = false;
        },
        PrinterOnClick (printerName, printer) {
            this.currentPrinterInfo = printer;
            this.PrinterInfoShow = true;
        },
        async getPrinterArea() {
            this.currentArea = await axios.get(process.env.API_HOST + `/PrinterArea/GetAreas`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async addNewArea ($event) {
            const ClassFile = {
                                "printerAreaName": $event,
                                "accountID": 0
                              };
            const vm = this;
            await axios.post(process.env.API_HOST + `/PrinterArea/Create`, ClassFile)
            .then(function (response) {
                vm.getPrinterArea();
                return;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        async AreaChangeName ($event, AreaId) {
            const ClassFile = {
                                "printerAreaID": AreaId,
                                "printerAreaName": $event,
                                "accountID": 0
                              };
            const vm = this;
            await axios.put(process.env.API_HOST + `/PrinterArea/Update`, ClassFile)
            .then(function (response) {
                vm.getPrinterArea();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async AreaDelete ($event, AreaId) {
            const ClassFile = {
                                "printerAreaID": AreaId,
                                "accountID": 0
                              };
            const vm = this;
            // axios's config writing
            await axios.delete(process.env.API_HOST + `/PrinterArea/Delete`, { data: ClassFile})
            .then(function (response) {
                vm.getPrinterArea();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getPrinter(PrinterAreaID) {
            this.currentPrinter = await axios.get(process.env.API_HOST + `/Printer/GetPrintersByPrinterAreaID/${PrinterAreaID}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async addNewPrinter ($event, AreaId) {
            const ClassFile = {
                                "printerName": $event,
                                "printerAreaID": AreaId,
                                "ip": '111',
                                "emulation": '111',
                                "accountID": '0'
                              };
            const vm = this;
            await axios.post(process.env.API_HOST + `/Printer/Create`, ClassFile)
            .then(function (response) {
                vm.getPrinter(vm.AreaId);
                return;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        async PrinterChangeName ($event, PrinterId, PrinterIp) {
            const ClassFile = {
                                "printerID": PrinterId,
                                "printerName": $event,
                                "ip": PrinterIp,
                                "accountID": 0
                              };
            const vm = this;
            await axios.put(process.env.API_HOST + `/Printer/Update`, ClassFile)
            .then(function (response) {
                vm.getPrinter(vm.AreaId);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async PrinterDelete ($event, PrinterId) {
            const ClassFile = {
                                "printerID": PrinterId,
                                "accountID": 0
                              };
            const vm = this;
            // axios's config writing
            await axios.delete(process.env.API_HOST + `/Printer/Delete`, { data: ClassFile})
            .then(function (response) {
                vm.getPrinter(vm.AreaId);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async changePrinterInfo (PrinterInfo) {
            const vm = this;
            await axios.put(process.env.API_HOST + `/Printer/Update`, PrinterInfo)
            .then(function (response) {
                vm.getPrinter(vm.AreaId);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
  }
</script>