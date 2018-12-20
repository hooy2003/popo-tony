<template>
    <section class="content store">
        <div class="left">
            <div class="imgset-wrap">                
                <div @mousedown="saveImg($event)"
                     class="imgset">
                    <div v-show="tableName"
                        class="overtext">{{tableName}}</div>
                    <img src="https://www.pakutaso.com/shared/img/thumb/neko1869IMG_9074_TP_V.jpg"
                        draggable
                    >
                </div>
                <div @mousedown="saveImg($event)"
                     class="imgset">
                    <div v-show="tableName"
                        class="overtext">{{tableName}}</div>
                    <img src="https://www.pakutaso.com/shared/img/thumb/nuko-9_TP_V.jpg"
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
            <Button @click="saveCanvas()">儲存</Button>
            <Button @click="cleanCanvas()">清除全部桌子</Button>
            <Button @click="reloadCanvas()">讀檔</Button>
            <Button @click="deleteObj()">刪除選取的桌子</Button>
            <!-- <Button @click="doUndo()">上一步</Button>
            <Button @click="doRedo()">下一步</Button> -->
        </div>
        <div class="iii">                
                <p>1.右邊大圖可替換(背景圖，到時候直接換店家的圖)</p>
                <p>2.輸入完桌號，把小圖拖曳到右邊大圖中</p>
                <p>3.讀檔必須要先儲存才有東西讀</p>
            </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';

// https://ithelp.ithome.com.tw/articles/10207087?sc=iThelpR
// https://stackoverflow.com/questions/42344356/how-can-i-set-up-fabric-js-in-vue
// https://stackoverflow.com/questions/45647084/fabric-js-editing-text-via-inputs
// 上一步 + 下一步
  export default {
    components: {
    },
    mounted() {
        this.canvas = new fabric.Canvas('canvas', {
            width: 500,
            height: 500
        });
        // console.log(JSON.stringify(this.canvas));

        fabric.Image.fromURL('https://www.pakutaso.com/shared/img/thumb/AMEMAN17826009_TP_V.jpg', (img) => {
            const oImg = img.set({
                width: 500,
                height: 500
            })
            this.canvas.setBackgroundImage(oImg).renderAll()
        });
        
        // 補做一個上一步 !!回復上一動 只做這個，不用下一步

        // // 當 canvas 中的物件被修改時，先將之前的 state push 進入 undo 裡面，再把目前的 state 儲存起來
        // this.state = this.canvas.toJSON();
        // this.canvas.on({
        //     'object:modified': e => { this.doRecord(e) },
        //     'object:added': e => { this.doRecord(e) }
        // });

        this.canvas.on('drop', e => {            
            this.dropImg(e);
        });

        this.canvas.on('mouse:dblclick', e => {
            const active = e.target
            if (active) {
                this.popControl(active);
            }
        });
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
            saveDate: '', // 儲存的 JSON
            state:'',     // 現在狀態的 JSON
            undo: [],      // 上一步的 JSON
            redo: []      // 下一步的 JSON
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
        saveImg (e) {
            if( e.target.tagName.toLowerCase() === 'img' ){
                this.imgDragOffset.offsetX = e.offsetX;
                this.imgDragOffset.offsetY = e.offsetY;
                this.movingImage = e.target;
            }
        },
        dropImg (e) {
            const {offsetX, offsetY} = e.e;
            const image = new fabric.Image(this.movingImage, {
                width: this.movingImage.naturalWidth,
                height: this.movingImage.naturalHeight,
                scaleX: 100 / this.movingImage.naturalWidth,
                scaleY: 100 / this.movingImage.naturalHeight,
                originX: 'center',
                originY: 'center'
            });
            const text = new fabric.Text(this.tableName, {                
                fontSize: 20,
                fontFamily: 'Verdana',
                fontWeight: 'bold',
                fill: 'white',
                originX: 'center',
                originY: 'center'
            });
            const group = new fabric.Group([image, text], {
                top: offsetY - this.imgDragOffset.offsetY,
                left: offsetX - this.imgDragOffset.offsetX
            });
            this.canvas.add(group);
        },
        popControl (e) {
            console.log('popControl', e);
            // 之後也許可以把東西給帶進來
        },
        saveCanvas () {
            console.log(this.canvas.toJSON());
            this.saveDate = this.canvas.toJSON();
        },
        cleanCanvas () {
            this.canvas.remove(...this.canvas.getObjects());
        },
        reloadCanvas () {
            this.canvas.loadFromJSON(this.saveDate);
        },
        deleteObj () {
            this.canvas.remove(this.canvas.getActiveObject());
        },
        // doRecord (e) {

        //     console.log('do Record');
        //     this.undo.push(this.state);
        //     // 讀檔
        //     this.state = JSON.stringify(this.canvas);
        //     this.redo.length = 0;
        // },
        // // 把最後一筆被修改的內容透過 pop 拿出來讀取，再將 state 更改為上一步的狀態。
        // doUndo () {
        //     if (!this.undo.length) {
        //         alert('目前沒有動作可復原');
        //         return;
        //     }
        //     let lastJSON = this.undo.pop();
        //     this.canvas.loadFromJSON(lastJSON);
        //     // 在做上一步時把目前狀態 push 到 redo 陣列
        //     this.redo.push(this.state);
        //     this.state = lastJSON;
        // },
        // doRedo () {
        //     if (!this.redo.length) {
        //         alert('目前沒有動作可復原');
        //         return;
        //     }
        //     let lastJSON = this.redo.pop();
        //     this.canvas.loadFromJSON(lastJSON)
        //     // 在做下一步時把目前狀態 push 到 undo 陣列
        //     this.undo.push(this.state);
        //     this.state = lastJSON;
        // },        
    }

  }
</script>
<style lang="scss">
</style>