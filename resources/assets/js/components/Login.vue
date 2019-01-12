
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
          let vm = this;
          
          // API token Design
          // https://forum.vuejs.org/t/axios-token/33528
          // https://juejin.im/post/5bab739af265da0aa3593177
          // First with FormData

          let params = new FormData();
              params.append("client_id", "AirdesignPOS");
              params.append("client_secret", "777ABHJV777");
              params.append("grant_type", "password");
              params.append("username", "vincent@airdesign.com.tw");
              params.append("password", "Abc@123");

          axios.post(process.env.TOKEN_HOST + `/token`, params)
          .then(function (response) {

              // axios promise 
              // Waiting for the return's item, handle async by vuex action
              localStorage.setItem('token', JSON.stringify(response.data.access_token));

              vm.$store.commit({
                type: 'setUserData',
                userData: resp,
              });

              vm.$router.push('/');
          })
          .catch(function (error) {
              // relogin or redirection to 404
              alert('登入失敗');
              console.log(error);
          });
        } else {
          alert('登入失敗');
        }
      }
    }
  }
</script>