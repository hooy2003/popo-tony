
<template>
  <section class="content">
    <h1>忘記密碼</h1>
    <p>密碼重設信件將寄至您認證的 e-mail 信箱。請點選信件中網址重新設定密碼。</p>
    <form @submit.prevent="searchPassword"
          novalidate="true"
          >
      <div class="input__wrap">
        <input type="email"
               class=""
               v-model="email.value"
               @keyup="check($event)"
               placeholder="E-mail">
        <p v-show="email.errorMsg.length > 0"
              class="input__status--error js__input__status--error">{{email.errorMsg}}</p>
      </div>
      <div class="form_buttonbar">
        <button type="submit"
                class="primary"
                >重新設定密碼</button>
      </div>
    </form>
  </section>
</template>
<script>
import { checkInputV } from '../utils/form';
import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        inputHasError: false,
        email: {
            value: '',
            errorMsg: '',
        },
      }
    },
    computed: {
      ...mapGetters([
        'errorState'
      ])
    },
    methods: {
      check(e) {
        // CheckInput will return [type, isError, errorMsg]
        let errorStaus = checkInput(e.target, e.target.value),
            type       = errorStaus[0],
            isError    = errorStaus[1],
            errorMsg   = errorStaus[2];

        // Put 'Has error' as a switch
        this.inputHasError  = isError;

        if (type == 'email') {
          this.email.errorMsg = isError ? errorMsg : '';
        }
      },
      searchPassword() {
        this.errors = [];

        // If any Input wrong
        if(this.inputHasError) {
          return;
        }
        if(!this.email.value) {
          this.errors.push( this.errorState.emailempty );

          this.email.errorMsg = this.errorState.emailempty;
        }
        else {
          // ** 
          // * API concatenation
          // *
          alert('新密碼已經寄到您的信箱中了');
        }
      }
    }
  }
</script>