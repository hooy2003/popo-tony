<template>
    <div class="card-detail"
         >
        <div class="content">
            <div class="col-wrap">
                <p>規格名稱</p>
                <Input v-model="cloneName"                           
                        placeholder="Enter something..."></Input>
            </div>
            <div class="col-wrap">
                <p>印單時機</p>
                <Dropdown trigger="click"
                >
                    <a href="javascript:void(0)">
                        重印、刪除、出單 >
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="">重印、出單</DropdownItem>
                        <DropdownItem name="">刪除、出單</DropdownItem>
                        <DropdownItem name="">重印、刪除、出單</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div class="col-wrap">
                <p>內用/外帶</p>
                <Dropdown trigger="click"
                >
                    <a href="javascript:void(0)">
                        全部 >
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="">外帶</DropdownItem>
                        <DropdownItem name="">內用</DropdownItem>
                        <DropdownItem name="">全部</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

    export default {
        name: 'CardDetail',
        props: [
        ],
        data() {
            return {
                cloneName: '飲料區',
                cloneTime: '重印、刪除、出單',
                cloneType: '全部'
            }
        },
        computed: {
            ...mapGetters([
                'imgSrc'
            ]),
        },
        methods: {
            changeItem () {
            }
        }
    }
</script>
<style lang="scss">
    .card-detail {
        &.active, &:hover {
			i {
				color: #007aff;
			}
		}
        .content {
            width: auto;
            display: flex;
            flex-wrap: wrap;
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
            background-color: #fff;
            box-sizing: border-box;
            .col-wrap {
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                position: relative;
                padding: 15px 10px;
                background-color: #fff;
                &::after {
                    content: '';
                    display: block;
                    position:absolute;
                    background-color: #d2d2d7;
                    height: 1px;
                    width: calc(100% + 20px);
                    bottom: 0;
                    left: -10px;
                }
                &:first-child {
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                }
                &:last-child {
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    &::after {
                        content: '';
                        display: none;
                    }
                }
                .ivu-dropdown {
                    right: 10px;
                }
            }
        }
    }
</style>
