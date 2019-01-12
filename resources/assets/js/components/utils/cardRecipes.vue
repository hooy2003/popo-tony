<template>
    <div class="card-set"
         >
        <div class="content">            
            <div class="input-wrap">
                <p>商品名稱</p>
                <Input v-model="cloneName"                           
                        placeholder="Enter something..."></Input>
            </div>
            <div class="input-wrap" style="justify-content: flex-end;">
                <Button @click.native="changeItem()">儲存</Button>
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
            'cardRecipesid',
            'cardName',
            'cardRecipesgoryid'
        ],
        data() {
            return {
                needSendToParent: {
                                    "RecipesID": '',
                                    "Name": '',
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
        },
        methods: {
            changeItem () {
                this.needSendToParent["RecipesID"] = this.cardRecipesid;
                console.log('in cardRecipes-OBJ', this.needSendToParent);
                // Send input value to parent
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
    }
</style>
