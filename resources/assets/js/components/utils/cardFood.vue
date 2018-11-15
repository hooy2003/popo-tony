<template>
    <div class="card-food"
         >
        <div class="content">
            <div class="right">
               <image-uploader
                  :src="imgSrc2"
                  :maxSize="10"
                ></image-uploader>
            </div>
            <div class="left">
                <div class="input-wrap">
                    <p>商品名稱</p>
                    <Input v-model="cloneName"                           
                           placeholder="Enter something..."></Input>
                </div>
                <div class="input-wrap">
                    <p>價位</p>
                    <Input v-model="clonePrice" placeholder="Enter something..."></Input>
                </div>
                <div class="input-wrap">
                    <p>單位</p>
                    <Select v-model="cloneUnit" slot="append" style="width: 70px">
                        <Option value="strip">條</Option>
                        <Option value="one">顆</Option>
                        <Option value="box">盒</Option>
                        <Option value="g">公克</Option>
                        <Option value="kg">公斤</Option>
                    </Select>
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
import ImageUploader from '../ImageUploader.vue';

    export default {
        components: {
            ImageUploader
        },
        name: 'CardFood',
        props: [
            'cardId',
            'cardName',
            'cardUnit',
            'cardPrice',
        ],
        data() {
            return {
                needSendToParent: {
                                    "ID": '',
                                    "Name": '',
                                    "Unit": '',
                                    "Price": '',
                                    "AccountID": 0
                               },
            }
        },
        computed: {
            ...mapGetters([
                'imgSrc'
            ]),
            cloneName: {
                get: function() {
                    this.needSendToParent["Name"] = this.cardName;
                    return this.cardName;
                },
                set: function(newValue) {
                    this.needSendToParent["Name"] = newValue;
                    return this.cardName;
                }
            },
            cloneUnit: {
                get: function() {
                    this.needSendToParent["Unit"] = this.cardUnit;
                    if (this.cardUnit == "條") {
                        return 'strip';
                    }
                    if (this.cardUnit == "顆") {
                        return 'one';
                    }
                    if (this.cardUnit == "盒") {
                        return 'box';
                    }
                    if (this.cardUnit == "公克") {
                        return 'g';
                    }
                    if (this.cardUnit == "公斤") {
                        return 'kg';
                    }                    
                },
                set: function(newValue) {
                    if (newValue == "strip") {
                        this.needSendToParent["Unit"] = "條";
                    }
                    if (newValue == "one") {
                        this.needSendToParent["Unit"] = "顆";
                    }
                    if (newValue == "box") {
                        this.needSendToParent["Unit"] = "盒";
                    }
                    if (newValue == "g") {
                        this.needSendToParent["Unit"] = "公克";
                    }
                    if (newValue == "kg") {
                        this.needSendToParent["Unit"] = "公斤";
                    }
                    return this.cardUnit;
                }
            },
            clonePrice: {
                get: function() {
                    this.needSendToParent["Price"] = this.cardPrice;
                    return this.cardPrice;
                },
                set: function(newValue) {                    
                    this.needSendToParent["Price"] = newValue;
                    return this.cardPrice;
                }
            },
            imgSrc2 () {
                return this.imgSrc;
            }
        },
        methods: {
            changeItem () {
                this.needSendToParent["ID"] = this.cardId;
                console.log('in cardFood-OBJ', this.needSendToParent);
                //把input值傳給父
                this.$emit('item-change', this.needSendToParent); 
            }
        }
    }
</script>
<style lang="scss">
    .card-food {
        &.active, &:hover {
			i {
				color: #0179fe;
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
                }
            }
            .ivu-input-wrapper {
                width: 100%;
                flex: 1;
            }
        }
    }
</style>
