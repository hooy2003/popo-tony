<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">食材</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardA v-for="(item, index) in currentAClass"
                           :key='item.index'
                           :card-name="item"
                           :class="{ active: index === 0 }"
                           @card-change-name="onCardChangeName0($event, index)"
                           @card-on-click="AClassOnClick($event, index)"
                    >
                    </CardA>
                    <div @click="addNewClassA($event)"
                         class="add-new-card"
                         >
                         <Icon type="ios-add-circle-outline" size="20" /></Icon>新增類別
                    </div>
                </div>
            </Col>
            <Col span="5">
                <div class="title">{{currentACardName}}</div>
                <div class="union">
                    <h4>類別</h4>
                    <CardB v-for="(item, index) in currentBClass"
                           :key='item.index'
                           :card-name="item"
                           :is-class="true"
                           :class="{ lastcard: index === (currentBClass.length-1) }"
                           @card-change-name="onCardChangeName($event, index)"
                           @card-on-click="BClassOnClick"
                           @card-delete="deleteClass($event, currentACardName)"
                           class="B-class"
                    >
                    </CardB>
                    <div @click="addNewClass($event, currentACardName)"
                         class="add-new-card"
                         v-show="currentBClass.length >= 0"
                         >
                         <Icon type="ios-add-circle-outline" size="20" /></Icon>新增類別
                    </div>
                    </CardA>
                    <h4>項目</h4>
                    <CardB v-for="(item, index) in currentBItem"
                           :key='item.index'
                           :card-name="item" 
                           :class="{ lastcard: index === (currentBItem.length-1) }"
                           @card-change-name="onCardChangeName2($event, index)"
                           @card-on-click="BItemOnClick"
                           @card-delete="deleteItem($event, currentACardName)"
                    >
                    </CardB>
                    <div @click="addNewItem($event, currentACardName)"
                         class="add-new-card"
                         v-show="currentBItem.length >= 0"
                         >
                         <Icon type="ios-add-circle-outline" size="20" /></Icon>新增項目
                    </div>
                </div>
            </Col>
            <Col span="5">
                <div class="title">{{currentBCardName}}</div>
                <div class="union">
                    <h4>項目</h4>                    
                    <CardC v-for="(item, index) in currentCItem"
                           :key='item.index'
                           :card-name="item" 
                           :class="{ lastcard: index === (currentCItem.length-1) }"
                           @card-on-click="CItemOnClick"
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
                <div class="title">{{currentCItemName}}</div>
                <div class="union">
                    <CardFood
                        v-show="DCardShow"
                        :card-name="currentCItemName"
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

