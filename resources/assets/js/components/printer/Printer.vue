<template>
    <div class="card-class card-class-b js-card-class-printer"
         >
        <div class="content" @click.self="clickPrinter()">

            <Icon v-if="isClass" type="ios-folder" size="20"></Icon>
            <Icon v-else type="ios-document" size="20"></Icon>
            <h3>{{clonePrinterName}}</h3>
            <Input v-model="clonePrinterName"
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
        name: 'Printer',
        props: [
            'printerName',
            'isClass'
        ],
        data() {
            return {
                needSendToParent: ''
            }
        },
        computed: {
            clonePrinterName : {
                get: function() {
                    this.needSendToParent = this.printerName;
                    return this.printerName;
                },
                set: function(newValue) {
                    if (newValue.length > 0) {
                        this.needSendToParent = newValue;
                    }
                    return this.printerName;
                }
            },
        },
        methods: {
            clickPrinter: function() {
                this.$emit('printer-on-click', this.printerName);
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
                    this.$emit('printer-delete', this.printerName);
                }
            },
            addedName () {
                this.$emit('printer-change-name', this.needSendToParent); 
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
