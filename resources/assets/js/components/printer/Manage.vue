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
                    <Pinter v-for="(item, index) in currentPinter"
                           :key='item.index'
                           :pinter-name="item['PrinterName']" 
                           class="card-item"
                           @pinter-on-click="PinterOnClick($event, 1)"
                    >
                    </Pinter>
                </div>
            </Col>
            <Col span="9">
                <div class="title">和牛區</div>
                <div class="union">
                    <h4>基本設定</h4>
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
import Pinter from './Pinter.vue';

  export default {
    components: {
        Area,
        Pinter
    },
    data() {
        return {
            currentArea: [],
            AreaId: '',
            currentPinter: []
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
        CardOnClick ($e, value) {
            $('.card-item').removeClass('active');
            if (value === 1) {
                this.isbilling = true;
            }else {
                this.isbilling = false;
            }
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
            this.currentPinter = await axios.get(process.env.API_HOST + `/Printer/GetPrintersByPrinterAreaID?PrinterAreaID=${PrinterAreaID}`)
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