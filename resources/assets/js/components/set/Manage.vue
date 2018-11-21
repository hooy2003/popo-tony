<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">套餐</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardA v-for="(item, index) in currentAClass"
                           :key='item.index'
                           :card-name="item[1]"
                           :class="{ active: index === 0 }"
                           @card-change-name="changeAName($event, item[0])"
                           @card-on-click="AClassOnClick($event, item[0])"
                           @card-delete="deleteAClass($event, item[0])"
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
                           :card-name="item[1]"
                           :is-class="true"
                           :class="{ lastcard: index === (currentBClass.length-1) && index > 1 }"
                           @card-change-name="changeBName($event, item[0])"
                           @card-on-click="BClassOnClick($event, item[0])"
                           @card-delete="deleteBClass($event, item[0])"
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
                           :card-name="item[1]" 
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
                           :card-name="item[1]"
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
                    <CardSet
                        v-show="DCardShow"
                        :card-combomealid="currentDItem[0]"
                        :card-name="currentDItem[1]"
                        :card-price="currentDItem[2]"
                        :card-image="currentDItem[3]"
                        :card-combomealcategoryid="currentDItem[6]"
                        @item-change="changeDItem($event)"
                    ></CardSet>
                    <h4 v-show="DCardShow">餐點</h4>
                    <div class="meal-content" v-show="DCardShow">
                        <AddNewMeals
                            @new-recipes-item="AddNewRecipes($event, currentDItem[0])"
                        ></AddNewMeals>
                        <div class="detail-meals">
                            <div v-for="(item, index) in deteailMeals"
                                 class="item-meals">
                                <div>{{item[2]}}</div>
                                <div>{{item[0]}}</div>
                            </div>
                            <div class="item-meals">
                                <div>海苔</div>
                                <div>100g</div>
                            </div>
                        </div>                        
                    </div>
                    <h4 v-show="DCardShow">調整口味</h4>
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
import CardSet from '../utils/cardSet.vue';
import AddNewCard from '../utils/addcard.vue';
import AddNewMeals from '../utils/addmeals.vue';
// let WebHelper = require('../../utils/wehelper');


  export default {
    components: {
        CardA, 
        CardB,
        CardC,
        CardSet,
        AddNewCard,
        AddNewMeals
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
            deteailMeals: [],
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
        'foodAClass',
        'foodBClass',
        'foodBItem',
        'foodCItem',
        'rules'
      ]),
    },
    watch: {
        // 處理非同步
        currentAClass: function(value) {
            const BdefaultID = this.currentAClass[0][0];
            const BdefaultName = this.currentAClass[0][1];

            // // 給B區塊標題名字
            this.currentACardName = BdefaultName;
            this.currentACardID = BdefaultID;
            this.getBClass(BdefaultID);
            this.getBItem(BdefaultID);            
        },      
    },
    // 改进vue的初始化数据调用时机 --
    // https://www.jianshu.com/p/2048f1a66c33
    methods: {        
        AClassOnClick: function(ACardName, ACategoryID) {
            console.log('點了A區哪張卡', ACardName);
            console.log('點了A區哪張卡', ACategoryID);
            // ID從卡傳來了        
            this.DCardShow = false;
            // 給B區塊標題名字
            this.currentACardName = ACardName;
            this.currentACardID   = ACategoryID;
            // 清空C區塊
            this.currentCItem = '';

            this.getBClass(ACategoryID);
            this.getBItem(ACategoryID);
        },
        BClassOnClick: function(BCardName, BCategoryID) {
            this.CCardShow = true;
            this.DCardShow = false;
            // 給C區塊名字
            this.currentBCardName = BCardName;
            this.currentBCardID = BCategoryID;
            console.log('BCategoryID', BCategoryID);
            this.getCItem(BCategoryID);
        },

        BItemOnClick: function(BItemName, BItem) {
            // 這個直接寫在抓來的ITEM裡面了
            console.log(BItem);
            this.CCardShow = false;
            this.DCardShow = true;
            this.currentBCardName = '尚無項目';
            this.currentDItemName = BItemName;
            this.currentDItem = BItem;

            const comboMealID = BItem[0];
            console.log('BItem被點的時候給出的combomeal ID 4 ', comboMealID);
            this.getDeteailMeals(comboMealID);
        },
        CItemOnClick: function(CITemName, CItem) {
            console.log('C Item OnClick', CITemName);
            this.DCardShow = true;            
            this.currentDItemName = CITemName;
            this.currentDItem = CItem;
            console.log('當CITEM被點了',this.currentDItem);

            const comboMealID = CItem[0];
            console.log('CITEM被點的時候給出的combomeal ID 4 ', comboMealID);
            this.getDeteailMeals(comboMealID);
         },
        async getAClass() {
            this.currentAClass = await axios.get(process.env.API_HOST + `/ComboMealsCategory/Get`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBClass(ACategoryID) {
            this.currentBClass = await axios.get(process.env.API_HOST + `/ComboMealsCategory/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBItem(ACategoryID) {
            this.currentBItem = await axios.get(process.env.API_HOST + `/ComboMeals/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {                
                const nameList = response.data.map(item => Object.values(item));
                console.log('nameList', nameList);
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getCItem(BCategoryID) {
            console.log('currentCItem CategoryID', BCategoryID);
            // "ID": 4,
            // "Name": "南澳小黃瓜",
            // "Unit": "公克",
            // "Price": 40,
            // "ComboMealsCategoryID": 10,
            // "ComboMealsCategoryName": "五穀根莖類"
            this.currentCItem = await axios.get(process.env.API_HOST + `/ComboMeals/GetByCategoryID/${BCategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getDItem(ItemID) {
            // 廢氣中---------------
            // this.currentDItem = await axios.get(process.env.API_HOST + `/ComboMeals/GetByCategoryID/${ItemID}`)
            // .then(function (response) {
            //     const nameList = response.data.map(item => Object.values(item));
            //     return nameList;
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
            // 廢氣中---------------
        },
        addNewAClass ($event, currentACardID) {
            const ClassFile = {
                                "Name": $event,
                                "ComboMealsCategoryID": currentACardID,
                                "AccountID": 0,
                                "IsFirst": true
                               };
            this.addNewAClassCard(ClassFile);            
        },
        async addNewAClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMealsCategory/Create`, ClassFile)
            .then(function (response) {
                vm.getAClass(vm.currentACardID);
                return true;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        addNewBClass($event, ACategoryID) {
            const ClassFile = {
                                "Name": $event,
                                "ComboMealsCategoryID": ACategoryID,
                                "AccountID": 0,
                                "IsFirst": false
                              };
            console.log('ClassFile', ClassFile);
            this.addNewBClassCard(ClassFile);
        }, 
        async addNewBClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMealsCategory/Create`, ClassFile)
            .then(function (response) {
                console.log('addNewBClassCard', response); 
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
                                "ComboMealsCategoryID": ACategoryID,
                                "Price": 0,
                                "Image": "string",
                                "Video": "string",
                                "PointEnable": true,
                                "RecipesID": 0,
                                "AccountID": 0
                              };
            this.addNewBItemCard(ClassFile);
        },
        async addNewBItemCard (ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMeals/Create`, ClassFile)
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
                                "ComboMealsCategoryID": BCategoryID,
                                "Price": 0,
                                "Image": "string",
                                "Video": "string",
                                "PointEnable": true,
                                "RecipesID": 0,
                                "AccountID": 0
                              };
            this.addNewCItemCard(ClassFile);
        },
        async addNewCItemCard (ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMeals/Create`, ClassFile)
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
            await axios.post(process.env.API_HOST + `/ComboMealsCategory/Update`, ClassFile)
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
            await axios.post(process.env.API_HOST + `/ComboMealsCategory/Update`, ClassFile)
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
                                "ID": BITem[0],
                                "Name": newName,
                                "Unit": BITem[2],
                                "Price": BITem[3],
                                "AccountID": 0
                               };
            this.changeBItemCardName(ClassFile);
        },
        async changeBItemCardName(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMeals/Update`, ClassFile)
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
            await axios.post(process.env.API_HOST + `/ComboMeals/Update`, ClassFile)
            .then(function (response) {
                vm.getCItem(vm.currentBCardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        changeDItem(obj) {
            console.log('DITem--------*******', obj);
            console.log('DITem--------*******', this.currentDItem[0]);
            this.changeDItemInfo(obj);
        },
        async changeDItemInfo(obj) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMeals/Update`, obj)
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                vm.getCItem(vm.currentBCardID);
                console.log('changD', response);                
                return;
            })
            .catch(function (error) {
                console.log(error)
            });
        }, 
        deleteAClass: function($event, ACategoryID) {
            this.deleteACard(ACategoryID);
        },
        async deleteACard(ACategoryID) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMealsCategory/Delete`, { "ID":ACategoryID })
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
            await axios.post(process.env.API_HOST + `/ComboMealsCategory/Delete`, { "ID":BCategoryID })
            .then(function (response) {
                console.log(response);
                console.log('delete success');
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
            await axios.post(process.env.API_HOST + `/ComboMeals/Delete`, { "ID":BItemID, "ingredientsCategoryID": BItemCID})
            .then(function (response) {
                console.log(response);
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
        async deleteCItemCard(CItemID) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMeals/Delete`, { "ID":CItemID })
            .then(function (response) {
                console.log('---------------------');
                vm.getCItem(vm.currentBCardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getDeteailMeals(comboMealID) {
            this.deteailMeals = await axios.get(process.env.API_HOST + `/MealsComboMealsMap/GetByComboMealsID/${comboMealID}`)
            .then(function (response) {
                const arrayList = response.data.map(item => Object.values(item));
                //  "MealsComboMealsMapID": 0,
                //  "MealsID": 0,
                //  "MealsName": "string",
                //  "ComboMealsID": 0,
                //  "ComboMealsName": "string"
                console.log('MealsComboMealsMap/GetByComboMealsID/', arrayList);
                return arrayList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        AddNewRecipes($event, ComboMealsID) {
            // "MealsID": 21,
            // "Name": "一號裡面的餐點",
            // "Price": 0,
            // "Image": null,
            // "Visible": false,
            // "PointEnable": false,
            // "MealsCategoryID": 19,
            // "MealsCategoryName": "招牌一號"

            console.log('end------', $event);

            const ClassFile = [{
                "MealsID": $event[0],
                "ComboMealsID": ComboMealsID,
                "AccountID": 0
            },];
            // "MealsID": 21,
            // "ComboMealsID": 17,
            // "AccountID": 0
            console.log('ClassFile', ClassFile);

            const vm = this;
            axios.post(process.env.API_HOST + `/MealsComboMealsMap/Create`, ClassFile)
            .then(function (response) {
                console.log('AddNewRecipes', response)
            })
            .catch(function (error) {
                console.log('error', error);
            });
        }
    }
  }
</script>

<style lang="scss">    
</style>
