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
                    <CardMeal
                        v-show="DCardShow"
                        :card-mealid="currentDItem[0]"
                        :card-name="currentDItem[1]"
                        :card-price="currentDItem[2]"
                        :card-image="currentDItem[3]"
                        :card-visible="currentDItem[4]"
                        :card-pointenable="currentDItem[5]"
                        :card-mealcategoryid="currentDItem[6]"                        
                        @item-change="changeDItem($event)"
                    ></CardMeal>
                    <h4 v-show="DCardShow">餐點</h4>
                    <div class="meal-content" v-show="DCardShow">
                        <AddNewRecipes
                            @new-recipes-item="AddNewRecipes($event, currentDItem)"                            
                        ></AddNewRecipes>
                        <div class="detail-meals">
                            <div class="item-meals">
                                <div @click="DeleteRecipes($event, item)">
                                    <Icon type="ios-remove-circle-outline" size="20"></Icon>
                                </div>
                                <div>{{deteailMeals}}</div>
                            </div>
                        </div>                        
                    </div>
                    <!-- <h4 v-show="DCardShow">調整口味</h4> -->
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
import CardMeal from '../utils/cardMeal.vue';
import AddNewCard from '../utils/addcard.vue';
import AddNewRecipes from '../utils/addrecipes.vue';


  export default {
    components: {
        CardA, 
        CardB,
        CardC,
        CardMeal,
        AddNewCard,
        AddNewRecipes
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

            const recipesID = BItem[7];
            console.log('BItem被點的時候給出的recipesID', recipesID);
            if (recipesID > 0) {
                this.getDeteailMeals(recipesID);
            }
        },
        CItemOnClick: function(CITemName, CItem) {
            console.log('C Item OnClick', CITemName);
            this.DCardShow = true;            
            this.currentDItemName = CITemName;
            this.currentDItem = CItem;
            console.log('當CITEM被點了',this.currentDItem);

            const recipesID = CItem[7];
            console.log('CITEM被點的時候給出的recipesID', recipesID);
            if (recipesID > 0) {
                this.getDeteailMeals(recipesID);
            }
         },
        async getAClass() {
            this.currentAClass = await axios.get(process.env.API_HOST + `/MealsCategory/Get`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBClass(ACategoryID) {
            this.currentBClass = await axios.get(process.env.API_HOST + `/MealsCategory/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBItem(ACategoryID) {
            this.currentBItem = await axios.get(process.env.API_HOST + `/Meals/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {                
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getCItem(BCategoryID) {
            this.currentCItem = await axios.get(process.env.API_HOST + `/Meals/GetByCategoryID/${BCategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        addNewAClass ($event) {
            const ClassFile = {
                                "Name": $event,
                                "MealsCategoryID": null,
                                "AccountID": 0,
                                "IsFirst": true
                               };
            this.addNewAClassCard(ClassFile); 
        },
        async addNewAClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/MealsCategory/Create`, ClassFile)
            .then(function (response) {
                vm.getAClass();
                return true;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        addNewBClass($event, ACategoryID) {
            const ClassFile = {
                                "Name": $event,
                                "MealsCategoryID": ACategoryID,
                                "AccountID": 0,
                                "IsFirst": false
                              };
            this.addNewBClassCard(ClassFile);
        }, 
        async addNewBClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/MealsCategory/Create`, ClassFile)
            .then(function (response) {
                vm.getBClass(vm.currentACardID);
                return true;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        addNewBItem($event, ACategoryID) {
            const ClassFile = {
                                "Name": $event,
                                "MealsCategoryID": ACategoryID,
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
            await axios.post(process.env.API_HOST + `/Meals/Create`, ClassFile)
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                return true;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        addNewCItem($event, BCategoryID) {
            const ClassFile = {
                                "Name": $event,
                                "MealsCategoryID": BCategoryID,
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
            await axios.post(process.env.API_HOST + `/Meals/Create`, ClassFile)
            .then(function (response) {
                vm.getCItem(vm.currentBCardID);
                return true;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        changeAName(newName, ACategoryID) {
            const ClassFile = {
                                "MealsCategoryID": ACategoryID,
                                "Name": newName,
                                "AccountID": 0
                              };
            this.changeACardName(ClassFile);
        },
        async changeACardName(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/MealsCategory/Update`, ClassFile)
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
                                "MealsCategoryID": BCategoryID,
                                "Name": newName,
                                "AccountID": 0
                              };
            this.changeBCardName(ClassFile);
        },
        async changeBCardName(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/MealsCategory/Update`, ClassFile)
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
                                "MealsID": BITem[0],
                                "Name": newName,
                                "Price": BITem[2],
                                "Visile": BITem[4],
                                "Image": "string",
                                "Video": "string",
                                "PointEnable": BITem[5],
                                "RecipesID": 0,
                                "AccountID": 0,
                                "MealsCategoryID": BITem[6]
                               };
            this.changeBItemCardName(ClassFile, newName);
        },
        async changeBItemCardName(ClassFile, newName) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Meals/Update`, ClassFile)
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
                                "MealsID": CITem[0],
                                "Name": newName,
                                "Price": CITem[2],
                                "Visile": CITem[4],
                                "Image": "string",
                                "Video": "string",
                                "PointEnable": CITem[5],
                                "AccountID": 0,
                                "MealsCategoryID": CITem[6]
                               };
            this.changeCItemCardName(ClassFile, newName);
        },
        async changeCItemCardName(ClassFile, newName) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Meals/Update`, ClassFile)
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
        },
        async changeDItemInfo(obj) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Meals/Update`, obj)
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                vm.getCItem(vm.currentBCardID);
                return;
            })
            .catch(function (error) {
                console.log(error)
            });
        }, 
        deleteAClass: function($event, ACategoryID) {
            const ClassFile = {
                "MealsCategoryID": ACategoryID,
                "AccountID": 0
            };
            this.deleteACard(ClassFile);
        },
        async deleteACard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/MealsCategory/Delete`, ClassFile)
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
                "MealsCategoryID": BCategoryID,
                "AccountID": 0
            };
            this.deleteBCard(ClassFile);
        },
        async deleteBCard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/MealsCategory/Delete`, ClassFile)
            .then(function (response) {
                vm.getBClass(vm.currentACardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        deleteBItem: function($event, BItem) {
            // BITem-----
            // "MealsID": 18,
            // "Name": "主廚一號裡面的餐點A",
            // "Price": 0,
            // "Image": "string",
            // "Visible": false,
            // "PointEnable": false,
            // "MealsCategoryID": 17,
            // "MealsCategoryName": "主廚套餐一號"
            // want-----
            // "MealsID": 0,
            // "Name": "string",
            // "Price": 0,
            // "Image": "string",
            // "Video": "string",
            // "AccountID": 0,
            // "MealsCategoryID": 0
            const ClassFile = {
                "MealsID": BItem[0],
                "AccountID": 0,
                "MealsCategoryID": BItem[6]
            };
            this.deleteBItemCard(ClassFile);
        },
        async deleteBItemCard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Meals/Delete`, ClassFile)
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        deleteCItem: function($event, CItem) {
            const ClassFile = {
                "MealsID": CItem[0],
                "AccountID": 0,
                "MealsCategoryID": CItem[6]
            };
            this.deleteCItemCard(ClassFile);
        },
        async deleteCItemCard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Meals/Delete`, ClassFile)
            .then(function (response) {
                vm.getCItem(vm.currentBCardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getDeteailMeals(recipesID, recipesName, recipesCategoryID) {            
            this.deteailMeals = recipesName;
        },
        AddNewRecipes($event, currentDItem) {
            const ClassFile = {
                                "MealsID": currentDItem[0],
                                "Name": currentDItem[1],
                                "RecipesID": $event[0],
                                "AccountID": 0,
                                "MealsCategoryID": currentDItem[6]
                               };

            const vm = this;
            axios.post(process.env.API_HOST + `/Meals/Update`, ClassFile)
            .then(function (response) {
                vm.getDeteailMeals($event[0], $event[1], $event[2]);
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        DeleteRecipes($event, item) {
            const ClassFile = [
                {
                    "MealsComboMealsMapID": item[0],
                    "MealsID": item[1],
                    "MealsID": item[3],
                    "AccountID": 0
                }
            ];
            const vm = this;
            axios.post(process.env.API_HOST + `/MealsComboMealsMap/Delete`, ClassFile)
            .then(function (response) {
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
