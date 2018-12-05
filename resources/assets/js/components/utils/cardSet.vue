<template>
    <div class="card-set"
         >
        <div class="content">
            <div class="right">
               <!-- <image-uploader
                  :src="imgSrc2"
                  :maxSize="10"
                ></image-uploader> -->
                <img :src="imgSrc"></img>
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
                    <i-Switch v-model="cloneVisible"></i-Switch>
                    <p class="line">是否上架</p>
                </div>
                <div class="input-wrap">
                    <i-Switch v-model="clonePointenable"></i-Switch>
                    <p class="line">是否算積分</p>
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
            'cardCombomealid',
            'cardName',
            'cardPrice',
            'cardImage',
            'cardVisible',
            'cardPointenable',
            'cardCombomealcategoryid'
        ],
        data() {
            return {
                needSendToParent: {
                                    "ComboMealsID": '',
                                    "Name": '',
                                    "Price": '',
                                    "Image": "string",
                                    "video": "string",
                                    "Visible": false,
                                    "Pointenable": false,
                                    "AccountID": 0
                               },
            }
        },
        computed: {
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
            cloneVisible: {
                get: function() {
                    this.needSendToParent["Visible"] = this.cardVisible;
                    return this.cardVisible;
                },
                set: function(newValue) {                    
                    this.needSendToParent["Visible"] = newValue;
                    return this.cardVisible;
                }
            },
            clonePointenable: {
                get: function() {
                    this.needSendToParent["Pointenable"] = this.cardPointenable;
                    return this.cardPointenable;
                },
                set: function(newValue) {                    
                    this.needSendToParent["Pointenable"] = newValue;
                    return this.cardPointenable;
                }
            },
            imgSrc () {
                console.log('imgSrcimgSrcimgSrc', this.cardImage);
                return 'http://demo.airdesign.com.tw/aPosWeb/upload/' + this.cardImage;
            }
        },
        methods: {
            changeItem () {
                this.needSendToParent["ComboMealsID"] = this.cardCombomealid;
                console.log('in cardFood-OBJ', this.needSendToParent);
                //把input值傳給父
                this.$emit('item-change', this.needSendToParent); 
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
