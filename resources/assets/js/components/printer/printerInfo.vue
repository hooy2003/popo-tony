<template>
    <div class="card-set"
         >
        <div class="content">
            <div class="left">
                <div class="input-wrap">
                    <p>出單機名稱</p>
                    <Input v-model="cloneName"                           
                           placeholder="請輸入名稱..."></Input>
                </div>
                <div class="input-wrap">
                    <p>出單機IP</p>
                    <Input v-model="cloneIP" placeholder="請輸入IP..."></Input>
                </div>
                <div class="input-wrap">
                    <p>Emulation</p>
                    <Input v-model="cloneEmulation" placeholder="請輸入Emulation..."></Input>
                </div>
                <div class="input-wrap" style="justify-content: flex-end;">
                    <Button @click.native="changeInfo()">儲存</Button>
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
        name: 'PrinterInfo',
        props: [
            'printerId',
            'printerName',
            'printerIp',
            'printerEmulation',
        ],
        data() {
            return {
                needSendToParent: {
                                    "printerID": '',
                                    "printerName": '',
                                    "ip": '',
                                    "emulation": '',
                                    "accountID": 0
                               },
            }
        },
        computed: {
            cloneName: {
                get: function() {
                    this.needSendToParent["printerName"] = this.printerName;
                    return this.printerName;
                },
                set: function(newValue) {
                    this.needSendToParent["printerName"] = newValue;
                    return this.printerName;
                }
            },
            cloneIP: {
                get: function() {
                    this.needSendToParent["ip"] = this.printerIp;
                    return this.printerIp;
                },
                set: function(newValue) {
                    this.needSendToParent["ip"] = newValue;
                    return this.printerIp;
                }
            },
            cloneEmulation: {
                get: function() {
                    this.needSendToParent["emulation"] = this.printerEmulation;
                    return this.printerEmulation;
                },
                set: function(newValue) {
                    this.needSendToParent["emulation"] = newValue;
                    return this.printerEmulation;
                }
            },
        },
        methods: {
            changeInfo () {
                this.needSendToParent["printerID"] = this.printerId;
                // Send input value to parent
                this.$emit('printer-info-change', this.needSendToParent); 
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
