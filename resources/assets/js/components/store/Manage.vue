<template>
    <section class="content store">
        <div class="left">
            <div class="imgset-wrap">
                <div v-show="tableName"
                        class="overtext">{{tableName}}</div>
                <div class="imgset">
                    <img src="https://www.pakutaso.com/shared/img/thumb/neko1869IMG_9074_TP_V.jpg"
                        alt=""
                        draggable
                    >
                </div>
                <input v-model="tableName"
                    placeholder="輸入桌號"
                    type="text"
                >
            </div>
        </div>
        <div class="right">
            <canvas id="canvas"></canvas>
            <Button id="saveBtn">儲存</Button>
            <Button id="cleanBtn">清除</Button>
            <Button id="reloadBtn">讀檔</Button>            
        </div>
        <div class="iii">                
                <p>1.右邊大圖可替換(背景圖，到時候直接換店家的圖)</p>
                <p>2.輸入完桌號，把小圖拖曳到右邊大圖中</p>
                <p>3.讀檔必須要先儲存才有東西讀</p>
                <p>4.之後會做上一步與下一步的按鈕</p>
            </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import { CanvasN } from '../../fabric/CanvasN'

// https://ithelp.ithome.com.tw/articles/10207087?sc=iThelpR
// https://stackoverflow.com/questions/42344356/how-can-i-set-up-fabric-js-in-vue
// https://stackoverflow.com/questions/45647084/fabric-js-editing-text-via-inputs
// 上一步 + 下一步
  export default {
    components: {
    },
    mounted() {
        // CanvasN();
        this.canvas = new fabric.Canvas('canvas', {
            width: 500,
            height: 500
        });
        console.log(JSON.stringify(this.canvas));

         fabric.Image.fromURL('https://www.pakutaso.com/shared/img/thumb/AMEMAN17826009_TP_V.jpg', (img) => {
            const oImg = img.set({
                width: 500,
                height: 500
            })
            this.canvas.setBackgroundImage(oImg).renderAll()
        })
        this.canvas.on('drop', this.dropImg);

        $('.imgset').on('mousedown', this.saveImg);
        $('#saveBtn').on('click', this.saveCanvas);
        $('#cleanBtn').on('click', this.cleanCanvas);
        $('#reloadBtn').on('click', this.reloadCanvas);
    },
    data() {
        return {
            canvas: '',
            tableName: '',            
            movingImage: '',
            imgDragOffset: {
                offsetX: 0,
                offsetY: 0
            },
            saveDate: '',
        }
    },
    computed: {
      ...mapGetters([
      ]),
    },
    methods: {
        uploadFile() {
            file.click();
        },
        saveImg (e) {
            if( e.target.tagName.toLowerCase() === 'img' ){
                this.imgDragOffset.offsetX = e.offsetX;
                this.imgDragOffset.offsetY = e.offsetY;
                this.movingImage = e.target;
            }
        },
        handleFile () {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(this.files[0]);
            fileReader.onload = (e) => {
                // 圖片 base64
                const dataURL = e.target.result
                const img = document.createElement('img')
                img.draggable = true
                img.src = dataURL
                img.click = saveImg
                imgset.appendChild(img)
            };
        },
        dropImg (e) {
            const {offsetX, offsetY} = e.e;
            const image = new fabric.Image(this.movingImage, {
                width: this.movingImage.naturalWidth,
                height: this.movingImage.naturalHeight,
                scaleX: 100 / this.movingImage.naturalWidth,
                scaleY: 100 / this.movingImage.naturalHeight,
                originX: 'center',
                originY: 'center',
            });
            console.log('this.tableName', this.tableName);
            const text = new fabric.Text(this.tableName, {
                originX: 'center',
                originY: 'center',
                fontSize: 20,
                fontFamily: 'Verdana',
                fontWeight: 'bold',
                fill: 'white'
            });
            const group = new fabric.Group([image, text], {
                top: offsetY - this.imgDragOffset.offsetY,
                left: offsetX - this.imgDragOffset.offsetX
            });
            this.canvas.add(group);
        },
        saveCanvas (e) {
            console.log(this.canvas.toJSON());
            this.saveDate = this.canvas.toJSON();
        },
        cleanCanvas (e) {
            this.canvas.clear();
        },
        reloadCanvas (e) {
            this.canvas.loadFromJSON(this.saveDate);
        }
    }

  }
</script>
<style lang="scss">
</style>