<template>
  <section class="wrapper">
    <!-- <nav-w ref="nav"></nav-w> -->
    <router-view name="header"></router-view>
    <router-view></router-view>
  </section>
</template>

<script>
import NavW from './components/Nav'

  export default {
    name: 'app',
    components: {
      NavW,
    }
  }
</script>