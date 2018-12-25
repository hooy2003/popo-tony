<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">食譜</div>
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
                    <AddNewCard  @add-card-name="addNewAClass($event)"
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
                    <CardRecipes
                        v-show="DCardShow"
                        :card-recipesid="currentDItem[0]"
                        :card-name="currentDItem[1]"
                        :card-recipescategoryid="currentDItem[2]"
                        @item-change="changeDItem($event)"
                    ></CardRecipes>
                    <h4 v-show="DCardShow">食譜</h4>
                    <div class="meal-content" v-show="DCardShow">
                       <AddNewIngredients
                            @new-recipes-item="AddNewIngredients($event, currentDItem[0])"
                        ></AddNewIngredients>
                        <div class="detail-meals">
                            <div v-for="(item, index) in deteailMeals"
                                 class="item-meals">
                                <div @click="DeleteRecipes($event, item)">
                                    <Icon type="ios-remove-circle-outline" size="20"></Icon>
                                </div>
                                <div>{{item[2]}}</div>
                                <div>{{item[0]}}</div>
                            </div>
                        </div> 
                    </div>
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
import CardRecipes from '../utils/cardRecipes.vue';
import AddNewCard from '../utils/addcard.vue';
import AddNewIngredients from '../utils/addingredients.vue';


  export default {
    components: {
        CardA, 
        CardB,
        CardC,
        CardRecipes,
        AddNewCard,
        AddNewIngredients
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
        'isLoading',
      ]),
      isLoadingIN: function() {
        return this.isLoading;
      }
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
        isLoadingIN (value) {
            if (value) {
                this.$Message.loading({
                    content: 'Loading...',
                    duration: 1
                });
            }
        } 
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

            // const comboMealID = BItem[0];
            // console.log('BItem被點的時候給出的combomeal ID 4 ', comboMealID);
            // this.getDeteailMeals(comboMealID);
        },
        CItemOnClick: function(CITemName, CItem) {
            console.log('C Item OnClick', CITemName);
            this.DCardShow = true;            
            this.currentDItemName = CITemName;
            this.currentDItem = CItem;
            console.log('當CITEM被點了',this.currentDItem);

            // const comboMealID = CItem[0];
            // console.log('CITEM被點的時候給出的combomeal ID 4 ', comboMealID);
            // this.getDeteailMeals(comboMealID);
         },
        async getAClass() {
            this.currentAClass = await axios.get(process.env.API_HOST + `/RecipesCategory/Get`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBClass(ACategoryID) {
            this.currentBClass = await axios.get(process.env.API_HOST + `/RecipesCategory/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBItem(ACategoryID) {
            this.currentBItem = await axios.get(process.env.API_HOST + `/Recipes/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {                
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getCItem(BCategoryID) {
            console.log('currentCItem CategoryID', BCategoryID);
            // "ComboMealsID": 18,
            // "Name": "主廚一號裡面的餐點A",
            // "Price": 0,
            // "Image": "string",
            // "Visible": false,
            // "PointEnable": false,
            // "ComboMealsCategoryID": 17,
            // "ComboMealsCategoryName": "主廚套餐一號"
            this.currentCItem = await axios.get(process.env.API_HOST + `/Recipes/GetByCategoryID/${BCategoryID}`)
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
        },
        addNewAClass ($event) {
            const ClassFile = {
                                "Name": $event,
                                "RecipesCategoryID": null,
                                "AccountID": 0,
                                "IsFirst": true
                               };
            this.addNewAClassCard(ClassFile); 
        },
        async addNewAClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/RecipesCategory/Create`, ClassFile)
            .then(function (response) {
                vm.getAClass();
                return true;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        addNewBClass($event, ACategoryID) {
            const ClassFile = {
                                "Name": $event,
                                "RecipesCategoryID": ACategoryID,
                                "AccountID": 0,
                                "IsFirst": false
                              };
            console.log('ClassFile', ClassFile);
            this.addNewBClassCard(ClassFile);
        }, 
        async addNewBClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/RecipesCategory/Create`, ClassFile)
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
                                "RecipesCategoryID": ACategoryID,
                                "AccountID": 0
                              };
            this.addNewBItemCard(ClassFile);
        },
        async addNewBItemCard (ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Recipes/Create`, ClassFile)
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
                                "RecipesCategoryID": BCategoryID,
                                "AccountID": 0
                              };
            this.addNewCItemCard(ClassFile);
        },
        async addNewCItemCard (ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Recipes/Create`, ClassFile)
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
            await axios.post(process.env.API_HOST + `/RecipesCategory/Update`, ClassFile)
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
            await axios.post(process.env.API_HOST + `/RecipesCategory/Update`, ClassFile)
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
                                "RecipesID": BITem[0],
                                "Name": newName,
                                "AccountID": 0,
                                "RecipesCategoryID": BITem[2]
                               };
            this.changeBItemCardName(ClassFile, newName);
        },
        async changeBItemCardName(ClassFile, newName) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Recipes/Update`, ClassFile)
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                // 改D欄的名字
                vm.currentDItem[1] = newName;
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        changeCItemName(newName, CITem) {
            const ClassFile = {
                                "RecipesID": CITem[0],
                                "Name": newName,
                                "AccountID": 0,
                                "RecipesCategoryID": CITem[2]
                               };
            this.changeCItemCardName(ClassFile, newName);
        },
        async changeCItemCardName(ClassFile, newName) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Recipes/Update`, ClassFile)
            .then(function (response) {
                vm.getCItem(vm.currentBCardID);
                // 改D欄的名字
                vm.currentDItem[1] = newName;
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        changeDItem(obj) {
            this.changeDItemInfo(obj);
            console.log('D item項目的OBJ', obj);
        },
        async changeDItemInfo(obj) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Recipes/Update`, obj)
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
            const ClassFile = {
                "ID": ACategoryID,
                "AccountID": 0
            };
            this.deleteACard(ClassFile);
        },
        async deleteACard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/RecipesCategory/Delete`, ClassFile)
            .then(function (response) {
                vm.getAClass();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        deleteBClass: function($event, BCategoryID) {
            const ClassFile = {
                "ID": BCategoryID,
                "AccountID": 0
            };
            this.deleteBCard(ClassFile);
        },
        async deleteBCard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/RecipesCategory/Delete`, ClassFile)
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
            // BITem-----
            // "ComboMealsID": 18,
            // "Name": "主廚一號裡面的餐點A",
            // "ComboMealsCategoryID": 17,
            // "ComboMealsCategoryName": "主廚套餐一號"
            // want-----
            // "ComboMealsID": 0,
            // "Name": "string",
            // "AccountID": 0,
            // "ComboMealsCategoryID": 0
            const ClassFile = {
                "RecipesID": BItem[0],
                "AccountID": 0,
                "RecipesCategoryID": BItem[2]
            };
            this.deleteBItemCard(ClassFile);
        },
        async deleteBItemCard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Recipes/Delete`, ClassFile)
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
            const ClassFile = {
                "RecipesID": CItem[0],
                "AccountID": 0,
                "RecipesCategoryID": CItem[2]
            };
            this.deleteCItemCard(ClassFile);
        },
        async deleteCItemCard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Recipes/Delete`, ClassFile)
            .then(function (response) {
                vm.getCItem(vm.currentBCardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getDeteailMeals(comboMealID) {
            // this.deteailMeals = await axios.get(process.env.API_HOST + `/MealsComboMealsMap/GetByComboMealsID/${comboMealID}`)
            // .then(function (response) {
            //     const arrayList = response.data.map(item => Object.values(item));
            //     //  "MealsComboMealsMapID": 0,
            //     //  "MealsID": 0,
            //     //  "MealsName": "string",
            //     //  "ComboMealsID": 0,
            //     //  "ComboMealsName": "string"
            //     console.log('IngredientsRecipesMap/GetByComboMealsID/', arrayList);
            //     return arrayList;
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        },
        AddNewIngredients($event, ComboMealsID) {
            // "MealsID": 21,
            // "Name": "一號裡面的餐點",
            // "MealsCategoryID": 19,
            // "MealsCategoryName": "招牌一號"

            console.log('加入餐點------', $event);
            const ClassFile = [{
                "IngredientsID": $event[0],
                "RecipesID": ComboMealsID,
                "Amount": 0,
                "AccountID": 0
            },];
            console.log('ClassFile', ClassFile);
            const vm = this;
            axios.post(process.env.API_HOST + `/IngredientsRecipesMap/Create`, ClassFile)
            .then(function (response) {
                console.log('AddNewIngredients', response)
                vm.getDeteailMeals( ComboMealsID );
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        DeleteRecipes($event, item) {
            console.log('刪除餐點------', item);
            // 'item' is-------
            // "MealsComboMealsMapID": 46,
            // "MealsID": 20,
            // "MealsName": "test1_1",
            // "ComboMealsID": 18,
            // "ComboMealsName": "主廚一號裡面的餐點A"

            const ClassFile = [
                {
                    "MealsComboMealsMapID": item[0],
                    "MealsID": item[1],
                    "ComboMealsID": item[3],
                    "AccountID": 0
                }
            ];
            const vm = this;
            axios.post(process.env.API_HOST + `/MealsComboMealsMap/Delete`, ClassFile)
            .then(function (response) {
                console.log('DeleteRecipes', response)
                console.log(item[3]);
                vm.getDeteailMeals( item[3] );
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
