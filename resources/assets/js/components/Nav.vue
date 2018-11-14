<template>
    <nav id="nav">
        <router-link to="/home" class="logo">
            <img src="../../img/cat.svg" alt="cat">
            <p>System<br /><span>1.01v1</span></p>
        </router-link>
        <ul v-if="isLogin">
            <router-link to="/food" tag="li">食材管理</router-link>
            <router-link to="/home" tag="li">食譜管理</router-link>
            <router-link to="/home" tag="li">餐點管理</router-link>
            <router-link to="/set" tag="li">套餐管理</router-link>
            <router-link to="/home" tag="li">店面管理</router-link>
            <router-link to="/home" tag="li">結帳管理</router-link>
            <router-link to="/home" tag="li">客戶資訊</router-link>
            <router-link to="/home" tag="li">系統設定</router-link>
            <router-link to="/home" tag="li">帳號與權限</router-link>
            <li @click="logout" >Logout</li>
        </ul>
        <router-link to="/userinfo" class="info">
            <p>{{userName}} 您好<br /><span>12:23PM</span></p>
        </router-link>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
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
}
</style>
