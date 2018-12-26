<template>
    <section class="content store-info">
        <h2>店家資訊</h2>
        <div class="content-wrap">
            <div class="input-wrap">
                <p>店家名稱(中)</p>
                <Input v-model="currentInfo['ChineseName']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>店家名稱(英)</p>
                <Input v-model="currentInfo['EnglishName']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>統一編號</p>
                <Input v-model="currentInfo['TaxID']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>地址</p>
                <Input v-model="currentInfo['Address']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>聯絡電話</p>
                <Input v-model="currentInfo['Telephone']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>聯絡人</p>
                <Input v-model="currentInfo['Contact']" placeholder="Enter something..."></Input>
            </div>
        </div>

        <div class="content-wrap">
            <div class="input-wrap">
                <p>顯示圖</p>
                <Input v-model="currentInfo['LogoImage']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>服務費</p>
                <Input v-model="currentInfo['ServiceFee']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>稅別</p>
                <Input v-model="currentInfo['TaxType']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>稅率</p>
                <Input v-model="currentInfo['TaxRate']" placeholder="Enter something..."></Input>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';

  export default {
    components: {
    },
    data() {
        return {
            currentInfo: []
        }
    },
    created () {
        this.getStoreInfo();
    },
    computed: {
      ...mapGetters([
      ]),
    },
    methods: {
        async getStoreInfo() {
            this.currentInfo = await axios.get(process.env.API_HOST + `/Store/GetStore`)
            .then(function (response) {
                console.log(response);
                return response.data[0];
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
  }
</script>