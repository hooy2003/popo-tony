<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">食材</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardA v-for="(item, index) in currentAClass"
                           :key='item.index'
                           :card-name="item[1]"
                           :class="{ active: index === 0 }"
                           @card-change-name="onCardChangeName0($event, index)"
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
                <div class="union">
                    <h4>類別</h4>
                    <CardB v-for="(item, index) in currentBClass"
                           :key='item.index'
                           :card-name="item[1]"
                           :is-class="true"
                           :class="{ lastcard: index === (currentBClass.length-1) && index > 1 }"
                           @card-change-name="onCardChangeName($event, index)"
                           @card-on-click="BClassOnClick($event, item[0])"
                           @card-delete="deleteBClass($event, item[0])"
                           class="B-class"
                    >
                    </CardB>
                    <AddNewCard  @add-card-name="addNewBClass($event, currentACardID)"
                                 class="add-new-card"
                                 v-show="currentBItem.length >= 0"
                    >
                    </AddNewCard>
                    </CardA>
                    <h4>項目</h4>
                    <CardB v-for="(item, index) in currentBItem"
                           :key='item.index'
                           :card-name="item[1]" 
                           :class="{ lastcard: index === (currentBItem.length-1) && index > 1 }"
                           @card-change-name="onCardChangeName2($event, index)"
                           @card-on-click="BItemOnClick($event, item)"
                           @card-delete="deleteBItem($event, item[0])"
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
                           @card-on-click="CItemOnClick($event, item[4])"
                           @card-delete="deleteItemC($event, currentBClassName)"
                    >
                    </CardC>
                    <div @click="addNewItemC($event, currentBCardName, currentACardName)"                         
                         class="add-new-card"
                         v-show="currentCItem.length > 0"
                         >
                         <Icon type="ios-add-circle-outline" size="20" /></Icon>新增項目
                    </div>
                </div>
            </Col>
            <Col span="9">
                <div class="title">{{currentDItemName}}</div>
                <div class="union">
                    <CardFood
                        v-show="DCardShow"
                        :card-name="currentDItem[1]"
                        :card-unit="currentDItem[2]"
                        :card-price="currentDItem[3]"
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
// let WebHelper = require('../../utils/wehelper');


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
            this.DCardShow = false;
            // 給C區塊名字
            this.currentBCardName = BCardName;            
            this.getCItem(BCategoryID);
        },

        BItemOnClick: function(BItemName, BItem) {
            // 這個直接寫在抓來的ITEM裡面了
            console.log(BItem);
            this.DCardShow = true;
            this.currentDItemName =  BItemName;
            this.currentDItem = BItem;
        },
        CItemOnClick: function(CITemName, CItemID) {
            console.log('C Item OnClick', CITemName);
            this.DCardShow = true;
            this.currentDItemName =  CITemName;
            this.getDItem(CItemID);
        },
        async getAClass() {
            this.currentAClass = await axios.get(`api/IngredientsCategory/Get`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBClass(ACategoryID) {
            this.currentBClass = await axios.get(`api/IngredientsCategory/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getBItem(ACategoryID) {
            this.currentBItem = await axios.get(`api/Ingredients/GetByCategoryID/${ACategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                console.log('我要知道的BITEM', nameList);
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
            // "IngredientsCategoryID": 10,
            // "IngredientsCategoryName": "五穀根莖類"
            this.currentCItem = await axios.get(`api/Ingredients/GetByCategoryID/${BCategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                console.log('我要知道的CCCCCC', nameList);
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getDItem(ItemID) {
            this.currentDItem = await axios.get(`api/Ingredients/GetByCategoryID/${ItemID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                console.log('currentDItem', nameList);
                return nameList[0];
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
            await axios.post(`api/IngredientsCategory/Create`, ClassFile)
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
                                "IngredientsCategoryID": ACategoryID,
                                "AccountID": 0,
                                "IsFirst": false
                              };
            console.log('ClassFile', ClassFile);
            this.addNewBClassCard(ClassFile);
        }, 
        async addNewBClassCard (ClassFile) {
            // Update Vue object with Axios response data
            const vm = this;
            await axios.post(`api/IngredientsCategory/Create`, ClassFile)
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
                                "IngredientsCategoryID": ACategoryID,
                                "Unit": "公斤",
                                "Price": 0,
                                "AccountID": 0
                              };
            console.log('1白雲', ClassFile);
            this.addNewBItemCard(ClassFile);
        },
        async addNewBItemCard (ClassFile) {
            const vm = this;
            await axios.post(`api/Ingredients/Create`, ClassFile)
            .then(function (response) {                
                vm.getBItem(vm.currentACardID);
                return true;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        deleteAClass: function($event, ACategoryID) {
            this.deleteACard(ACategoryID);
        },
        async deleteACard(ACategoryID) {
            const vm = this;
            await axios.post(`api/IngredientsCategory/Delete`, { "ID":ACategoryID })
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
            await axios.post(`api/IngredientsCategory/Delete`, { "ID":BCategoryID })
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
        deleteBItem: function($event, BItemID) {
            // Item[0] 是項目的ID
            this.deleteBItemCard(BItemID);
        },
        async deleteBItemCard(BItemID) {
            const vm = this;
            await axios.post(`api/Ingredients/Delete`, { "ID":BItemID })
            .then(function (response) {
                vm.getBItem(vm.currentACardID);
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
