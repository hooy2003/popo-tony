<template>
    <section class="content store-info">
        <h2>店家資訊</h2>
        <div class="content-wrap">
            <div class="input-wrap">
                <p>店家名稱(中)</p>
                <Input v-model="currentInfo['chineseName']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>店家名稱(英)</p>
                <Input v-model="currentInfo['englishName']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>統一編號</p>
                <Input v-model="currentInfo['taxID']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>地址</p>
                <Input v-model="currentInfo['address']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>聯絡電話</p>
                <Input v-model="currentInfo['telephone']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>聯絡人</p>
                <Input v-model="currentInfo['contact']" placeholder="Enter something..."></Input>
            </div>
        </div>

        <div class="content-wrap">
            <div class="input-wrap">
                <p>顯示圖</p>
                <Input v-model="currentInfo['logoImage']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>服務費</p>
                <Input v-model="currentInfo['serviceFee']" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>稅別</p>
                <Select v-model="taxTypeID"                            
                        placeholder="請選擇"
                        loading-text="加載中"
                >
                    <Option v-for="item in currentTaxType" :value="item.taxTypeID" :key="item.taxTypeID">{{ item.taxTypeName }}</Option>
                </Select>
            </div>
            <div class="input-wrap">
                <p>稅率</p>
                <Input v-model="currentInfo['taxRate']" placeholder="Enter something..."></Input>
            </div>
        </div>
        <div class="bottom-wrap">
            <div class="input-wrap">
                <Button @click.native="saveInfo()">儲存</Button>
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
            currentInfo: [],
            currentTaxType: [],
            taxTypeID: ''
        }
    },
    created () {
        this.getStoreInfo();
        this.getTaxType();
    },
    watch: {
        taxTypeID() {
            this.currentInfo['taxTypeID'] = this.taxTypeID;
        },
        isLoadingIN (value) {
            if (value) {
                this.$Message.loading({
                    content: 'Loading...',
                    duration: 0.8
                });
            }
        }
    },
    computed: {
      ...mapGetters([
          'isLoading'
      ]),
      isLoadingIN: function() {
        return this.isLoading;
      }
    },
    methods: {
        async getStoreInfo() {
            let vm = this;
            this.currentInfo = await axios.get(process.env.API_HOST + `/Store/GetStore`)
            .then(function (response) {
                vm.taxTypeID = response.data[0]['taxTypeID'];
                return response.data[0];
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getTaxType() {
            this.currentTaxType = await axios.get(process.env.API_HOST + `/Store/GetTaxType`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async saveInfo () {
            const vm = this;
            await axios.put(process.env.API_HOST + `/Store/Update`, this.currentInfo)
            .then(function (response) {
                vm.getStoreInfo();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
  }
</script>
<style lang="scss">
    .bottom-wrap {
        text-align: right;
        margin-bottom: 60px;
    }
</style>
