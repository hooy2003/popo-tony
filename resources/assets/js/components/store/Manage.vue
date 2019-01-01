<template>
    <section class="content page">
        <Row>
            <Col span="5">
                <div class="title">樓層/區域</div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <Floor v-for="(item, index) in currentFloor"
                           :key='item.index'
                           :floor-name="item['tableAreaName']"
                           :class="{ active: index === 0 }"
                           @floor-on-click="FloorOnClick($event, item['tableAreaID'])"
                           @floor-change-name="FloorChangeName($event, item['tableAreaID'])"
                           @floor-delete="FloorDelete($event, item['tableAreaID'])"
                    >
                    </Floor>
                    <AddNewfloor  class="add-new-card"
                                  @add-floor-name="addNewFloor($event)"
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
                           :table-name="item['tableName']"
                           :is-class="true"
                           :class="{ lastcard: index === (currentTable.length-1) && index > 1 }"
                           @table-on-click="TableOnClick($event, item)"
                           @table-change-name="TableChangeName($event, item['tableID'])"
                           @table-delete="TableDelete($event, item['tableID'])"
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
                        :table-id="currentTableInfo['tableID']"
                        :table-name="currentTableInfo['tableName']"
                        :table-amount="currentTableInfo['amount']"
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
          'isLoading'
      ]),
      isLoadingIN: function() {
        return this.isLoading;
      }
    },
    watch: {
        currentFloor: function(value) {
            const defaultID = this.currentFloor[0]['tableAreaID'];
            this.getTable(defaultID);  
        },
        isLoadingIN (value) {
            if (value) {
                this.$Message.loading({
                    content: 'Loading...',
                    duration: 0.8
                });
            }
        }
    },
    methods: {
        FloorOnClick: function(FloorName, FloorID) {
            this.FloorID = FloorID;
            this.getTable(FloorID);
            this.TableInfoShow = false;
        },
        TableOnClick: function(tableName, table) {
            this.currentTableInfo = table;
            this.TableInfoShow = true;
        },        
        async getFloor() {
            this.currentFloor = await axios.get(process.env.API_HOST + `/TableArea/GetAreas`)
            .then(function (response) {                
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async addNewFloor ($event) {
            const ClassFile = {
                                "tableAreaName": $event,
                                "sort": 0,
                                "accountID": 0
                              };
            const vm = this;
            await axios.post(process.env.API_HOST + `/TableArea/Create`, ClassFile)
            .then(function (response) {
                vm.getFloor();
                return;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        async FloorChangeName ($event, ID) {
            const ClassFile = {
                                "tableAreaID": ID,
                                "tableAreaName": $event,
                                "sort": 0,
                                "accountID": 0
                              };
            const vm = this;
            await axios.put(process.env.API_HOST + `/TableArea/Update`, ClassFile)
            .then(function (response) {
                vm.getFloor();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async FloorDelete ($event, ID) {
            const ClassFile = {
                                "tableAreaID": ID,
                                "accountID": 0
                              };
            const vm = this;
            // axios's config 寫法
            await axios.delete(process.env.API_HOST + `/TableArea/Delete`, { data: ClassFile})
            .then(function (response) {
                vm.getFloor();
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async getTable(FloorID) {
            this.currentTable = await axios.get(process.env.API_HOST + `/Table/GetTablesByTableAreaID/${FloorID}`)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async addNewTable ($event, FloorID) {
            const ClassFile = {
                                "tableName": $event,
                                "tableCategoryID": 1,
                                "tableAreaID": FloorID,
                                "x": 0,
                                "y": 0,
                                "width": 0,
                                "height": 0,
                                "amount": 0,
                                "accountID": 0
                              };
            const vm = this;
            await axios.post(process.env.API_HOST + `/Table/Create`, ClassFile)
            .then(function (response) {
                vm.getTable(vm.FloorID);
                return;
            })
            .catch(function (error) {
                console.log('error', error);
            });
        },
        async TableChangeName ($event, ID) {
            const ClassFile = {
                                "tableID": ID,
                                "tableName": $event,
                                "accountID": 0
                              };
            const vm = this;
            await axios.put(process.env.API_HOST + `/Table/Update`, ClassFile)
            .then(function (response) {
                vm.getTable(vm.FloorID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async TableDelete ($event, ID) {
            const ClassFile = {
                                "tableID": ID,
                                "accountID": 0
                              };
            const vm = this;
            // axios's config 寫法
            await axios.delete(process.env.API_HOST + `/Table/Delete`, { data: ClassFile})
            .then(function (response) {
                vm.getTable(vm.FloorID);
                return;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        async changeTableInfo(obj) {
            const vm = this;
            await axios.put(process.env.API_HOST + `/Table/Update`, obj)
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