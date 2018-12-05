<template>
    <div class="card-class js-card-class"
         >
        <div class="content" @click.self="clickCard()">

            <Icon v-if="isClass" type="ios-folder" size="20"></Icon>
            <Icon v-else type="ios-document" size="20"></Icon>
            <h3>{{cloneBillingName}}</h3>
            <Input v-model="cloneBillingName"
                   @on-click="addedName()"
                   class="hide"
                   placeholder="Something"
                   icon="ios-checkmark-circle"></Input>
            <Dropdown trigger="click"
                @on-click="handleDropDownClick($event)"
                placement="bottom-end"
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
        name: 'CardP',
        props: [
            'billingName',
            'isClass'
        ],
        data() {
            return {
                needSendToParent: ''
            }
        },
        computed: {
            cloneBillingName : {
                get: function() {
                    this.needSendToParent = this.billingName;
                    return this.billingName;
                },
                set: function(newValue) {
                    if (newValue.length > 0) {
                        this.needSendToParent = newValue;
                    }
                    return this.billingName;
                }
            },
        },
        methods: {
            clickCard: function() {
                this.$emit('card-on-click', this.cardName);                
                $(this.$el).addClass('active');
            },
            handleDropDownClick: function (name) {
                // https://github.com/iview/iview/issues/493
                if (name == "edit") {
                    $(this.$el).find('h3').addClass('hide');
                    $(this.$el).find('.ivu-input-wrapper').removeClass('hide');
                }
                if (name == "delete") {
                    this.$emit('card-delete', this.cardName);
                }
            },
            addedName () {
                //把input值傳給父
                // this.$emit('card-change-name', this.needSendToParent); 
                // $(this.$el).find('.ivu-input-wrapper').addClass('hide');
                // $(this.$el).find('h3').removeClass('hide');
            }
        }
    }
</script>
<style lang="scss">
    .ivu-card-body {
        h3 {
            display: inline-block;
        }
        &::after {
            content: '>';
            display: block;
            position:absolute;
            right: 10px;
            top: 15px;
        }
    }
</style>
