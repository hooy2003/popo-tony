<template>
    <nav id="nav">
        <router-link to="/home" class="logo">
            <img src="../../img/cat.svg" alt="cat">
            <p>System<br /><span>1.00v1</span></p>
        </router-link>
        <ul v-if="isLogin">
            <router-link to="/food" tag="li">食材管理</router-link>
            <router-link to="/recipes" tag="li">食譜管理</router-link>
            <router-link to="/meal" tag="li">餐點管理</router-link>
            <router-link to="/set" tag="li">套餐管理</router-link>
            <router-link to="/home" tag="li" class="disabled">店面管理</router-link>
            <router-link to="/home" tag="li" class="disabled">結帳管理</router-link>
            <router-link to="/home" tag="li" class="disabled">客戶資訊</router-link>
            <router-link to="/home" tag="li" class="disabled">系統設定</router-link>
            <router-link to="/home" tag="li" class="disabled">帳號與權限</router-link>
            <li @click="logout" >登出</li>
        </ul>
        <router-link to="/home" class="info">
            <p>{{userName}} 您好<br /><span>{{nowTime}}</span></p>
        </router-link>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        nowTime: '',
      }
    },
    created () {
        this.showTime();
    },
    computed: {
      ...mapGetters([
        'User'
      ]),
      isLogin () {
        return this.User.isLogin;
      },
      userName () {
        return this.User.name;
      }
    },
    methods: {
      logout(){
        localStorage.removeItem('token');
        this.$router.push('/login');
        //清空state裡面的值
        this.$store.commit({
          type: 'clearUserData'
        });
      },
      showTime() {
        let NowDate = new Date();
      　let h = NowDate.getHours();
      　let m = NowDate.getMinutes();
        if (m < 10) {
          m = '0'+m;
        }
        let ap = h > 11 ? 'PM' : 'AM';
        let _this = this;

        this.nowTime = h +':'+ m +' '+ap;
        setTimeout(()=>{
          _this.showTime();
        }, 10000);
      
      }      
    }
  }
</script>

<style lang="scss">
nav {
  button {
    position: absolute;
    right: 0;
  }
  .disabled {
    color: #999;
    cursor: default;
  }
}
</style>
