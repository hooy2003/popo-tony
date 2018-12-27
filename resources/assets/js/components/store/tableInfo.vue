<template>
    <div class="card-set"
         >
        <div class="content">
            <div class="left">
                <div class="input-wrap">
                    <p>桌面名稱</p>
                    <Input v-model="cloneName"                           
                           placeholder="請輸入名稱..."></Input>
                </div>
                <div class="input-wrap">
                    <p>桌位數量</p>
                    <Input v-model="cloneAmount" placeholder="請輸入數量..."></Input>
                </div>               
                <div class="input-wrap" style="justify-content: flex-end;">
                    <Button @click.native="changeItem()">儲存</Button>
                </div>
            </div>      
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

    export default {
        components: {
        },
        name: 'TableInfo',
        props: [
            'tableId',
            'tableName',
            'tableAmount',
        ],
        data() {
            return {
                needSendToParent: {
                                    "tableID": '',
                                    "tableName": '',
                                    "amount": '',
                                    "accountID": 0
                               },
            }
        },
        computed: {
            cloneName: {
                get: function() {
                    this.needSendToParent["tableName"] = this.tableName;
                    return this.tableName;
                },
                set: function(newValue) {
                    this.needSendToParent["tableName"] = newValue;
                    return this.tableName;
                }
            },
            cloneAmount: {
                get: function() {
                    this.needSendToParent["amount"] = this.tableAmount;
                    return this.tableAmount;
                },
                set: function(newValue) {
                    this.needSendToParent["amount"] = newValue;
                    return this.tableAmount;
                }
            },
        },
        methods: {
            changeItem () {
                this.needSendToParent["tableID"] = this.tableId;
                //把input值傳給父
                this.$emit('table-info-change', this.needSendToParent); 
            }
        }
    }
</script>
<style lang="scss">
    .card-set {
        &.active, &:hover {
			i {
				color: #007aff;
			}
		}
        &::after {
            content: '';
            background-color: rgba(0, 0, 0, 0.1);
            height: 1px;
            width: 94%;
            display: block;
            margin: 0 auto;
        }
        .content {
            display: flex;
            padding: 35px 20px 20px 20px;
            box-sizing: border-box;
        }
        .right {
            flex-basis: 25%;
            width: 30%;
            img {
                width: 100%;
                max-width: 150px;
            }
        }
        .left {
            flex: 1;
            padding-left: 20px;
            .input-wrap {
                display: flex;
                margin-bottom: 10px;
                p {
                    width: 70px;
                    text-align: right;
                    line-height: 32px;
                    margin-right: 8px;
                    &.line {
                        width: 100%;
                        text-align: left;
                        line-height: 22px;
                        margin-right: 0;
                        margin-left: 8px;
                    }
                }
                .ivu-switch-checked:after {
                    left: 18px;
                }
            }
            .ivu-input-wrapper {
                width: 100%;
                flex: 1;
            }
        }
    }
</style>
