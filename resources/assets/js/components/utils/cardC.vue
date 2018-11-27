<template>
    <div class="card-class card-class-c js-card-class-c"
         >
        <div class="content" @click.self="clickCard()">
            <Icon type="ios-document" size="20"></Icon>
            <h3>{{cloneCardName}}</h3>
            <Input v-model="cloneCardName"
                   @on-click="addedName()"
                   class="hide"
                   placeholder="Something"
                   icon="ios-checkmark-circle"></Input>
            <Dropdown trigger="click"
                @on-click="handleDropDownClick($event)"
            >
                <a href="javascript:void(0)">
                     <Icon type="ios-create-outline" size="20"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem name="edit"><Icon type="ios-add-circle"></Icon>編輯名稱</DropdownItem>
                    <DropdownItem name="delete"><Icon type="ios-add-circle"></Icon>刪除項目</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardC',
        props: ['cardName'],
        data() {
            return {
                needSendToParent: '',
            }
        },
        computed: {
            cloneCardName : {
                get: function() {
                    this.needSendToParent = this.cardName;
                    return this.cardName;
                },
                set: function(newValue) {
                    if (newValue.length > 0) {
                        this.needSendToParent = newValue;
                    }
                    return this.cardName;
                }
            },
        },
        methods: {
            clickCard: function() {
                this.$emit('card-on-click', this.cardName);
                $('.js-card-class-b:not(.B-class)').removeClass('active');
                $('.js-card-class-c').removeClass('active');
                $(this.$el).addClass('active');
            },
            handleDropDownClick: function ($event) {
                // https://github.com/iview/iview/issues/493
                if ($event == "edit") {
                    $(this.$el).find('h3').addClass('hide');
                    $(this.$el).find('.ivu-input-wrapper').removeClass('hide');
                }
                if ($event == "delete") {
                    this.$emit('card-delete', this.cardName);              
                }
            },
            addedName () {
                //把input值傳給父
                this.$emit('card-change-name', this.needSendToParent); 
                $(this.$el).find('.ivu-input-wrapper').addClass('hide');
                $(this.$el).find('h3').removeClass('hide');
            }
        }
    }
</script>
<style lang="scss">
</style>
