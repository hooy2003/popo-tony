<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">套餐</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardA v-for="(item, index) in currentAClass"
                           :key='item.index'
                           :card-name="item['name']"
                           :class="{ active: index === 0 }"
                           @card-change-name="changeAName($event, item['comboMealsCategoryID'])"
                           @card-on-click="AClassOnClick($event, item['comboMealsCategoryID'])"
                           @card-delete="deleteAClass($event, item['comboMealsCategoryID'])"
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
                           :card-name="item['name']"
                           :is-class="true"
                           :class="{ lastcard: index === (currentBClass.length-1) && index > 1 }"
                           @card-change-name="changeBName($event, item['comboMealsCategoryID'])"
                           @card-on-click="BClassOnClick($event, item['comboMealsCategoryID'])"
                           @card-delete="deleteBClass($event, item['comboMealsCategoryID'])"
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
                    <CardSet
                        v-show="DCardShow"
                        :card-combomealid="currentDItem['comboMealsID']"
                        :card-name="currentDItem['name']"
                        :card-price="currentDItem['price']"
                        :card-image="currentDItem['image']"
                        :card-visible="currentDItem['visible']"
                        :card-pointenable="currentDItem['pointEnable']"
                        :card-combomealcategoryid="currentDItem['comboMealsCategoryID']"
                        @item-change="changeDItem($event)"
                    ></CardSet>
                    <h4 v-show="DCardShow">餐點</h4>
                    <div class="meal-content" v-show="DCardShow">
                        <AddNewMeals
                            @new-recipes-item="AddNewRecipes($event, currentDItem['comboMealsID'])"
                        ></AddNewMeals>
                        <div class="detail-meals">
                            <div v-for="(item, index) in deteailMeals"
                                 class="item-meals">
                                <div @click="DeleteRecipes($event, item)">
                                    <Icon type="ios-remove-circle-outline" size="20"></Icon>
                                </div>
                                <div>{{item['name']}}</div>
                                <div>{{item['price']}}元</div>
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
import CardSet from '../utils/cardSet.vue';
import AddNewCard from '../utils/addcard.vue';
import AddNewMeals from '../utils/addmeals.vue';


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
        'isLoading',
      ]),
    },
    watch: {
        // Handle Async
        currentAClass: function(value) {
            const BdefaultID = this.currentAClass[0]['comboMealsCategoryID'];
            const BdefaultName = this.currentAClass[0]['price'];

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
            // Give B blokc title a name
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

            const comboMealID = BItem[0];
            this.getDeteailMeals(comboMealID);
        },
        CItemOnClick: function(CITemName, CItem) {
            console.log('C Item OnClick', CITemName);
            this.DCardShow = true;            
            this.currentDItemName = CITemName;
            this.currentDItem = CItem;

            const comboMealID = CItem[0];
            this.getDeteailMeals(comboMealID);
         },
        async getAClass() {
            this.currentAClass = await axios.get(process.env.API_HOST + `/ComboMealsCategory/Get`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBClass(ACategoryID) {
            this.currentBClass = await axios.get(process.env.API_HOST + `/ComboMealsCategory/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBItem(ACategoryID) {
            this.currentBItem = await axios.get(process.env.API_HOST + `/ComboMeals/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {                
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getCItem(BCategoryID) {
            console.log('currentCItem CategoryID', BCategoryID);
            this.currentCItem = await axios.get(process.env.API_HOST + `/ComboMeals/GetByCategoryID/${BCategoryID}`)
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
                                "ComboMealsCategoryID": null,
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
                                "ComboMealsCategoryID": ACategoryID,
                                "AccountID": 0,
                                "IsFirst": false
                              };
            this.addNewBClassCard(ClassFile);
        }, 
        async addNewBClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMealsCategory/Create`, ClassFile)
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
                                "ComboMealsCategoryID": ACategoryID,
                                "Name": newName,
                                "AccountID": 0
                              };
            this.changeACardName(ClassFile);
        },
        async changeACardName(ClassFile) {
            const vm = this;
            await axios.put(process.env.API_HOST + `/ComboMealsCategory/Update`, ClassFile)
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
                                "ComboMealsCategoryID": BCategoryID,
                                "Name": newName,
                                "AccountID": 0
                              };
            this.changeBCardName(ClassFile);
        },
        async changeBCardName(ClassFile) {
            const vm = this;
            await axios.put(process.env.API_HOST + `/ComboMealsCategory/Update`, ClassFile)
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
                                "ComboMealsID": BITem['comboMealsID'],
                                "Name": newName,
                                "Price": BITem['price'],
                                "Visile": BITem['visible'],
                                "Image": "string",
                                "Video": "string",
                                "PointEnable": BITem['pointEnable'],
                                "AccountID": 0,
                                "ComboMealsCategoryID": BITem['comboMealsCategoryID']
                               };
            this.changeBItemCardName(ClassFile, newName);
        },
        async changeBItemCardName(ClassFile, newName) {
            const vm = this;
            await axios.put(process.env.API_HOST + `/ComboMeals/Update`, ClassFile)
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
                vm.currentDItem['name'] = newName;
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        changeCItemName(newName, CITem) {
            const ClassFile = {
                                "ComboMealsID": CITem['comboMealsID'],
                                "Name": newName,
                                "Price": CITem['price'],
                                "Visile": CITem['visible'],
                                "Image": "string",
                                "Video": "string",
                                "PointEnable": CITem['pointEnable'],
                                "AccountID": 0,
                                "ComboMealsCategoryID": CITem['comboMealsCategoryID']
                               };
            this.changeCItemCardName(ClassFile, newName);
        },
        async changeCItemCardName(ClassFile, newName) {
            const vm = this;
            await axios.put(process.env.API_HOST + `/ComboMeals/Update`, ClassFile)
            .then(function (response) {
                vm.getCItem(vm.currentBCardID);
                vm.currentDItem['name'] = newName;
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
            await axios.put(process.env.API_HOST + `/ComboMeals/Update`, obj)
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
                "ComboMealsCategoryID": ACategoryID,
                "AccountID": 0
            };
            this.deleteACard(ClassFile);
        },
        async deleteACard(ClassFile) {
            const vm = this;
            await axios.delete(process.env.API_HOST + `/ComboMealsCategory/Delete`, { data: ClassFile})
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
                "ComboMealsCategoryID": BCategoryID,
                "AccountID": 0
            };
            this.deleteBCard(ClassFile);
        },
        async deleteBCard(ClassFile) {
            const vm = this;
            await axios.delete(process.env.API_HOST + `/ComboMealsCategory/Delete`, { data: ClassFile})
            .then(function (response) {
                vm.getBClass(vm.currentACardID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        deleteBItem: function($event, BItem) {
            const ClassFile = {
                "ComboMealsID": BItem['comboMealsID'],
                "AccountID": 0,
                "ComboMealsCategoryID": BItem['comboMealsCategoryID']
            };
            this.deleteBItemCard(ClassFile);
        },
        async deleteBItemCard(ClassFile) {
            const vm = this;
            await axios.delete(process.env.API_HOST + `/ComboMeals/Delete`, { data: ClassFile})
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
                "ComboMealsID": CItem['comboMealsID'],
                "AccountID": 0,
                "ComboMealsCategoryID": CItem['comboMealsCategoryID']
            };
            this.deleteCItemCard(ClassFile);
        },
        async deleteCItemCard(ClassFile) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/ComboMeals/Delete`, { data: ClassFile})
            .then(function (response) {
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

                console.log('MealsComboMealsMap/GetByComboMealsID/', arrayList);
                return arrayList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        AddNewRecipes($event, ComboMealsID) {
            const ClassFile = [{
                "MealsID": $event[0],
                "ComboMealsID": ComboMealsID,
                "AccountID": 0
            },];
            console.log('ClassFile', ClassFile);

            const vm = this;
            axios.post(process.env.API_HOST + `/MealsComboMealsMap/Create`, ClassFile)
            .then(function (response) {
                console.log('AddNewRecipes', response)
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
