<template>
    <section class="content store-info">
        <h2>店家資訊</h2>
        <div class="content-wrap">
            <div class="input-wrap">
                <p>店家名稱(中)</p>
                <Input v-model="nameCh" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>店家名稱(英)</p>
                <Input v-model="nameEn" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>地址</p>
                <Input v-model="address" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>電話</p>
                <Input v-model="phone" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>備註</p>
                <Input v-model="note" placeholder="Enter something..."></Input>
            </div>
        </div>

        <div class="content-wrap">
            <div class="input-wrap">
                <p>店家ID</p>
                <Input v-model="storeId" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>稅別</p>
                <Input v-model="faxType" placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap">
                <p>稅額</p>
                <Input v-model="faxNumble" placeholder="Enter something..."></Input>
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
            nameCh: '餐廳名字',
            nameEn: 'Name',
            address: '台北市信義區信義路五段七號',
            phone: '021231234',
            note: '注意事項',
            storeId: 'A122569',
            faxType: '稅別',
            faxNumble: '稅額'
        }
    },
    computed: {
      ...mapGetters([
      ]),
    }
  }
</script>