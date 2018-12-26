<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">出機單設定</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <Area v-for="(item, index) in currentArea"
                           :key='item.index'  
                           :area-name="item['PrinterAreaName']"
                           :class="{ active: index === 0 }"
                           class="card-class"                           
                           @area-on-click="AreaOnClick($event, item['PrinterAreaID'])"
                    >
                    </Area>
                </div>
            </Col>
            <Col span="5">
                <div class="title">櫃檯出單機</div>
                <div class="union">
                    <h4>出單機名稱</h4>
                    <Printer v-for="(item, index) in currentPrinter"
                           :key='item.index'
                           :printer-name="item['PrinterName']" 
                           class="card-item"
                           @printer-on-click="PrinterOnClick($event, item)"
                    >
                    </Printer>
                </div>
            </Col>
            <Col span="9">
                <div class="title">和牛區</div>
                <div class="union">
                    <h4>基本設定</h4>
                    <PrinterInfo
                        v-show="PrinterInfoShow"
                        :printer-id="currentPrinterInfo['PrinterID']"
                        :printer-name="currentPrinterInfo['PrinterName']"
                        :printer-ip="currentPrinterInfo['IP']"
                        :printer-emulation="currentPrinterInfo['Emulation']"
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

  export default {
    components: {
        Area,
        Printer,
        PrinterInfo
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
      ]),      
    },
    watch: {
        currentArea: function(value) {
            const PrinterAreaID = this.currentArea[0]['PrinterAreaID'];

            this.getPrinter(PrinterAreaID); 
        }
    },
    methods: {
        AreaOnClick (AreaName, AreaId) {
            this.AreaId = AreaId;
            this.getPrinter(AreaId);
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
        async getPrinter(PrinterAreaID) {
            this.currentPrinter = await axios.get(process.env.API_HOST + `/Printer/GetPrintersByPrinterAreaID?PrinterAreaID=${PrinterAreaID}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },       
        
    }
  }
</script>