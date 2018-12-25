<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">樓層/區域</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <Floor v-for="(item, index) in currentFloor"
                           :key='item.index'
                           :floor-name="item[1]"
                           :class="{ active: index === 0 }"
                           @floor-on-click="FloorOnClick($event, item[0])"
                    >
                    </Floor>
                    <AddNewfloor  
                                  class="add-new-card"
                    >
                    </AddNewfloor>
                </div>
            </Col>
            <Col span="5">
                <div class="title">餐桌清單</div>
                <div class="union">
                    <h4>類別</h4>
                    <Table v-for="(item, index) in currentTable"
                           :key='item.index'
                           :table-name="item[1]"
                           :is-class="true"
                           :class="{ lastcard: index === (currentTable.length-1) && index > 1 }"
                           @table-on-click="TableOnClick($event, item)"
                    >
                    </Table>
                     <AddNewTable 
                            class="add-new-card"
                            @add-table-name="addNewTable($event, FloorID)"
                    >
                    </AddNewTable>
                </div>
            </Col>
            <Col span="9">
                <div class="title">桌面設定</div>
                <div class="union">
                    <h4>項目</h4>
                    <TableInfo
                        v-show="TableInfoShow"
                        :table-id="currentTableInfo[0]"
                        :table-name="currentTableInfo[1]"
                        :table-amount="currentTableInfo[12]"
                        @table-info-change="changeTableInfo($event)"
                    >
                    </TableInfo>
                </div>
            </Col>
            <Col span="5">
            </Col>
        </Row>        
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import Floor from './floor.vue';
import Table from './table.vue';
import TableInfo from './tableInfo.vue';
import AddNewfloor from './addNewfloor.vue';
import AddNewTable from './addNewTable.vue';

  export default {
    components: {
        Floor,
        Table,
        TableInfo,
        AddNewfloor,
        AddNewTable
    },
    data() {
        return {
            currentFloor: [],
            FloorID: '',
            currentTable: '',
            currentTableInfo: '',
            TableInfoShow: false,
        }
    },
    created () {
        this.getFloor();
        this.FloorID = 1;
    },
    computed: {
      ...mapGetters([
      ]),
    },
    watch: {
        currentFloor: function(value) {
            const BdefaultID = this.currentFloor[0][0];
            const BdefaultName = this.currentFloor[0][1];

            this.getTable(BdefaultID);  
        },
    },
    methods: {
        FloorOnClick: function(FloorName, FloorID) {
            this.FloorID = FloorID;
            this.getTable(FloorID);
        },
        TableOnClick: function(tableName, table) {
    // "TableCategoryID": 0,
    // "TableCategoryName": "string",
    // "Image": "string",
    // "TableAreaID": 0,
    // "TableAreaName": "string",
    // "Sort": 0,
    // "TableID": 0,
    // "TableName": "string",
    // "X": 0,
    // "Y": 0,
    // "Width": 0,
    // "Height": 0,
    // "Amount": 0 
            console.log('TableOnClick', table );
            this.currentTableInfo = table;
            this.TableInfoShow = true;
        },
        async getFloor() {
            this.currentFloor = await axios.get(process.env.API_HOST + `/TableArea/GetAreas`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getTable(FloorID) {
            this.currentTable = await axios.get(process.env.API_HOST + `/Table/GetTablesByTableAreaID?TableAreaID=${FloorID}`)
            .then(function (response) {
                const nameList = response.data.map(item => Object.values(item));
                return nameList;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async addNewTable ($event, FloorID) {
            const ClassFile = {
                                "Name": $event,
                                "TableCategoryID": 0,
                                "TableAreaID": FloorID,
                                "X": 0,
                                "Y": 0,
                                "Width": 0,
                                "Height": 0,
                                "Amount": 0,
                                "AccountID": 0
                              };
            console.log('addNewTable', ClassFile);
            const vm = this;
            await axios.post(process.env.API_HOST + `/Table/Create`, ClassFile)
            .then(function (response) {
                vm.getTable(vm.FloorID);
                return true;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        async changeTableInfo(obj) {
            const vm = this;
            await axios.post(process.env.API_HOST + `/Table/Update`, obj)
            .then(function (response) {
                vm.getTable(vm.FloorID);
                return;
            })
            .catch(function (error) {
                console.log(error)
            });
        }
    }
  }
</script>