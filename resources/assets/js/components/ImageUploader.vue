<template>
  <div class="image-uploader">
    <div v-if="image_url">
      <div class="image">
        <img :src="imgsrc" class="img-responsive"/>
      </div>
    </div>
    <Upload  v-else
        :show-upload-list="false"
        :default-file-list="defaultList"
        type="drag"
        action=""
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        :on-error="onError"
        :multiple="false">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="36" style="color: #3399ff"></Icon>
            <p style="padding: 10px;box-sizing: border-box;">將圖片拖到此處，或點擊上傳</p>
        </div>
    </Upload>
  </div>
</template>

<script>
import axios from 'axios';
import Cropper from 'cropperjs';

export default {
    props: {
      src: {
        type: String
      },
      maxSize: {
          type: Number,
          default: 10
      }
    },
    data() {
      return {
        image_url: this.src,
        defaultList: [
            {
                'name': '',
                'url': ''
            },
            {
                'name': '',
                'url': ''
            }
        ],      
      }
    },
    computed: {
      imgsrc : {
        get: function() {
          return this.src;
        },
        set: function(newValue) {
        }
      },
    },
    methods: {
      beforeUpload (file) {
        console.log(file.size);
        const isLt10M = file.size / 1024 / 1024 < this.maxSize;

        if (!isLt10M) {
          // this.$message.error(`File size can not exceed ${this.maxSize}MB!`);
        } else {
          // this.$emit('before-upload', file);
          console.log(file);
        }

        return isLt10M;
      },
      onSuccess (res, file) {
        console.log('onSuccess', res.source);
        // this.image_url = res.source;
        // this.$emit('on-success', res, file);
      },
      onError (error, file) {
        console.log('error', error);
        // this.$emit('on-success', res, file);
      },
    }
}
</script>

<style lang="scss">
.image-uploader {
  position: relative;

  .image {
    height: inherit;

    .img-responsive {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
