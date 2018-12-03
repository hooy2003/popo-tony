<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">出機單設定</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardP v-for="(item, index) in billing"
                           :key='item.index'  
                           :billing-name="item" 
                    >
                    </CardP>
                </div>
            </Col>
            <Col span="5">
                <div class="title">櫃檯出單機</div>
                <div class="union">
                    <h4>結帳相關聯</h4>
                    <CardP v-for="(item, index) in rules1"
                           :key='item.index'
                           :billing-name="item" 
                           @card-on-click="CardOnClick($event, 1)"
                    >
                    </CardP>
                    <h4>顧客聯</h4>
                    <CardP v-for="(item, index) in rules2"
                           :key='item.index'
                           :billing-name="item"
                           @card-on-click="CardOnClick($event, 2)"
                    >
                    </CardP>
                    <h4>廚房聯</h4>
                    <CardP v-for="(item, index) in rules3"
                           :key='item.index'
                           :billing-name="item"
                           @card-on-click="CardOnClick($event, 3)"
                    >
                    </CardP>
                </div>
            </Col>
            <Col span="9">
                <div class="title">和牛區</div>
                <div class="union">
                    <h4>基本設定</h4>
                    <CardCheckout v-if="isbilling"
                    >
                    </CardCheckout>
                    <CardDetail v-if="!isbilling"
                    >
                    </CardDetail>
                </div>
            </Col>
            <Col span="5">
             
            </Col>
        </Row>        
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import CardP from './card.vue';
import CardDetail from './cardDetail.vue';
import CardCheckout from './cardCheckout.vue';

  export default {
    components: {
        CardP,
        CardDetail,
        CardCheckout
    },
    data() {
        return {
            isbilling: true
        }
    },
    computed: {
      ...mapGetters([
        'User',
        'billing',
        'rules1',
        'rules2',
        'rules3'
      ]),      
    },
    methods: {
        CardOnClick ($e, value) {
            if (value === 1) {
                console.log('dfdfdf');
                this.isbilling = true;
            }else {
                console.log('99999');
                this.isbilling = false;
            }
        }
    }
  }
</script>