
<template>
  <div class="login-wrapper">
    <section class="login fadeInDown">
      <div class="fadeIn first">
          <img src="../../img/login.svg" id="icon" alt="User Icon" />
      </div>
      <form @submit.prevent="login"
            novalidate="true"
            >
        <div class="input__wrap">
          <input type="text"
                v-model="userName"
                placeholder="userName"
                class="fadeIn second"
                >
        </div>
        <div class="input__wrap">
          <!-- <label>Password</label> -->
          <input type="password"
                v-model="passWord"
                placeholder="passWord"
                class="fadeIn third"
                >
        </div>
        <div class="form_buttonbar">
          <button type="submit"
                  class="primary fadeIn fourth"
                  >Log In</button>
        </div>
        <div class="formFooter">
          <router-link to="/search_password" class="underlineHover">Forgot Password?</router-link>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        userName: '',
        passWord: '',
      }
    },
    methods: {
      login (){
        const resp = { account: 'admin',
                       name: 'Admin',
                       phone: '123456789' };

        if( this.userName == '' && this.passWord == '' ) {
          console.log('登入成功');
          // axios promise 等回傳來的東西用vuex action來非同步處理
          localStorage.setItem('token', JSON.stringify(resp));

          this.$store.commit({
            type: 'setUserData',
            userData: resp,
          });
          this.$router.push('/');
        } else {
          alert('登入失敗');
        }
        // ** 
        // * 後端API串接
        // * 如果有其他錯誤訊息，可以由我這邊開一個位置，把store 裡的 state叫出來用
        // * 讓前端控制錯誤訊息
        // *
        // axios.post(apiUrl)
        // .then(res => res.json())
        // .then(res => {
        //   if (res.error) {
        //     this.errors.push(res.error);
        //   } else {
        //     alert('ok!');
        //   }
        // });
      }
    }
  }
</script>