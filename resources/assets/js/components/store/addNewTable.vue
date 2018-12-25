<template>
    <div>
        <div class="addclass" @click="clickCard()">
            <Icon type="ios-add-circle-outline" size="20" /></Icon>新增項目
        </div>
        <Input v-model="newValue"
                @on-click="addedName()"
                class="hide"
                placeholder="新項目"
                icon="ios-checkmark-circle"></Input>
    </div>
</template>
<script>
    export default {
        name: 'addFloor',
        props: [
            '',
        ],
        data() {
            return {
                newValue: ''
            }
        },
        computed: {
        },
        methods: {
            clickCard () {
                $(this.$el).find('.addclass').addClass('hide');
                $(this.$el).find('.ivu-input-wrapper').removeClass('hide');
            },
            addedName (newValue) {
                $(this.$el).find('.ivu-input-wrapper').addClass('hide');
                $(this.$el).find('.addclass').removeClass('hide');
                this.$emit('add-table-name', this.newValue);
                this.newValue = '';
            }
        }
    }
</script>
<style lang="scss">
    
</style>
