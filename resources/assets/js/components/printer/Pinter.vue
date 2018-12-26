<template>
    <div class="card-class js-card-class"
         >
        <div class="content" @click.self="clickPinter()">

            <Icon v-if="isClass" type="ios-folder" size="20"></Icon>
            <Icon v-else type="ios-document" size="20"></Icon>
            <h3>{{clonePinterName}}</h3>
            <Input v-model="clonePinterName"
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
        name: 'Pinter',
        props: [
            'pinterName',
            'isClass'
        ],
        data() {
            return {
                needSendToParent: ''
            }
        },
        computed: {
            clonePinterName : {
                get: function() {
                    this.needSendToParent = this.pinterName;
                    return this.pinterName;
                },
                set: function(newValue) {
                    if (newValue.length > 0) {
                        this.needSendToParent = newValue;
                    }
                    return this.pinterName;
                }
            },
        },
        methods: {
            clickPinter: function() {
                this.$emit('pinter-on-click', this.pinterName);                
                $(this.$el).addClass('active');
            },
            handleDropDownClick: function (name) {
                // https://github.com/iview/iview/issues/493
                if (name == "edit") {
                    $(this.$el).find('h3').addClass('hide');
                    $(this.$el).find('.ivu-input-wrapper').removeClass('hide');
                }
                if (name == "delete") {
                    this.$emit('pinter-delete', this.pinterName);
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
