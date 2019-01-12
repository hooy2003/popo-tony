<template>
  <section class="header">
    <!-- <router-link to="/UserInfo">User Info</router-link> -->
    <router-link to="/login"
                 v-if="!isLogin"
                 >登入</router-link>
    <router-link to="/signup"
                 v-if="!isLogin"
                 >註冊</router-link>
    <a href=""
       v-if="isLogin"
       @click.prevent="logout"
       >Logout</a>
  </section>
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
      }
    },
    methods: {
      logout(){
        localStorage.removeItem('token');
        this.$router.push('/login');
        // Clean state value
        this.$store.commit({
          type: 'clearUserData'
        });
      }
    }
  }
</script>