<template>
    <section class="content">
        <Row>
            <Col span="8">
                <div class="title">出機單設定
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            <Icon type="md-create"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增廚房聯規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增標籤貼紙規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增客戶聯規則</DropdownItem>
                            <DropdownItem><Icon type="md-create"></Icon>編輯出單名稱</DropdownItem>
                            <DropdownItem><Icon type="md-copy"></Icon>複製此出單機</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div style="margin-bottom:40px"></div>
                <div class="union">
                    <CardA v-for="(item, index) in billing"
                           :key='item.index'  
                           :billing-name="item" 
                    >
                    </CardA>
                </div>
            </Col>
            <Col span="8">
                <div class="title">櫃檯出單機
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            <Icon type="md-create"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增廚房聯規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增標籤貼紙規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增客戶聯規則</DropdownItem>
                            <DropdownItem><Icon type="md-create"></Icon>編輯出單名稱</DropdownItem>
                            <DropdownItem><Icon type="md-copy"></Icon>複製此出單機</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="union">
                    <h4>結帳相關聯</h4>
                    <CardA v-for="(item, index) in rules"
                           :key='item.index'
                           :billing-name="item" 
                    >
                    </CardA>
                    <h4>顧客相關聯</h4>
                    <CardA v-for="(item, index) in rules"
                           :key='item.index'
                           :billing-name="item" 
                    >
                    </CardA>
                    <h4>廚房相關聯</h4>
                    <CardA v-for="(item, index) in rules"
                           :key='item.index'
                           :billing-name="item" 
                    >
                    </CardA>
                </div>
            </Col>
            <Col span="8">
                <div class="title">和牛區
                    <Dropdown trigger="click">
                        <a href="javascript:void(0)">
                            <Icon type="md-create"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增廚房聯規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增標籤貼紙規則</DropdownItem>
                            <DropdownItem><Icon type="ios-add-circle"></Icon>新增客戶聯規則</DropdownItem>
                            <DropdownItem><Icon type="md-create"></Icon>編輯出單名稱</DropdownItem>
                            <DropdownItem><Icon type="md-copy"></Icon>複製此出單機</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="union">
                    <h4>基本設定</h4>
                    <Card>
                        <div class="setting">
                            <h3>列印名稱</h3>
                            <p>和牛區</p>
                        </div>
                    </Card>
                    <Card>
                        <div class="setting">
                            <h3>列印名稱</h3>
                            <p>印單時機</p>
                        </div>
                    </Card>
                    <h4>排列與切單</h4>
                    <Card>
                        <div class="setting">
                            <h3>套餐排列</h3>
                            <p>套餐內品項</p>
                        </div>
                    </Card>
                    <Card>
                        <div class="setting">
                            <h3>相同品項顯示</h3>
                            <p>同一行</p>
                        </div>
                    </Card>
                    <Card>
                        <div class="setting">
                            <h3>切單方式</h3>
                            <p>不切單</p>
                        </div>
                    </Card>
                    <h4>編輯列印品項</h4>
                    <Card>
                        <div>
                            <h3>編輯列印品項</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>和牛上選牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                    <Card>
                        <div>
                            <h3>特選厚切牛舌</h3>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>        
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import CardA from './card.vue';

  export default {
    components: {
        CardA,  
    },
    computed: {
      ...mapGetters([
        'User',
        'billing',
        'rules'
      ]),
    //   billings () {
    //       return Object.keys(this.billing);
    //   }
    }
  }
</script>