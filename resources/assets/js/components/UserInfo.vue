<template>
  <section class="content">
    <h1>UserInfo</h1>
    <form @submit.prevent="editUserData"
          novalidate="true">
      <div class="input__wrap">
        <label>聯絡E-mail</label>
        <input type="email"
              class=""
              v-model="email.value"
              @keyup="check($event)"
              placeholder="聯絡E-mail">
        <p v-show="email.errorMsg.length > 0"
              class="input__status--error js__input__status--error">{{name.errorMsg}}</p>
      </div>
      <div class="input__wrap">
        <label>名字</label>
        <input type="text"
              class=""
              v-model="name.value"
              @keyup="check($event)"
              placeholder="名字">
        <p v-show="name.errorMsg.length > 0"
              class="input__status--error js__input__status--error">{{name.errorMsg}}</p>
      </div>
      <div class="input__wrap">
        <label>電話號碼</label>
        <input type="phone"
              class=""
              v-model="phone.value"
              @keyup="check($event)"
              placeholder="電話號碼">
        <p v-show="phone.errorMsg.length > 0"
              class="input__status--error js__input__status--error">{{phone.errorMsg}}</p>
      </div>
      <div class="form_buttonbar">
        <button type="submit"
                class="primary"
                >Change</button>
      </div>
    </form>
  </section>
</template>
<script>
import { checkInputV } from '../utils/form';
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        inputHasError: false,
        email: {
          value: '',
          errorMsg: '',
        },
        name: {
          value: '',
          errorMsg: '',
        },
        phone: {
          value: '',
          errorMsg: '',
        },
        passWord: {
          value: '',
          errorMsg: '',
        },
      }      
    },
    computed: {
      ...mapGetters([
        'User'
      ]),
    },
    created() {
      this.email.value = this.User.email;
      this.name.value = this.User.name;
      this.phone.value  = this.User.phone;
    },
    methods: {
      check(e) {
        // CheckInput will return [type, isError, errorMsg]
        let errorStaus = checkInput(e.target, e.target.value),
            type       = errorStaus[0],
            isError    = errorStaus[1],
            errorMsg   = errorStaus[2];

        //  Put 'Has error' as a switch
        this.inputHasError  = isError;

        if (type == 'email') {
          this.email.errorMsg = isError ? errorMsg : '';
        }
        if (type == 'password') {
          this.passWord.errorMsg = isError ? errorMsg : '';
        }
        if (type == 'phone') {
          this.phone.errorMsg = isError ? errorMsg : '';
        }
        if (type == 'text') {
          this.phone.errorMsg = isError ? errorMsg : '';
        }
      },
      editUserData (e) {
        let AllData = { email: this.email.value,
                        name:  this.name.value,
                        phone: this.phone.value};
        // If any Input wrong
        if(this.inputHasError) {
          alert('資料有誤');
          return;
        }
        else {
          this.$store.commit({
            type: 'editUserData',
            value: AllData
          })
          localStorage.setItem('token', JSON.stringify(AllData));
        }
        // ** 
        // * API concatenation
        // *    
      },
    }
  }
</script>