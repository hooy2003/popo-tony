<template>
    <div class="card-detail"
         >
        <div class="content">
            <p>選擇新圖片</p>
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
            display: flex;
            flex-wrap: wrap;
            padding: 35px 20px 20px 20px;
            box-sizing: border-box;
        }
    }
</style>
