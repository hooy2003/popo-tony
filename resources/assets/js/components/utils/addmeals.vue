<template>
    <div>
        <div class="addclass" @click="modal = true">
            <Icon type="ios-add-circle-outline" size="20" /></Icon>新增餐點
        </div>
        <Modal
            v-model="modal"
            @on-ok="sendItem"
            class="popmap"
            width="720">
            <Row>
            <Col span="8">
                <div class="title">餐點</div>
                <ul class="mapclass">
                    <li v-for="(item, index) in AClass"
                        :key='item.index'
                        class="li-class-a"
                        :class="{ active: index === 0 }"
                        @click="AClassOnClick(item[1], item[0])"
                    >
                    <Icon type="ios-folder-open-outline" size="20"></Icon>
                    {{item[1]}}
                    </li>
                </ul>
            </Col>
            <Col span="8">
                <div class="title">{{currentAClassName}}</div>
                <ul class="mapclass">
                    <li v-for="(item, index) in BClass"
                        :key='item.index'
                        class="li-class-b"
                        @click="BClassOnClick($event, item[1], item[0])"
                    >
                    <Icon type="ios-folder-open-outline" size="20"></Icon>
                    {{item[1]}}
                    </li>
                </ul>
                <ul class="mapclass">
                    <li v-for="(item, index) in BItem"
                        :key='item.index'
                        class="li-item-b"
                        @click="BItemOnClick($event, item)"
                    >
                    <Icon type="ios-document" size="20"></Icon>
                    {{item[1]}}
                    <Icon type="ios-checkmark" size="20" class="active-icon"></Icon>
                    </li>
                </ul>
            </Col>
            <Col span="8">
                <div class="title">{{currentBClassName}}</div>
                <ul class="mapclass">
                    <li v-for="(item, index) in CItem"
                        :key='item.index'
                        class="li-item-c"
                        @click="CItemOnClick($event, item)"
                    >
                    <Icon type="ios-document" size="20"></Icon>
                    {{item[1]}}
                    <Icon type="ios-checkmark" size="20" class="active-icon"></Icon>
                    </li>
                </ul>
            </Col>
            </Row>
        </Modal>
    </div>
</template>
<script>
    export default {
        name: 'addCard',
        props: [
            '',
        ],
        data() {
            return {
                modal: false,
                AClass: [],
                currentAClassName: '無',
                BClass: [],
                currentBClassName: '尚無類別',
                BItem: [],
                currentBItemName: '尚無項目',
                CItem: [],
                CItemName: '尚無項目',
                sureItem: []
            }
        },        
        created () {
            this.getAClass();
        },        
        computed: {
        },
        watch: {
            AClass: function(value) {
                const BdefaultID = this.AClass[0][0];
                const BdefaultName = this.AClass[0][1];
                this.currentAClassName = BdefaultName;
                this.getBClass(BdefaultID);
                this.getBItem(BdefaultID);
            },
        },
        methods: {
            AClassOnClick: function(AClassName, ACategoryID) {
                // 給B區塊標題名字
                this.currentAClassName = AClassName;
                // 清空C區塊
                this.CItem = '';
                this.getBClass(ACategoryID);
                this.getBItem(ACategoryID);
            },
            BClassOnClick: function($event, BClassName, BCategoryID) {
                this.toggleActive($event, false);
                this.currentBClassName = BClassName;
                this.getCItem(BCategoryID);
            },
            BItemOnClick: function($event, item) {
                this.toggleActive($event, false);
                this.sureItem = item;
            },
            CItemOnClick: function($event, item) {
                this.toggleActive($event, true);
                this.sureItem = item;
            },
            toggleActive($event, isCItem) {

                const eT = $($event.currentTarget);
                if (eT.hasClass('active')) {
                    eT.removeClass('active');
                } else {
                    if (!isCItem) {
                        $('.li-class-b').removeClass('active');
                    }
                    $('.li-item-b').removeClass('active');
                    $('.li-item-c').removeClass('active');
                    eT.addClass('active');
                }
            },
            async getAClass() {
                this.AClass = await axios.get(process.env.API_HOST + `/MealsCategory/Get`)
                .then(function (response) {
                    const nameList = response.data.map(item => Object.values(item));
                    return nameList;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            async getBClass(ACategoryID) {
                this.BClass = await axios.get(process.env.API_HOST + `/MealsCategory/GetByCategoryID/${ACategoryID}`)
                .then(function (response) {
                    const nameList = response.data.map(item => Object.values(item));
                    return nameList;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            async getBItem(ACategoryID) {
                this.BItem = await axios.get(process.env.API_HOST + `/Meals/GetByCategoryID/${ACategoryID}`)
                .then(function (response) {
                    const nameList = response.data.map(item => Object.values(item));
                    return nameList;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            async getCItem(BCategoryID) {
                console.log('CItem CategoryID', BCategoryID);
                this.CItem = await axios.get(process.env.API_HOST + `/Meals/GetByCategoryID/${BCategoryID}`)
                .then(function (response) {
                    const nameList = response.data.map(item => Object.values(item));
                    return nameList;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            sendItem() {
                this.$emit('new-recipes-item', this.sureItem);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .addclass {
        padding: 10px;
        color: #007aff;
    }    
</style>
