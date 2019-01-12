<template>
    <div class="card-class js-card-class-area"
         >
        <div class="content" @click.self="clickArea()">
            <Icon v-if="isClass" type="ios-folder" size="20"></Icon>
            <Icon v-else type="ios-document" size="20"></Icon>
            <h3>{{cloneAreaName}}</h3>
            <Input v-model="cloneAreaName"
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
        name: 'Area',
        props: [
            'areaName',
            'isClass'
        ],
        data() {
            return {
                needSendToParent: ''
            }
        },
        computed: {
            cloneAreaName : {
                get: function() {
                    this.needSendToParent = this.areaName;
                    return this.areaName;
                },
                set: function(newValue) {
                    if (newValue.length > 0) {
                        this.needSendToParent = newValue;
                    }
                    return this.areaName;
                }
            },
        },
        methods: {
            clickArea: function() {
                this.$emit('area-on-click', this.areaName);
                $('.js-card-class-area').removeClass('active');
                $('.js-card-class-printer').removeClass('active');
                $(this.$el).addClass('active');
            },
            handleDropDownClick: function (name) {
                // https://github.com/iview/iview/issues/493
                if (name == "edit") {
                    $(this.$el).find('h3').addClass('hide');
                    $(this.$el).find('.ivu-input-wrapper').removeClass('hide');
                }
                if (name == "delete") {
                    this.$emit('area-delete', this.areaName);
                }
            },
            addedName () {
                // Send input value to parent
                this.$emit('area-change-name', this.needSendToParent); 
                $(this.$el).find('.ivu-input-wrapper').addClass('hide');
                $(this.$el).find('h3').removeClass('hide');
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
