<template>
  <section class="content">
      <h1>Home {{userName}}</h1>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'User'
      ]),
      userName () {
        return this.User.name;
      },
    }
  }
</script>