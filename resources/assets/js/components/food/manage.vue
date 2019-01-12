<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">食材</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardA v-for="(item, index) in currentAClass"
                           :key='item.index'
                           :card-name="item['name']"
                           :class="{ active: index === 0 }"
                           @card-change-name="changeAName($event, item['id'])"
                           @card-on-click="AClassOnClick($event, item['id'])"
                           @card-delete="deleteAClass($event, item['id'])"
                    >
                    </CardA>
                    <AddNewCard  @add-card-name="addNewAClass($event, currentACardID)"
                                 class="add-new-card"
                    >
                    </AddNewCard>
                </div>
            </Col>
            <Col span="5">
                <div class="title">{{currentACardName}}</div>
                <div class="union union-half">
                    <h4>類別</h4>
                    <CardB v-for="(item, index) in currentBClass"
                           :key='item.index'
                           :card-name="item['name']"
                           :is-class="true"
                           :class="{ lastcard: index === (currentBClass.length-1) && index > 1 }"
                           @card-change-name="changeBName($event, iitem['id'])"
                           @card-on-click="BClassOnClick($event, item['id'])"
                           @card-delete="deleteBClass($event, item['id'])"
                           class="B-class"
                    >
                    </CardB>
                    <AddNewCard  @add-card-name="addNewBClass($event, currentACardID)"
                                 class="add-new-card"
                                 v-show="currentBClass.length >= 0"
                    >
                    </AddNewCard>
                    </CardA>
                </div>
                <div class="union">
                    <h4>項目</h4>
                    <CardB v-for="(item, index) in currentBItem"
                           :key='item.index'
                           :card-name="item['name']" 
                           :class="{ lastcard: index === (currentBItem.length-1) && index > 1 }"
                           @card-change-name="changeBItemName($event, item)"
                           @card-on-click="BItemOnClick($event, item)"
                           @card-delete="deleteBItem($event, item)"
                    >
                    </CardB>
                    <AddNewCard  @add-card-name="addNewBItem($event, currentACardID)"
                                 class="add-new-card"
                                 v-show="currentBItem.length >= 0"
                    >
                    </AddNewCard>
                </div>
            </Col>
            <Col span="5">
                <div class="title">{{currentBCardName}}</div>
                <div class="union">
                    <h4>項目</h4>                    
                    <CardC v-for="(item, index) in currentCItem"
                           :key='item.index'
                           :card-name="item['name']"
                           :class="{ lastcard: index === (currentCItem.length-1) && index > 1 }"
                           @card-change-name="changeCItemName($event, item)"
                           @card-on-click="CItemOnClick($event, item)"
                           @card-delete="deleteCItem($event, item)"                           
                           v-show="CCardShow"
                    >
                    </CardC>
                    <AddNewCard  @add-card-name="addNewCItem($event, currentBCardID)"
                                 class="add-new-card"
                                 v-show="CCardShow"
                    >
                    </AddNewCard>
                </div>
            </Col>
            <Col span="9">
                <div class="title">{{currentDItemName}}</div>
                <div class="union">
                    <CardFood
                        v-show="DCardShow"
                        :card-id="currentDItem['id']"
                        :card-name="currentDItem['name']"
                        :card-unit="currentDItem['unit']"
                        :card-price="currentDItem['price']"
                        @item-change="changeDItem($event)"
                    ></CardFood>                                 
                </div>
            </Col>
        </Row>        
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import CardA from '../utils/card.vue';
import CardB from '../utils/cardB.vue';
import CardC from '../utils/cardC.vue';
import CardFood from '../utils/cardFood.vue';
import AddNewCard from '../utils/addcard.vue';
// let mangerHelper = require('../../utils/mangerHelper');


  export default {
    components: {
        CardA, 
        CardB,
        CardC,
        CardFood,
        AddNewCard
    },
    data() {
        return {
            currentAClass: [],
            currentACardID: '',
            currentACardName: '無',
            currentBClass: [],
            currentBCardName: '尚無類別',
            currentBItem: [],
            currentBItemName: '尚無項目',
            currentCItem: [],
            currentDItemName: '尚無項目',
            currentDItem: [],
            CCardShow: false,
            DCardShow: false,
            DataIsUpdate: false
        }
    },
    mounted: function() {
        
    },
    created () {
        this.getAClass();
    },
    computed: {
      ...mapGetters([
        'User',
        'isLoading',
      ])
    },
    watch: {
        // Handle Async
        currentAClass: function(value) {
            const BdefaultID = this.currentAClass[0]['id'];
            const BdefaultName = this.currentAClass[0]['name'];

            // Give B blokc a name
            this.currentACardName = BdefaultName;
            this.currentACardID = BdefaultID;
            this.getBClass(BdefaultID);
            this.getBItem(BdefaultID);
        },
        isLoading (value) {
            if (value) {
                this.$Message.loading({
                    content: 'Loading...',
                    duration: 1
                });
            }
        }
    },
    // Improve initialization data call timing 
    // https://www.jianshu.com/p/2048f1a66c33
    methods: {        
        AClassOnClick: function(ACardName, ACategoryID) {
            this.DCardShow = false;
            // Give B blokc a name
            this.currentACardName = ACardName;
            this.currentACardID   = ACategoryID;
            // Clean C block
            this.currentCItem = '';
            this.currentDItemName = '尚無項目';

            this.getBClass(ACategoryID);
            this.getBItem(ACategoryID);
        },
        BClassOnClick: function(BCardName, BCategoryID) {
            this.CCardShow = true;
            this.DCardShow = false;
            // Give C blokc a name
            this.currentBCardName = BCardName;
            this.currentBCardID = BCategoryID;
            this.getCItem(BCategoryID);
        },

        BItemOnClick: function(BItemName, BItem) {
            this.CCardShow = false;
            this.DCardShow = true;
            this.currentBCardName = '尚無項目';
            this.currentDItemName = BItemName;
            this.currentDItem = BItem;
        },
        CItemOnClick: function(CITemName, CItem) {
            this.DCardShow = true;            
            this.currentDItemName = CITemName;
            this.currentDItem = CItem;
         },
        async getAClass() {
            this.currentAClass = await axios.get(process.env.API_HOST + `/IngredientsCategory/Get`)
            .then(function (response) {
                console.log('response', response.data);
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBClass(ACategoryID) {
            this.currentBClass = await axios.get(process.env.API_HOST + `/IngredientsCategory/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBItem(ACategoryID) {
            this.currentBItem = await axios.get(process.env.API_HOST + `/Ingredients/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getCItem(BCategoryID) {
            this.currentCItem = await axios.get(process.env.API_HOST + `/Ingredients/GetByCategoryID/${BCategoryID}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        addNewAClass ($event) {
            const ClassFile = {
                                "Name": $event,
                                "AccountID": 0,
                                "IsFirst": true
                               };
            this.addNewAClassCard(ClassFile);            
        },
        async addNewAClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/IngredientsCategory/Create`, ClassFile)
            .then(function (response) {
                vm.getAClass(vm.currentACardID);
                return true;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        addNewBClass($event, ACategoryID) {
            const ClassFile = {
                                "Name": $event,
                                "IngredientsCategoryID": ACategoryID,
                                "AccountID": 0,
                                "IsFirst": false
                              };
            this.addNewBClassCard(ClassFile);
        }, 
        async addNewBClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/IngredientsCategory/Create`, ClassFile)
            .then(function (response) {
                vm.getBClass(vm.currentACardID);
                return true;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        addNewBItem($event, ACategoryID) {
            const ClassFile = {
                                "Name": $event,
                                "IngredientsCategoryID": ACategoryID,
                                "Unit": "公斤",
                                "Price": 0,
                                "AccountID": 0
                              };
            this.addNewBItemCard(ClassFile);
        },
        async addNewBItemCard (ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Ingredients/Create`, ClassFile)
            .then(function (response) {                
                vm.getBItem(vm.currentACardID);
                return true;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        addNewCItem($event, BCategoryID) {
            const ClassFile = {
                                "Name": $event,
                                "IngredientsCategoryID": BCategoryID,
                                "Unit": "公斤",
                                "Price": 0,
                                "AccountID": 0
                              };
            this.addNewCItemCard(ClassFile);
        },
        async addNewCItemCard (ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Ingredients/Create`, ClassFile)
            .then(function (response) {                
                vm.getCItem(vm.currentBCardID);
                return true;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        changeAName(newName, ACategoryID) {
            const ClassFile = {
                                "ID": ACategoryID,
                                "Name": newName,
                                "AccountID": 0
                              };
            this.changeACardName(ClassFile);
        },
        async changeACardName(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/IngredientsCategory/Update`, ClassFile)
            .then(function (response) {
                vm.getAClass();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        changeBName(newName, BCategoryID) {
            const ClassFile = {
                                "ID": BCategoryID,
                                "Name": newName,
                                "AccountID": 0
                              };
            this.changeBCardName(ClassFile);
        },
        async changeBCardName(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/IngredientsCategory/Update`, ClassFile)
            .then(function (response) {
                vm.getAClass();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },   
        changeBItemName(newName, BITem) {
            const ClassFile = {
                                "ID": BITem['id'],
                                "Name": newName,
                                "Unit": BITem['unit'],
                                "Price": BITem['price'],
                                "AccountID": 0
                               };
            this.changeBItemCardName(ClassFile);
            console.log('changeBItemName', ClassFile);
        },
        async changeBItemCardName(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Ingredients/Update`, ClassFile)
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        changeCItemName(newName, CITem) {
            const ClassFile = {
                                "ID": CITem[0],
                                "Name": newName,
                                "Unit": CITem[2],
                                "Price": CITem[3],
                                "AccountID": 0
                               };
            this.changeCItemCardName(ClassFile);
        },
        async changeCItemCardName(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Ingredients/Update`, ClassFile)
            .then(function (response) {
                vm.getCItem(vm.currentBCardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        changeDItem(obj) {
            this.changeDItemInfo(obj);
        },
        async changeDItemInfo(obj) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Ingredients/Update`, obj)
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                vm.getCItem(vm.currentBCardID);
                if (!response.data.Success) {
                    vm.$Message.error(response.data.Message);
                }
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        }, 
        deleteAClass: function($event, ACategoryID) {
            this.deleteACard(ACategoryID);
        },
        async deleteACard(ACategoryID) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/IngredientsCategory/Delete`, { "ID":ACategoryID })
            .then(function (response) {
                vm.getAClass();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        deleteBClass: function($event, BCategoryID) {
            this.deleteBCard(BCategoryID);
        },
        async deleteBCard(BCategoryID) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/IngredientsCategory/Delete`, { "ID":BCategoryID })
            .then(function (response) {
                vm.getBClass(vm.currentACardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        deleteBItem: function($event, BItem) {
            // Item[0] 是項目的ID
            // Item[4] 是項目的分類ID
            this.deleteBItemCard(BItem[0], BItem[4]);
        },
        async deleteBItemCard(BItemID, BItemCID) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Ingredients/Delete`, { "ID":BItemID, "ingredientsCategoryID": BItemCID})
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        deleteCItem: function($event, CItem) {
            // Item[0] 是項目的ID
            // Item[4] 是項目的分類ID
            this.deleteCItemCard(CItem[0], CItem[4]);
        },
        async deleteCItemCard(CItemID, CItemCID) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Ingredients/Delete`, { "ID":CItemID, "ingredientsCategoryID": CItemCID})
            .then(function (response) {
                vm.getCItem(vm.currentBCardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    }
  }
</script>

<style lang="scss">    
</style>
