<template>
    <div class="card-class card-class-b js-card-class-b"
         >
        <div class="content" @click.self="clickCard()">

            <Icon v-if="isClass" type="ios-folder" size="20" color="#56baed"></Icon>
            <Icon v-else type="ios-document" size="20" color="#56baed"></Icon>
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
                    <Icon type="ios-create-outline" size="20" color="#56baed"></Icon>
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
        name: 'CardB',
        props: [
            'cardName',
            'isClass'
        ],
        data() {
            return {
                // 無須通知父組件 madeFrom 異動資訊
                innerCardcardName: this.cardName,
                needSendToParent: ''
            }
        },
        computed: {
            cloneCardName : {
                get: function() {
                    return this.cardName;
                },
                set: function(newValue) {                    
                    this.needSendToParent = newValue;
                    return this.cardName;
                }
            },
        },
        methods: {
            clickCard: function() {
                this.$emit('card-on-click', this.cardName);
                $('.js-card-class-b').removeClass('active');
                $('.js-card-class-c').removeClass('active');
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
                this.$emit('card-change-name', this.needSendToParent); 
                $(this.$el).find('.ivu-input-wrapper').addClass('hide');
                $(this.$el).find('h3').removeClass('hide');
            }
        }
    }
</script>
<style lang="scss">
    
</style>
