<template>
    <section class="content">
        <div class="easyui-layout" style="width:700px;height:350px;">
            <div id="p" data-options="region:'west'" title="West" style="width:30%;padding:10px">
                <p>width: 30%</p>
            </div>
            <div data-options="region:'center'" title="Center">
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'User'
      ]),
    }
  }
</script>