<template>
    <div >
        <div class="content">
            <button @click="showAPI">SHow API</button>
        </div>
    </div>
</template>
<script>
    export default {        
        computed: {

        },
        methods: {
            showAPI () {
                axios.get(`api/IngredientsCategory/Get`)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
<style lang="scss">
</style>