// let WebHelper = require('../../utils/wehelper');


  export default {
    components: {
        CardA, 
        CardB,
        CardC,
        CardFood
    },
    data() {
        return {
            currentAClass: [],
            currentAClassID: [],
            currentACardName: '無',
            currentBClass: [],
            currentBCardName: '尚無類別',
            currentBItem: [],
            currentBItemName: '尚無項目',
            currentCItem: [],
            currentCItemName: '餐點名',
            DCardShow: false,
        }
    },
    mounted: function() {
        // 設定B塊的預設值`，先找出foodAClass第一個class的第一個名字
        let Bdefault = this.foodAClass[0].name[0];

        // 給B區塊標題名字
        this.currentACardName = Bdefault;
        this.changeBClass(Bdefault);
        this.changeBItem(Bdefault);
    },
    created () {
        this.getCurrentAClass();
        this.getCurrentAClassID();
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
    },
    // 改进vue的初始化数据调用时机 --
    // https://www.jianshu.com/p/2048f1a66c33
    methods: {
        async getCurrentAClass() {
            console.log('getCurrentAClass');
            this.currentAClass = await axios.get(`api/IngredientsCategory/Get`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item)[1]);
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getCurrentAClassID() {
            this.currentAClassID = await axios.get(`api/IngredientsCategory/Get`)
            .then(function (response) {
                const idList = response.data.map(item => Object.values(item)[0]);
                return idList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        AClassOnClick: function(ACardName, index) {
            console.log('點了A區哪張卡', ACardName);
            console.log('點了A區哪張卡', index);

            //找出ID
            let CategoryID = this.currentAClassID[index];            
            this.DCardShow = false;
            // 給B區塊標題名字
            this.currentACardName = ACardName;
            // 清空C區塊
            this.currentCItem = '';            

            this.changeBClass(CategoryID);
            // this.changeBItem(ACardName);
        },
        BClassOnClick: function(BCardName) {
            console.log('點了B區哪張卡', BCardName);
            this.DCardShow = false;
            // 給C區塊名字
            this.currentBCardName = BCardName;
            this.changeCItem(BCardName);
        },
        BItemOnClick: function(BItem) {
            console.log('B Item OnClick', BItem);
            this.DCardShow = true;
            this.currentCItemName =  BItem;
        },
        CItemOnClick: function(CITem) {
            console.log('C Item OnClick', CITem);
            this.DCardShow = true;
            this.currentCItemName =  CITem;
        },
        async changeBClass(CategoryID) {

            this.currentBClass = await axios.get(`api/IngredientsCategory/GetByCategoryID/${CategoryID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item)[1]);
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });

        },
        changeBItem: function(ACardName) {

            let filterArray =  _.filter(this.foodBItem, {parent: ACardName} );
            this.currentBItem = filterArray[0].name;

            console.log('this currentB Item =======',  this.currentBItem);
        },
        changeCItem: function(BCardName) {
            // 用ACardName 跟 BCardName 找出Ctiem
            let pfilterArray = _.filter(this.foodCItem, {parent: this.currentACardName} );
            let filterArray =  _.filter(pfilterArray[0].class, {parent: BCardName} );

            this.currentCItem = filterArray[0].name;

            console.log('this currentC Item =======',  this.currentBItem);
        },
        onCardChangeName0: function(newName, index) {
            this.currentAClass.splice(index, 1, newName);
        }, 
        onCardChangeName: function(newName, index) {
            this.currentBClass.splice(index, 1, newName);
        },
        onCardChangeName2: function(newName, index) {
            console.log('this.currentBItem');
            this.currentBItem.splice(index, 1, newName);
        },
        addNewClassA: function($event) {
            let cloneItem = this.foodAClass;            
            cloneItem[0].name.push('新項目');
            console.log('cloneItem');

            this.$store.commit({
                type: 'AClassAddNewClass',
                newArray: cloneItem,
            });
        },
        addNewClass: function($event, parentName) {

            // 找出當前父級的在AClass的index直接套近來
            let parentArrayIndex = $.map(this.foodAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 去改變 BClass
            let cloneItem = this.foodBClass;            
            cloneItem[parentArrayIndex].name.push('新項目');

            // 幫CItem加上新的空陣列

            let cloneItemClass = this.foodCItem;
            cloneItemClass[parentArrayIndex].class.push({
                parent:'新項目',
                name: ['新項目']
            },);
            
            console.log('addNewClass cloneItem  =======',  cloneItem);
            this.$store.commit({
                type: 'BClassAddNewClass',
                newArray: cloneItem,
            });

            this.$store.commit({
                type: 'CItemAddNewItem',
                newArray: cloneItemClass,
            });
        },        
        addNewItem: function($event, parentName) {

            // 找出當前父級的在AClass的index直接套近來
            let parentArrayIndex = $.map(this.foodAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 去改變 BItem
            let cloneItem = this.foodBItem;
            cloneItem[parentArrayIndex].name.push('新項目');

            console.log('addNewItem cloneItem  =======',  cloneItem);
            this.$store.commit({
                type: 'BItemAddNewItem',
                newArray: cloneItem,
            });
        },
        addNewItemC: function($event, parentName, parentparentName) {

            // 找出BClass的在AClass的 parentparentArrayIndex
            let ppArrayIndex = $.map(this.foodAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentparentName);

            // 找出CItem在BClass的在index直接套近來
            let parentArrayIndex = $.map(this.foodBClass[ppArrayIndex].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 去改變 CItem
            let cloneItem = this.foodCItem;
            cloneItem[ppArrayIndex].class[parentArrayIndex].name.push('新項目');

            console.log('addNewItem cloneItem  =======',  cloneItem);
            this.$store.commit({
                type: 'CItemAddNewItem',
                newArray: cloneItem,
            });
        },
        deleteClass: function($event, parentName) {

            let currentCardName = $event;

            // 找出當前父級的在AClass的index直接套近來
            let parentArrayIndex = $.map(this.foodAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 找到 這個在foodBClass 的哪裡
            let cArrayIndex = $.map(this.foodBClass[parentArrayIndex].name, function(item, index) {
                return item
            }).indexOf(currentCardName);

             // 對複製的陣列刪去項目
            let cloneItem = this.foodBClass;
            cloneItem[parentArrayIndex].name.splice(cArrayIndex, 1);

            console.log('deleteClass  =======', cloneItem);

            this.$store.commit({
                type: 'BClassDeleteItem',
                newArray: cloneItem,
            });
        },
        deleteItem: function($event, parentName) {
            
            let currentCardName = $event;

            // 找出當前父級的在AClass的index直接套近來
            let parentArrayIndex = $.map(this.foodAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 找到 這個在foodBItem 的哪裡
            let cArrayIndex = $.map(this.foodBItem[parentArrayIndex].name, function(item, index) {
                return item
            }).indexOf(currentCardName);

             // 對複製的陣列刪去項目
            let cloneItem = this.foodBItem;
            cloneItem[parentArrayIndex].name.splice(cArrayIndex, 1);

            console.log('deleteItem  =======', cloneItem);

            this.$store.commit({
                type: 'BItemDeleteItem',
                newArray: cloneItem,
            });

        },
        deleteItemC: function($event, parentName) {
            
            let currentCardName = $event;

            // 找出當前父級的在AClass的index直接套近來
            let parentArrayIndex = $.map(this.foodAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 找到 這個在foodBItem 的哪裡
            let cArrayIndex = $.map(this.foodBItem[parentArrayIndex].name, function(item, index) {
                return item
            }).indexOf(currentCardName);

             // 對複製的陣列刪去項目
            let cloneItem = this.foodBItem;
            cloneItem[parentArrayIndex].name.splice(cArrayIndex, 1);

            console.log('deleteItemC  =======', cloneItem);

            this.$store.commit({
                type: 'CItemDeleteItem',
                newArray: cloneItem,
            });

        }
    }
  }
</script>

<style lang="scss">    
</style>
