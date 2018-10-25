<template>
  <section class="wrapper">
    <!-- <navbar v-if="isLogin"></navbar> -->
    <router-view name="header"></router-view>
    <router-view></router-view>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    computed: {
      ...mapGetters([
        'User'
      ]),
      isLogin () {
        return this.User.isLogin;
      }
    },
  }
</script>