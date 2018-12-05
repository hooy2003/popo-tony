<template>
    <div class="card-checkout">
        <div class="content">
            <p>選擇新圖片</p>
            <div class="img-wrap">
                <img src="../../../img/invoice.jpg" alt="invoice">
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
    .card-checkout {
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
            p {
                flex-basis: 100%;
                padding: 10px;
                cursor: pointer;
                border-bottom: 1px solid #d2d2d7;
                &::after {
                    content: '>';
                    position: absolute;
                    font-size: 20px;
                    display: inline-block;
                    right: 30px;
                }
            }
            .img-wrap {
                flex-basis: 100%;
                text-align: center;
            }
        }
    }
</style>
