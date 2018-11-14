<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">套餐</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardA v-for="(item, index) in currentAClass"
                           :key='item.index'
                           :card-name="item"
                           :class="{ active: index === 0 }"
                           @card-on-click="AClassOnClick"
                    >
                    </CardA>
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
            </Col>
        </Row>        
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import CardA from '../utils/card.vue';
import CardB from '../utils/cardB.vue';
import CardC from '../utils/cardC.vue';

// let WebHelper = require('../../utils/wehelper');


  export default {
    components: {
        CardA, 
        CardB,
        CardC,
    },
    data() {
        return {
            currentACardName: '無',
            currentBClass: [],
            currentBCardName: '尚無類別',
            currentBItem: [],
            currentBItemName: '尚無項目',
            currentCItem: [],
            currentCItemName: '餐點名',
        }
    },
    mounted: function() {
        // 設定B塊的預設值`，先找出setAClass第一個class的第一個名字
        let Bdefault = this.setAClass[0].name[0];

        // 給B區塊標題名字
        this.currentACardName = Bdefault;
        this.changeBClass(Bdefault);
        this.changeBItem(Bdefault);
    },
    computed: {
      ...mapGetters([
        'User',
        'setAClass',
        'setBClass',
        'setBItem',
        'setCItem',
        'rules'
      ]),
      currentAClass: function() {
        // A區塊的預設值
        return this.setAClass[0].name;
      }
    },
    watch: {
    },
    // 改进vue的初始化数据调用时机 --
    // https://www.jianshu.com/p/2048f1a66c33
    methods: {
        AClassOnClick: function(ACardName) {
            console.log('點了A區哪張卡', ACardName);

            // 給B區塊標題名字
            this.currentACardName = ACardName;
            // 清空C區塊
            this.currentCItem = '';
            this.changeBClass(ACardName);
            this.changeBItem(ACardName);
        },
        BClassOnClick: function(BCardName) {
            console.log('點了B區哪張卡', BCardName);
            // 給C區塊名字
            this.currentBCardName = BCardName;
            this.changeCItem(BCardName);
        },
        BItemOnClick: function(BItem) {
            console.log('B Item OnClick', BItem);
        },
        CItemOnClick: function(CITem) {
            console.log('C Item OnClick', CITem);
            this.currentCItemName =  CITem;
        },
        changeBClass: function(ACardName) {

            // 先篩上層是setClass的陣列
            let filterArray =  _.filter(this.setBClass, {parent: ACardName} );
            //只要 name 的陣列
            this.currentBClass = filterArray[0].name;

            // 這個this.currentBClass完全沒有更新到 可能是findTypesValue的問題
            console.log('this currentB Class ======', this.currentBClass);

        },
        changeBItem: function(ACardName) {

            let filterArray =  _.filter(this.setBItem, {parent: ACardName} );
            this.currentBItem = filterArray[0].name;

            console.log('this currentB Item =======',  this.currentBItem);
        },
        changeCItem: function(BCardName) {
            // 用ACardName 跟 BCardName 找出Ctiem
            let pfilterArray = _.filter(this.setCItem, {parent: this.currentACardName} );
            let filterArray =  _.filter(pfilterArray[0].class, {parent: BCardName} );

            this.currentCItem = filterArray[0].name;

            console.log('this currentC Item =======',  this.currentBItem);
        },        
        onCardChangeName: function(newName, index) {
            this.currentBClass.splice(index, 1, newName);
        },
        onCardChangeName2: function(newName, index) {
            console.log('this.currentBItem');
            this.currentBItem.splice(index, 1, newName);
        },
        addNewClass: function($event, parentName) {

            // 找出當前父級的在AClass的index直接套近來
            let parentArrayIndex = $.map(this.setAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 去改變 BClass
            let cloneItem = this.setBClass;            
            cloneItem[parentArrayIndex].name.push('新項目');

            // 幫CItem加上新的空陣列

            let cloneItemClass = this.setCItem;
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
            let parentArrayIndex = $.map(this.setAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 去改變 BItem
            let cloneItem = this.setBItem;
            cloneItem[parentArrayIndex].name.push('新項目');

            console.log('addNewItem cloneItem  =======',  cloneItem);
            this.$store.commit({
                type: 'BItemAddNewItem',
                newArray: cloneItem,
            });
        },
        addNewItemC: function($event, parentName, parentparentName) {

            // 找出BClass的在AClass的 parentparentArrayIndex
            let ppArrayIndex = $.map(this.setAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentparentName);

            // 找出CItem在BClass的在index直接套近來
            let parentArrayIndex = $.map(this.setBClass[ppArrayIndex].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 去改變 CItem
            let cloneItem = this.setCItem;
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
            let parentArrayIndex = $.map(this.setAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 找到 這個在setBClass 的哪裡
            let cArrayIndex = $.map(this.setBClass[parentArrayIndex].name, function(item, index) {
                return item
            }).indexOf(currentCardName);

             // 對複製的陣列刪去項目
            let cloneItem = this.setBClass;
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
            let parentArrayIndex = $.map(this.setAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 找到 這個在setBItem 的哪裡
            let cArrayIndex = $.map(this.setBItem[parentArrayIndex].name, function(item, index) {
                return item
            }).indexOf(currentCardName);

             // 對複製的陣列刪去項目
            let cloneItem = this.setBItem;
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
            let parentArrayIndex = $.map(this.setAClass[0].name, function(item, index) {
                return item
            }).indexOf(parentName);

            // 找到 這個在setBItem 的哪裡
            let cArrayIndex = $.map(this.setBItem[parentArrayIndex].name, function(item, index) {
                return item
            }).indexOf(currentCardName);

             // 對複製的陣列刪去項目
            let cloneItem = this.setBItem;
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
