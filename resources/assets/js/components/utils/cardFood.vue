<template>
    <div class="card-food"
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
                    <p>單位</p>
                    <Input v-model="cloneUnit" placeholder="Enter something..."></Input>
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
                    return this.cardUnit;                    
                },
                set: function(newValue) {
                    this.needSendToParent["Unit"] = newValue;
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
            imgSrc () {
                console.log('imgSrcimgSrcimgSrc', this.cardImage);
                return 'http://demo.airdesign.com.tw/aPosWeb/upload/' + this.cardImage;
            }
        },
        methods: {
            changeItem () {
                this.needSendToParent["ID"] = this.cardId;
                // Send input value to parent
                this.$emit('item-change', this.needSendToParent); 
            }
        }
    }
</script>
<style lang="scss">
    .card-food {
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
                }
            }
            .ivu-input-wrapper {
                width: 100%;
                flex: 1;
            }
        }
    }
</style>
