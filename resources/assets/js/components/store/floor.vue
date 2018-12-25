<template>
    <div class="card-class card-class-a js-card-class-a"
         >
        <div class="content" @click.self="clickCard()">
            <Icon type="ios-folder" size="20"></Icon>
            <h3>{{cloneFloorName}}</h3>
            <Input v-model="cloneFloorName"
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
        name: 'Floor',
        props: ['floorName'],
        data() {
            return {
                needSendToParent: ''
            }
        },
        computed: {
            cloneFloorName : {
                get: function() {
                    this.needSendToParent = this.floorName;
                    return this.floorName;
                },
                set: function(newValue) {
                    if (newValue.length > 0) {
                        this.needSendToParent = newValue;
                    }
                    return this.floorName;
                }
            },
        },
        methods: {
            clickCard: function() {
                this.$emit('floor-on-click', this.floorName);
                $('.js-card-class-a').removeClass('active');
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
                    this.$emit('card-delete', this.floorName);
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
