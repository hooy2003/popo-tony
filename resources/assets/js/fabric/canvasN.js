export function CanvasN () {
    const canvas = new fabric.Canvas('canvas', {
        width: 500,
        height: 500
    });
    console.log(JSON.stringify(canvas));

    fabric.Image.fromURL('https://www.pakutaso.com/shared/img/thumb/AMEMAN17826009_TP_V.jpg', (img) => {
        const oImg = img.set({
            width: 500,
            height: 500
        })
        canvas.setBackgroundImage(oImg).renderAll()
    })
      
    const imageUploader = $('#imageUploader');
    const file = $('#file');
    const imgset = $('#imgset');
    const defaultImg = $('#defaultImg');
    const saveBtn = $('#saveBtn');
    const cleanBtn = $('#cleanBtn');
    const reloadBtn = $('#reloadBtn');

    let saveDate;
    let movingImage;
    let imgDragOffset = {
        offsetX: 0,
        offsetY: 0
    };

      function uploadFile (e) {
        file.click();
      }
      
      function saveImg (e) {
        if( e.target.tagName.toLowerCase() === 'img' ){
          imgDragOffset.offsetX = e.clientX - e.target.offsetLeft;
          imgDragOffset.offsetY = e.clientY - e.target.offsetTop;
          movingImage = e.target;
        }
      }
      
      function handleFile () {
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
      }
      
      function dropImg (e) {
        const {offsetX, offsetY} = e.e;
        const image = new fabric.Image(movingImage, {
          width: movingImage.naturalWidth,
          height: movingImage.naturalHeight,
          scaleX: 100 / movingImage.naturalWidth,
          scaleY: 100 / movingImage.naturalHeight,
          top: offsetY - imgDragOffset.offsetY,
          left: offsetX - imgDragOffset.offsetX
        });
        const text = new fabric.Text('hello world', {
          top: offsetY - imgDragOffset.offsetY,
          left: offsetX - imgDragOffset.offsetX,
          fontSize: 15,
          fontFamily: 'Verdana',
          fill: 'white'
        });
        const group = new fabric.Group([image, text], {
          left: 50,
          top: 50,
        });
        canvas.add(group);
      }

      function saveCanvas (e) {
        console.log(canvas.toJSON());
        saveDate = canvas.toJSON();
      }

      function cleanCanvas (e) {
        canvas.clear();
      }
      function reloadCanvas (e) {
        canvas.loadFromJSON(saveDate);
      }

    imageUploader.on('click', uploadFile, true);
    file.on('change', handleFile);
    canvas.on('drop', dropImg);
    
    // defaultImg.addEventListener('mousedown', saveImg)
    imgset.on('mousedown', saveImg);
    
    saveBtn.on('click', saveCanvas);
    cleanBtn.on('click', cleanCanvas);
    reloadBtn.on('click', reloadCanvas);
}