webpackJsonp([1],{

/***/ "37t0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZphK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b79p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iiYX":
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__("M4fF");
window.Popper = __webpack_require__("Zgw8").default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__("7t+N");
  //** 
  //** bootstrap 拔掉
  //**
  // require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__("mtWM");

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');
//** 
//** key要改？
//**
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });


// Common Libraries
// -------
// -------
// -------


// Load custom libraries.
// require('./module.js');

/***/ }),

/***/ "me9L":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pbmN":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxMDUuMTI1cHgiIGhlaWdodD0iNzkuOTcxcHgiIHZpZXdCb3g9IjAgMCAxMDUuMTI1IDc5Ljk3MSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTA1LjEyNSA3OS45NzEiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9ImxhYmxlcyI+DQo8L2c+DQo8ZyBpZD0iSWNvbnMiPg0KCTxnPg0KCQk8Y2lyY2xlIGZpbGw9IiNFOUVBRUIiIGN4PSI1MiIgY3k9IjQ4Ljk3MSIgcj0iMjAiLz4NCgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI5LjY1Nyw2NS45MDINCgkJCWMtMy41MTctNC42NzctNS42MDItMTAuNDkyLTUuNjAyLTE2Ljc5NWMwLTE1LjQ0OCwxMi41MjMtMjcuOTcyLDI3Ljk3My0yNy45NzJDNjcuNDc3LDIxLjEzNSw4MCwzMy42NTksODAsNDkuMTA3DQoJCQljMCw2LjMwNC0yLjA4NSwxMi4xMjEtNS42MDQsMTYuNzk4Ii8+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMkE1MDgyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTUyLDU0Ljk3MWMyLjI5MiwwLDYuNDM4LTMuMDYzLDctNA0KCQkJCXMwLjc3NS0xLjg2MywxLTNjMC4wNTMtMC4yNywwLjgyOC0xLjc3MSwxLTJjMC45NDItMS4yNTMsMS01LDEtNWwtMS0xYzAsMC0wLjI0NC0zLjE0MS0wLjM4My00LjY4MQ0KCQkJCWMtMC41NzUtNC40OTgtMy42NzQtNy4zMTktOC42MTctNy4zMTlzLTguMDQyLDIuODIyLTguNjE3LDcuMzE5QzQzLjI0NCwzNi44MzEsNDMsMzkuOTcxLDQzLDM5Ljk3MWwtMSwxYzAsMCwwLjA1OCwzLjc0NywxLDUNCgkJCQljMC4xNzIsMC4yMjksMC45NDcsMS43MywxLDJjMC4yMjQsMS4xMzcsMC40MzgsMi4wNjMsMSwzUzQ5LjcwOCw1NC45NzEsNTIsNTQuOTcxeiIvPg0KCQkJPHBhdGggZmlsbD0iIzJEQzFFNSIgc3Ryb2tlPSIjMkE1MDgyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTUyLDc0Ljk3MWM3LjAwNCwwLDEzLjM5LTIuNDMyLDE4LTd2LTQNCgkJCQljLTAuNTYxLTIuMDAyLTIuMTYyLTMuMDI2LTQtNGwtNy0zYzAsMC0zLjYwNCwzLTcsM3MtNi0zLTYtM2wtOCwzYy0xLjgzOCwwLjk3NC0zLjQzOSwxLjk5OC00LDR2NA0KCQkJCUMzOC42MSw3Mi41NCw0NC45OTYsNzQuOTcxLDUyLDc0Ljk3MXoiLz4NCgkJCTxnPg0KCQkJCTxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJBNTA4MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSI0NiIgeTE9IjU2Ljk3MSIgeDI9IjQ2IiB5Mj0iNTEuOTcxIi8+DQoJCQk8L2c+DQoJCQk8Zz4NCgkJCQk8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMyQTUwODIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iNTgiIHkxPSI1Ny41NjUiIHgyPSI1OCIgeTI9IjUxLjk3MSIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0KCTxlbGxpcHNlIGZpbGw9IiNFRTU0NTYiIGN4PSIxMi43NzEiIGN5PSI0My40MDkiIHJ4PSIyLjEwNCIgcnk9IjIuMDYzIi8+DQoJPHBvbHlnb24gZmlsbD0iI0VFNTQ1NiIgcG9pbnRzPSI4Ni4wMjgsMzIuNzcxIDg1LjY0NCwzMy45MDUgODYuMzU5LDM0Ljg2NCA4NS4xNjMsMzQuODQ5IDg0LjQ3MSwzNS44MjYgODQuMTE2LDM0LjY4MyANCgkJODIuOTczLDM0LjMyOCA4My45NSwzMy42MzYgODMuOTM1LDMyLjQzOSA4NC44OTQsMzMuMTU1IAkiLz4NCgk8cG9seWdvbiBmaWxsPSIjMkVDM0U2IiBwb2ludHM9IjI5Ljc1LDE0LjU5NiAyOS4wODMsMTQuMzcgMjguNTE5LDE0Ljc5MSAyOC41MjcsMTQuMDg3IDI3Ljk1MiwxMy42OCAyOC42MjUsMTMuNDcxIDI4LjgzNCwxMi43OTkgDQoJCTI5LjI0MSwxMy4zNzQgMjkuOTQ1LDEzLjM2NSAyOS41MjMsMTMuOTI5IAkiLz4NCgk8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJFQzNFNiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iMTUuMjUiIGN5PSIxOC40NzEiIHI9IjEuMTI1Ii8+DQoJPGNpcmNsZSBmaWxsPSIjMkVDM0U2IiBjeD0iODkuNzUiIGN5PSI0Ny4yMjEiIHI9IjEuMjUiLz4NCgk8Y2lyY2xlIGZpbGw9IiMyRUMzRTYiIGN4PSI3MS42ODgiIGN5PSIxOC43ODQiIHI9IjEuNjg4Ii8+DQoJPHJlY3QgeD0iMzciIHk9IjcuOTcxIiBmaWxsPSIjQ0VDRUNFIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+DQoJPHJlY3QgeD0iODUiIHk9IjU3Ljk3MSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45NTAzIC0wLjMxMTQgMC4zMTE0IDAuOTUwMyAtMTQuMjE4MSAyOS44OTE5KSIgZmlsbD0iI0NFQ0VDRSIgd2lkdGg9IjMiIGhlaWdodD0iMyIvPg0KCTxyZWN0IHg9IjE0LjMzNCIgeT0iNTcuODA1IiBmaWxsPSIjQ0VDRUNFIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+DQoJDQoJCTxyZWN0IHg9IjE2IiB5PSIzMS45NzEiIHRyYW5zZm9ybT0ibWF0cml4KDAuNjcwNiAtMC43NDE5IDAuNzQxOSAwLjY3MDYgLTE4Ljg1OTYgMjMuNDczOSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0NFQ0VDRSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIi8+DQoJPHJlY3QgeD0iNDkiIHk9IjguOTcxIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjU4NjYgLTAuODA5OSAwLjgwOTkgMC41ODY2IDEyLjM5NyA0NS4yMjgzKSIgZmlsbD0iIzJFQzNFNiIgd2lkdGg9IjMiIGhlaWdodD0iMyIvPg0KCTxjaXJjbGUgZmlsbD0iI0ZEREIwMCIgY3g9Ijg4LjgzNCIgY3k9IjIxLjYzOCIgcj0iMS41Ii8+DQoJPGNpcmNsZSBmaWxsPSIjRkREQjAwIiBjeD0iMjYuNTgzIiBjeT0iMjMuNTU1IiByPSIwLjc1Ii8+DQoJPGNpcmNsZSBmaWxsPSIjRkREQjAwIiBjeD0iNjMuNjI1IiBjeT0iOC43NjMiIHI9IjEuMDQyIi8+DQoJPHBvbHlnb24gZmlsbD0iI0ZEREIwMCIgcG9pbnRzPSIyMS4xMTgsMTEuNjY4IDIxLjcwNSwxMi4wODcgMjIuMzg1LDExLjg0MSAyMi4xNjcsMTIuNTMgMjIuNjEsMTMuMDk5IDIxLjg4OSwxMy4xMDQgDQoJCTIxLjQ4NSwxMy43MDMgMjEuMjU2LDEzLjAxOCAyMC41NjIsMTIuODE5IDIxLjE0MywxMi4zODkgCSIvPg0KCTxwb2x5Z29uIGZpbGw9IiNEOEQ4RDgiIHBvaW50cz0iODIuMDgzLDEwLjEzOCA4MS43MjgsMTEuMDg3IDgwLjcyOCwxMS4yNTQgODAuMDgzLDEwLjQ3MiA4MC40MzgsOS41MjIgODEuNDM4LDkuMzU1IAkiLz4NCgk8cG9seWdvbiBmaWxsPSIjRDhEOEQ4IiBwb2ludHM9IjQwLjA4MywxNy4zMDUgMzguODE5LDE3LjgyNiAzNy43MzYsMTYuOTkyIDM3LjkxNywxNS42MzggMzkuMTgxLDE1LjExNyA0MC4yNjQsMTUuOTUgCSIvPg0KCTxwb2x5Z29uIGZpbGw9IiNEOEQ4RDgiIHBvaW50cz0iNjEuNDE3LDE2LjIyMSA2MC41NDgsMTYuMzk0IDU5Ljk2NCwxNS43MjcgNjAuMjQ5LDE0Ljg4OCA2MS4xMTgsMTQuNzE2IDYxLjcwMiwxNS4zODIgCSIvPg0KCTxwb2x5Z29uIGZpbGw9IiNEOEQ4RDgiIHBvaW50cz0iOTQsMzYuNTU1IDkyLjk2NCwzNy4wMTUgOTIuMDQ3LDM2LjM0OCA5Mi4xNjYsMzUuMjIxIDkzLjIwMiwzNC43NiA5NC4xMTksMzUuNDI3IAkiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8zIj4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "sV/x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app.vue

//
//
//
//
//
//
//
//


/* harmony default export */ var app = ({
  name: 'app',
  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(['User']), {
    isLogin: function isLogin() {
      return this.User.isLogin;
    }
  })
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7096ac57","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app.vue
var app_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wrapper"},[_c('router-view',{attrs:{"name":"header"}}),_vm._v(" "),_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: app_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var js_app = (esExports);
// CONCATENATED MODULE: ./resources/assets/js/app.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  app,
  js_app,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var assets_js_app = (Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Login.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Login = ({
  data: function data() {
    return {
      userName: '',
      passWord: ''
    };
  },

  methods: {
    login: function login() {
      var resp = { account: 'admin',
        name: 'Tony',
        phone: '25551234' };

      if (this.userName == '' && this.passWord == '') {
        console.log('登入成功');
        // axios promise 等回傳來的東西用vuex action來非同步處理
        localStorage.setItem('token', stringify_default()(resp));

        this.$store.commit({
          type: 'setUserData',
          userData: resp
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
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-72c25d3f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Login.vue
var Login_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-wrapper"},[_c('section',{staticClass:"login fadeInDown"},[_vm._m(0),_vm._v(" "),_c('form',{attrs:{"novalidate":"true"},on:{"submit":function($event){$event.preventDefault();return _vm.login($event)}}},[_c('div',{staticClass:"input__wrap"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userName),expression:"userName"}],staticClass:"fadeIn second",attrs:{"type":"text","placeholder":"userName"},domProps:{"value":(_vm.userName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.userName=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"input__wrap"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.passWord),expression:"passWord"}],staticClass:"fadeIn third",attrs:{"type":"password","placeholder":"passWord"},domProps:{"value":(_vm.passWord)},on:{"input":function($event){if($event.target.composing){ return; }_vm.passWord=$event.target.value}}})]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"formFooter"},[_c('router-link',{staticClass:"underlineHover",attrs:{"to":"/search_password"}},[_vm._v("Forgot Password?")])],1)])])])}
var Login_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fadeIn first"},[_c('img',{attrs:{"src":__webpack_require__("pbmN"),"id":"icon","alt":"User Icon"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form_buttonbar"},[_c('button',{staticClass:"primary fadeIn fourth",attrs:{"type":"submit"}},[_vm._v("Log In")])])}]
var Login_esExports = { render: Login_render, staticRenderFns: Login_staticRenderFns }
/* harmony default export */ var components_Login = (Login_esExports);
// CONCATENATED MODULE: ./resources/assets/js/components/Login.vue
var Login_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Login___vue_template_functional__ = false
/* styles */
var Login___vue_styles__ = null
/* scopeId */
var Login___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Login___vue_module_identifier__ = null
var Login_Component = Login_normalizeComponent(
  Login,
  components_Login,
  Login___vue_template_functional__,
  Login___vue_styles__,
  Login___vue_scopeId__,
  Login___vue_module_identifier__
)

/* harmony default export */ var js_components_Login = (Login_Component.exports);

// CONCATENATED MODULE: ./resources/assets/js/vuex/modules/app.js
var state = {
    User: {
        account: "",
        email: "",
        name: "",
        phone: "",
        isLogin: false
    },
    errorState: {
        "more": "使用者帳號須在5-30個字元",
        "emailempty": "信箱不得為空",
        "email": "信箱已經被註冊過了",
        "phone": "手機號碼已經被註冊過了",
        "tel": "必須為數字",
        "passwordempty": "密碼不得為空",
        "less": "密碼須為英文數字混合且6位數以上",
        "same": "兩次輸入的密碼不一樣",
        "type": "格式不正確",
        "agree": "請勾選同意",
        "what": "無效的資料",
        "code": "驗證碼錯誤",
        "strange": "不得包括特殊符號"
    },
    isLoading: false
};

var getters = {
    User: function User(state) {
        return state.User;
    },
    errorState: function errorState(state) {
        return state.errorState;
    },
    isLoading: function isLoading(state) {
        return state.isLoading;
    }
};

var mutations = {
    setUserData: function setUserData(state, _ref) {
        var userData = _ref.userData;

        state.User.account = userData.email;
        state.User.name = userData.name;
        state.User.phone = userData.phone;
        state.User.isLogin = true;
    },
    clearUserData: function clearUserData(state) {
        state.User.account = "";
        state.User.name = "";
        state.User.phone = "";
        state.User.isLogin = false;
    },
    editUserData: function editUserData(state, _ref2) {
        var value = _ref2.value;

        state.User.email = value.email;
        state.User.name = value.name;
        state.User.phone = value.phone;
    },
    isLoading: function isLoading(state) {
        state.isLoading = !state.isLoading;
    }
};

var actions = {};

/* harmony default export */ var modules_app = ({
    state: state,
    getters: getters,
    mutations: mutations
});
// CONCATENATED MODULE: ./resources/assets/js/vuex/store.js




vue_esm["a" /* default */].use(vuex_esm["a" /* default */]);

var store = new vuex_esm["a" /* default */].Store({
  modules: {
    app: modules_app
  }
});

/* harmony default export */ var vuex_store = (store);
// CONCATENATED MODULE: ./resources/assets/js/utils/form.js


/* 
    .Validate 
    isEmail:email格式檢查 return true、false 
    isDate:日期格式檢查 return true、false 
    chkAccount:檢查帳號必須為英數或底線組成，且必須為4碼以上 
    chkPassword:6～12個字元，需包含數字及英文，勿使用特殊字元或符號 
    ----------------------------------------------------------------
    .String 
    trimSymbol:去除字串左右兩邊的指定符號  
    ex: MyFun.String.trimSymbol(',test,', ","); // test 
    ----------------------------------------------------------------
    .Web 
    request:取得網址列參數 
    browser:取得使用的瀏覽器
    browserVersion:取得瀏覽器版本 (包含IE11)
    ----------------------------------------------------------------
*/
var form_checkInput = form_checkInput || {};

form_checkInput = {
    Validate: {
        isEmail: function isEmail(para) {
            return para == '' ? false : !!/^[^\s]+@[^\s]+\.[^\s]{2,3}$/.test(para);
        }, isDate: function isDate(para) {
            try {
                var D,
                    d = para.split(/\D+/);
                d[0] *= 1;
                d[1] -= 1;
                d[2] *= 1;
                D = new Date(d[0], d[1], d[2]);ｚ;
                return D.getFullYear() == d[0] && D.getMonth() == d[1] && D.getDate() == d[2] ? true : false;
            } catch (er) {
                return false;
            }
        }, chkAccount: function chkAccount(para) {
            return para == '' ? false : /^[0-9a-zA-Z_]{4,}$/.test(para);
        }, chkPassword: function chkPassword(para) {
            return para == '' ? false : /(?=^.{6,18}$)(?=.*[a-zA-Z])(?=.*[0-9])(?!.*\s).*$/.test(para);
        }, chkPhone: function chkPhone(para) {
            return para == '' ? false : /^[0-9]{8,}$/.test(para);
        }
    }, String: {
        trimSymbol: function trimSymbol(para, symbol) {
            return para == '' || symbol == '' ? '' : function () {
                para = para.substr(0, 1) == symbol ? para.substr(1, para.length - 1) : para;
                para = para.substr(para.length - 1, 1) == symbol ? para.substr(0, para.length - 1) : para;
                return para;
            }(para);
        }
    }, Web: {
        request: function request(para) {
            var q = location.search;
            q = q == "" ? "" : q.substr(1, q.length);
            para = para.toLowerCase();
            return q == "" || para == '' ? "" : function (q, para) {
                var arr = [];
                var result = q.split('&');
                for (i = 0; i < result.length; i++) {
                    var tmp = result[i].split('=');
                    if (tmp[0] == para) {
                        return tmp[1];
                    }
                }
                return "";
            }(q, para);
        }, browser: function () {
            var N = navigator.appName,
                ua = navigator.userAgent,
                tem;
            var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
            M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
            if (navigator.userAgent.toLowerCase().search(/(msie\s|trident.*rv:)([\w.]+)/) != -1) {
                return "msie";
            } else {
                return M[0].toLowerCase();
            }
        }(), browserVersion: function () {
            var N = navigator.appName,
                ua = navigator.userAgent,
                tem;
            var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
            M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
            return M[1];
        }()
    }
};

function checkInputV(target, value) {
    var type = void 0,
        isError = void 0,
        errorMsg = void 0;

    //先丟進去判斷是哪一種input
    if (target.type == 'email') {
        // 判斷input的值是否符合格式
        // 如果不符合，要拋出哪種訊息
        // 引入vuex的state，千萬不要從這邊改vuex裡面的state
        type = 'email';
        isError = !form_checkInput.Validate.isEmail(value);
        errorMsg = vuex_store.state.app.errorState.type;
    }
    if (target.type == 'password') {
        type = 'password';
        isError = !form_checkInput.Validate.chkPassword(value);
        errorMsg = vuex_store.state.app.errorState.less;
    }
    if (target.type == 'phone') {
        type = 'phone';
        isError = !form_checkInput.Validate.chkPhone(value);
        errorMsg = vuex_store.state.app.errorState.phone;
    }
    if (target.type == 'text') {
        type = 'text';
        isError = false;
        errorMsg = '';
    }

    return [type, isError, errorMsg];
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Signup.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Signup = ({
  data: function data() {
    return {
      inputHasError: false,
      errors: [],
      email: {
        value: '',
        errorMsg: ''
      },
      passWord: {
        value: '',
        errorMsg: ''
      }
    };
  },

  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(['errorState'])),
  methods: {
    // **
    // * Can Use vee-validate!
    // *
    clearEmail: function clearEmail(e) {
      this.email.errorMsg = '';
    },
    clearPassWord: function clearPassWord(e) {
      this.passWord.errorMsg = '';
    },
    check: function check(e) {
      // checkInput will return [type, isError, errorMsg]
      var errorStaus = checkInput(e.target, e.target.value),
          type = errorStaus[0],
          isError = errorStaus[1],
          errorMsg = errorStaus[2];

      // 把'是否有錯誤'當作開關
      this.inputHasError = isError;

      if (type == 'email') {
        this.email.errorMsg = isError ? errorMsg : '';
      }
      if (type == 'password') {
        this.passWord.errorMsg = isError ? errorMsg : '';
      }
    },
    checkForm: function checkForm(e) {
      this.errors = [];
      // **
      // * 連線錯誤？
      // * 資料錯誤？ 帳號重複？
      // * 註冊成功，直接登入
      // *

      // 如果任一input有錯誤
      if (this.inputHasError) {
        return;
      }
      if (!this.email.value) {
        // 計算是否有錯誤
        // errorState 存在 Vuex sotre.app
        this.errors.push(this.errorState.emailempty);

        this.email.errorMsg = this.errorState.emailempty;
      }
      if (!this.passWord.value) {
        this.errors.push(this.errorState.passwordempty);

        this.passWord.errorMsg = this.errorState.passwordempty;
      }
      if (!this.errors.length) {
        alert('註冊成功');
        // ** 
        // * 後端API串接
        // * 如果有其他錯誤訊息，可以由我這邊開一個位置，把store 裡的 state叫出來用
        // * 讓前端控制錯誤訊息
        // *
        // axios.get(apiUrl)
        // .then(res => res.json())
        // .then(res => {
        //   if (res.error) {
        //     this.errors.push(res.error);
        //   } else {
        //     alert('ok!');
        //   }
        // });
      } else {
        alert('註冊失敗');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-13df8a36","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Signup.vue
var Signup_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"login"},[_c('h1',[_vm._v("SignUp Page")]),_vm._v(" "),_c('form',{attrs:{"novalidate":"true"},on:{"submit":function($event){$event.preventDefault();return _vm.checkForm($event)}}},[_c('div',{staticClass:"input__wrap"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email.value),expression:"email.value"}],attrs:{"type":"email","placeholder":"信箱"},domProps:{"value":(_vm.email.value)},on:{"focus":function($event){_vm.clearEmail($event)},"blur":function($event){_vm.check($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.email, "value", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.email.errorMsg.length > 0),expression:"email.errorMsg.length > 0"}],staticClass:"input__status--error js__input__status--error"},[_vm._v(_vm._s(_vm.email.errorMsg))])]),_vm._v(" "),_c('div',{staticClass:"input__wrap"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.passWord.value),expression:"passWord.value"}],attrs:{"type":"password","placeholder":"密碼"},domProps:{"value":(_vm.passWord.value)},on:{"focus":function($event){_vm.clearPassWord($event)},"blur":function($event){_vm.check($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.passWord, "value", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.passWord.errorMsg.length > 0),expression:"passWord.errorMsg.length > 0"}],staticClass:"input__status--error js__input__status--error"},[_vm._v(_vm._s(_vm.passWord.errorMsg))])]),_vm._v(" "),_vm._m(0)])])}
var Signup_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form_buttonbar"},[_c('button',{staticClass:"primary",attrs:{"type":"submit"}},[_vm._v("Sign Up")])])}]
var Signup_esExports = { render: Signup_render, staticRenderFns: Signup_staticRenderFns }
/* harmony default export */ var components_Signup = (Signup_esExports);
// CONCATENATED MODULE: ./resources/assets/js/components/Signup.vue
var Signup_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Signup___vue_template_functional__ = false
/* styles */
var Signup___vue_styles__ = null
/* scopeId */
var Signup___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Signup___vue_module_identifier__ = null
var Signup_Component = Signup_normalizeComponent(
  Signup,
  components_Signup,
  Signup___vue_template_functional__,
  Signup___vue_styles__,
  Signup___vue_scopeId__,
  Signup___vue_module_identifier__
)

/* harmony default export */ var js_components_Signup = (Signup_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Header.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Header = ({
  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(['User']), {
    isLogin: function isLogin() {
      // 把return islogin 拆出去，方便call
      return this.User.isLogin;
    }
  }),
  methods: {
    logout: function logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
      //清空state裡面的值
      this.$store.commit({
        type: 'clearUserData'
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-73ff7005","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Header.vue
var Header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"header"},[(!_vm.isLogin)?_c('router-link',{attrs:{"to":"/login"}},[_vm._v("登入")]):_vm._e(),_vm._v(" "),(!_vm.isLogin)?_c('router-link',{attrs:{"to":"/signup"}},[_vm._v("註冊")]):_vm._e(),_vm._v(" "),(_vm.isLogin)?_c('a',{attrs:{"href":""},on:{"click":function($event){$event.preventDefault();return _vm.logout($event)}}},[_vm._v("Logout")]):_vm._e()],1)}
var Header_staticRenderFns = []
var Header_esExports = { render: Header_render, staticRenderFns: Header_staticRenderFns }
/* harmony default export */ var components_Header = (Header_esExports);
// CONCATENATED MODULE: ./resources/assets/js/components/Header.vue
var Header_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Header___vue_template_functional__ = false
/* styles */
var Header___vue_styles__ = null
/* scopeId */
var Header___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Header___vue_module_identifier__ = null
var Header_Component = Header_normalizeComponent(
  Header,
  components_Header,
  Header___vue_template_functional__,
  Header___vue_styles__,
  Header___vue_scopeId__,
  Header___vue_module_identifier__
)

/* harmony default export */ var js_components_Header = (Header_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Nav.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Nav = ({
  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(['User']), {
    isLogin: function isLogin() {
      return this.User.isLogin;
    },
    userName: function userName() {
      return this.User.name;
    }
  }),
  methods: {
    logout: function logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
      //清空state裡面的值
      this.$store.commit({
        type: 'clearUserData'
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-798023a7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Nav.vue
var Nav_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"id":"nav"}},[_c('router-link',{staticClass:"logo",attrs:{"to":"/home"}},[_c('svg',{attrs:{"version":"1.1","id":"Capa_1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","viewBox":"0 0 236.62 236.62","xml:space":"preserve"}},[_c('g',[_c('path',{attrs:{"d":"M197.023,225.545c-1.145-9.533-11.68-10.614-17.805-9.958c-6.521-24.554,16.225-61.151,17.563-69.82\n            c1.438-9.312-6.658-63.5-7.513-90.938C188.389,26.662,147.48-4.433,140.65,0.524c-6.768,7.484,9.748,17.585,1.054,26.245\n            c-8.398,8.367-10.588,13.99-16.824,23.46c-15.976,24.255,27.318,24.558,27.318,24.558s-33.882,25.112-41.421,37.768\n            c-6.943,11.656-9.854,24.696-18.232,35.688c-19.094,25.051-14.791,68.729-14.791,68.729s-36.17-11.839-16.264-53.133\n            C76.643,132.406,84.107,86.02,50.016,97.95c-13.189,4.616,2.949,14.325,5.734,17.435c9.318,10.4,1.441,27.896-4.174,38.012\n            c-15.037,27.091-20.496,55.475,11.154,72.978c14.063,7.776,33.055,9.7,52.17,9.982l48.64,0.14\n            C179.564,237.294,197.689,234.298,197.023,225.545z"}})])]),_vm._v(" "),_c('p',[_vm._v("System"),_c('br'),_c('span',[_vm._v("1.01v1")])])]),_vm._v(" "),(_vm.isLogin)?_c('ul',[_c('router-link',{attrs:{"to":"/home","tag":"li"}},[_vm._v("食材管理")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/home","tag":"li"}},[_vm._v("食譜管理")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/home","tag":"li"}},[_vm._v("餐點管理")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/home","tag":"li"}},[_vm._v("套餐管理")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/store","tag":"li"}},[_vm._v("店面管理")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/home","tag":"li"}},[_vm._v("結帳管理")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/home","tag":"li"}},[_vm._v("客戶資訊")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/home","tag":"li"}},[_vm._v("系統設定")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/home","tag":"li"}},[_vm._v("帳號與權限")]),_vm._v(" "),_c('li',{on:{"click":_vm.logout}},[_vm._v("Logout")])],1):_vm._e(),_vm._v(" "),_c('router-link',{staticClass:"info",attrs:{"to":"/userinfo"}},[_c('p',[_vm._v(_vm._s(_vm.userName)+" 您好"),_c('br'),_c('span',[_vm._v("12:23PM")])])])],1)}
var Nav_staticRenderFns = []
var Nav_esExports = { render: Nav_render, staticRenderFns: Nav_staticRenderFns }
/* harmony default export */ var components_Nav = (Nav_esExports);
// CONCATENATED MODULE: ./resources/assets/js/components/Nav.vue
function injectStyle (ssrContext) {
  __webpack_require__("me9L")
}
var Nav_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Nav___vue_template_functional__ = false
/* styles */
var Nav___vue_styles__ = injectStyle
/* scopeId */
var Nav___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Nav___vue_module_identifier__ = null
var Nav_Component = Nav_normalizeComponent(
  Nav,
  components_Nav,
  Nav___vue_template_functional__,
  Nav___vue_styles__,
  Nav___vue_scopeId__,
  Nav___vue_module_identifier__
)

/* harmony default export */ var js_components_Nav = (Nav_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Home.vue

//
//
//
//
//



/* harmony default export */ var Home = ({
  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(['User']), {
    userName: function userName() {
      return this.User.name;
    }
  })
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-93fc5d52","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"content"},[_c('h1',[_vm._v("Home "+_vm._s(_vm.userName))])])}
var Home_staticRenderFns = []
var Home_esExports = { render: Home_render, staticRenderFns: Home_staticRenderFns }
/* harmony default export */ var components_Home = (Home_esExports);
// CONCATENATED MODULE: ./resources/assets/js/components/Home.vue
var Home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Home___vue_template_functional__ = false
/* styles */
var Home___vue_styles__ = null
/* scopeId */
var Home___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Home___vue_module_identifier__ = null
var Home_Component = Home_normalizeComponent(
  Home,
  components_Home,
  Home___vue_template_functional__,
  Home___vue_styles__,
  Home___vue_scopeId__,
  Home___vue_module_identifier__
)

/* harmony default export */ var js_components_Home = (Home_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/UserInfo.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var UserInfo = ({
  data: function data() {
    return {
      inputHasError: false,
      email: {
        value: '',
        errorMsg: ''
      },
      name: {
        value: '',
        errorMsg: ''
      },
      phone: {
        value: '',
        errorMsg: ''
      },
      passWord: {
        value: '',
        errorMsg: ''
      }
    };
  },

  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(['User'])),
  created: function created() {
    this.email.value = this.User.email;
    this.name.value = this.User.name;
    this.phone.value = this.User.phone;
  },

  methods: {
    check: function check(e) {
      // checkInput will return [type, isError, errorMsg]
      var errorStaus = checkInput(e.target, e.target.value),
          type = errorStaus[0],
          isError = errorStaus[1],
          errorMsg = errorStaus[2];

      // 把'是否有錯誤'當作開關
      this.inputHasError = isError;

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
    editUserData: function editUserData(e) {
      var AllData = { email: this.email.value,
        name: this.name.value,
        phone: this.phone.value };
      // 如果任一input有錯誤
      if (this.inputHasError) {
        alert('資料有誤');
        return;
      } else {
        this.$store.commit({
          type: 'editUserData',
          value: AllData
        });
        localStorage.setItem('token', stringify_default()(AllData));
      }
      // ** 
      // * 後端API串接
      // *
      // axios.get(apiUrl)
      // .then(res => res.json())
      // .then(res => {
      //   if (res.error) {
      //     this.errors.push(res.error);
      //   } else {
      // this.$store.commit 全部的東西進去
      //     alert('ok!');
      //   }
      // });        
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4491c3e7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/UserInfo.vue
var UserInfo_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"content"},[_c('h1',[_vm._v("UserInfo")]),_vm._v(" "),_c('form',{attrs:{"novalidate":"true"},on:{"submit":function($event){$event.preventDefault();return _vm.editUserData($event)}}},[_c('div',{staticClass:"input__wrap"},[_c('label',[_vm._v("聯絡E-mail")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email.value),expression:"email.value"}],attrs:{"type":"email","placeholder":"聯絡E-mail"},domProps:{"value":(_vm.email.value)},on:{"keyup":function($event){_vm.check($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.email, "value", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.email.errorMsg.length > 0),expression:"email.errorMsg.length > 0"}],staticClass:"input__status--error js__input__status--error"},[_vm._v(_vm._s(_vm.name.errorMsg))])]),_vm._v(" "),_c('div',{staticClass:"input__wrap"},[_c('label',[_vm._v("名字")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name.value),expression:"name.value"}],attrs:{"type":"text","placeholder":"名字"},domProps:{"value":(_vm.name.value)},on:{"keyup":function($event){_vm.check($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.name, "value", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.name.errorMsg.length > 0),expression:"name.errorMsg.length > 0"}],staticClass:"input__status--error js__input__status--error"},[_vm._v(_vm._s(_vm.name.errorMsg))])]),_vm._v(" "),_c('div',{staticClass:"input__wrap"},[_c('label',[_vm._v("電話號碼")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.phone.value),expression:"phone.value"}],attrs:{"type":"phone","placeholder":"電話號碼"},domProps:{"value":(_vm.phone.value)},on:{"keyup":function($event){_vm.check($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.phone, "value", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.phone.errorMsg.length > 0),expression:"phone.errorMsg.length > 0"}],staticClass:"input__status--error js__input__status--error"},[_vm._v(_vm._s(_vm.phone.errorMsg))])]),_vm._v(" "),_vm._m(0)])])}
var UserInfo_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form_buttonbar"},[_c('button',{staticClass:"primary",attrs:{"type":"submit"}},[_vm._v("Change")])])}]
var UserInfo_esExports = { render: UserInfo_render, staticRenderFns: UserInfo_staticRenderFns }
/* harmony default export */ var components_UserInfo = (UserInfo_esExports);
// CONCATENATED MODULE: ./resources/assets/js/components/UserInfo.vue
var UserInfo_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var UserInfo___vue_template_functional__ = false
/* styles */
var UserInfo___vue_styles__ = null
/* scopeId */
var UserInfo___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var UserInfo___vue_module_identifier__ = null
var UserInfo_Component = UserInfo_normalizeComponent(
  UserInfo,
  components_UserInfo,
  UserInfo___vue_template_functional__,
  UserInfo___vue_styles__,
  UserInfo___vue_scopeId__,
  UserInfo___vue_module_identifier__
)

/* harmony default export */ var js_components_UserInfo = (UserInfo_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/search_password.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var search_password = ({
  data: function data() {
    return {
      inputHasError: false,
      email: {
        value: '',
        errorMsg: ''
      }
    };
  },

  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(['errorState'])),
  methods: {
    check: function check(e) {
      // checkInput will return [type, isError, errorMsg]
      var errorStaus = checkInput(e.target, e.target.value),
          type = errorStaus[0],
          isError = errorStaus[1],
          errorMsg = errorStaus[2];

      // 把'是否有錯誤'當作開關
      this.inputHasError = isError;

      if (type == 'email') {
        this.email.errorMsg = isError ? errorMsg : '';
      }
    },
    searchPassword: function searchPassword() {
      this.errors = [];

      // 如果任一input有錯誤
      if (this.inputHasError) {
        return;
      }
      if (!this.email.value) {
        this.errors.push(this.errorState.emailempty);

        this.email.errorMsg = this.errorState.emailempty;
      } else {
        // ** 
        // * 後端API串接
        // *
        alert('新密碼已經寄到您的信箱中了');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-53271e34","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/search_password.vue
var search_password_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"content"},[_c('h1',[_vm._v("忘記密碼")]),_vm._v(" "),_c('p',[_vm._v("密碼重設信件將寄至您認證的 e-mail 信箱。請點選信件中網址重新設定密碼。")]),_vm._v(" "),_c('form',{attrs:{"novalidate":"true"},on:{"submit":function($event){$event.preventDefault();return _vm.searchPassword($event)}}},[_c('div',{staticClass:"input__wrap"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email.value),expression:"email.value"}],attrs:{"type":"email","placeholder":"E-mail"},domProps:{"value":(_vm.email.value)},on:{"keyup":function($event){_vm.check($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.email, "value", $event.target.value)}}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.email.errorMsg.length > 0),expression:"email.errorMsg.length > 0"}],staticClass:"input__status--error js__input__status--error"},[_vm._v(_vm._s(_vm.email.errorMsg))])]),_vm._v(" "),_vm._m(0)])])}
var search_password_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form_buttonbar"},[_c('button',{staticClass:"primary",attrs:{"type":"submit"}},[_vm._v("重新設定密碼")])])}]
var search_password_esExports = { render: search_password_render, staticRenderFns: search_password_staticRenderFns }
/* harmony default export */ var components_search_password = (search_password_esExports);
// CONCATENATED MODULE: ./resources/assets/js/components/search_password.vue
var search_password_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var search_password___vue_template_functional__ = false
/* styles */
var search_password___vue_styles__ = null
/* scopeId */
var search_password___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var search_password___vue_module_identifier__ = null
var search_password_Component = search_password_normalizeComponent(
  search_password,
  components_search_password,
  search_password___vue_template_functional__,
  search_password___vue_styles__,
  search_password___vue_scopeId__,
  search_password___vue_module_identifier__
)

/* harmony default export */ var js_components_search_password = (search_password_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/store/Manage.vue

//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Manage = ({
  computed: extends_default()({}, Object(vuex_esm["b" /* mapGetters */])(['User']))
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ae3db618","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/store/Manage.vue
var Manage_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Manage_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"content"},[_c('div',{staticClass:"easyui-layout",staticStyle:{"width":"700px","height":"350px"}},[_c('div',{staticStyle:{"width":"30%","padding":"10px"},attrs:{"id":"p","data-options":"region:'west'","title":"West"}},[_c('p',[_vm._v("width: 30%")])]),_vm._v(" "),_c('div',{attrs:{"data-options":"region:'center'","title":"Center"}})])])}]
var Manage_esExports = { render: Manage_render, staticRenderFns: Manage_staticRenderFns }
/* harmony default export */ var store_Manage = (Manage_esExports);
// CONCATENATED MODULE: ./resources/assets/js/components/store/Manage.vue
var Manage_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Manage___vue_template_functional__ = false
/* styles */
var Manage___vue_styles__ = null
/* scopeId */
var Manage___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Manage___vue_module_identifier__ = null
var Manage_Component = Manage_normalizeComponent(
  Manage,
  store_Manage,
  Manage___vue_template_functional__,
  Manage___vue_styles__,
  Manage___vue_scopeId__,
  Manage___vue_module_identifier__
)

/* harmony default export */ var components_store_Manage = (Manage_Component.exports);

// CONCATENATED MODULE: ./resources/assets/js/routes.js



// Header 可能用不到










vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

var routes = [{
  path: '/login',
  components: {
    default: js_components_Login
  }
}, {
  path: '/signup',
  components: {
    default: js_components_Signup,
    header: js_components_Header
  }
}, {
  path: '/',
  components: {
    default: js_components_Home,
    header: js_components_Nav
  }
}, {
  path: '/userinfo',
  components: {
    default: js_components_UserInfo,
    header: js_components_Nav
  }
}, {
  path: '/search_password',
  components: {
    default: js_components_search_password,
    header: js_components_Header
  }
}, {
  path: '/store',
  components: {
    default: components_store_Manage,
    header: js_components_Nav
  }
}, {
  path: '*',
  redirect: '/'
}];
// EXTERNAL MODULE: ./node_modules/vx-easyui/dist/themes/default/easyui.css
var easyui = __webpack_require__("ZphK");
var easyui_default = /*#__PURE__*/__webpack_require__.n(easyui);

// EXTERNAL MODULE: ./node_modules/vx-easyui/dist/themes/icon.css
var icon = __webpack_require__("37t0");
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/vx-easyui/dist/themes/vue.css
var vue = __webpack_require__("b79p");
var vue_default = /*#__PURE__*/__webpack_require__.n(vue);

// EXTERNAL MODULE: ./node_modules/vx-easyui/dist/vx-easyui-min.js
var vx_easyui_min = __webpack_require__("q1nB");
var vx_easyui_min_default = /*#__PURE__*/__webpack_require__.n(vx_easyui_min);

// EXTERNAL MODULE: ./resources/assets/sass/app.scss
var sass_app = __webpack_require__("xZZD");
var app_default = /*#__PURE__*/__webpack_require__.n(sass_app);

// CONCATENATED MODULE: ./resources/assets/js/app.js
// 載入外掛套件
__webpack_require__("iiYX");





// import { sync } from 'vuex-router-sync';



// sync(store, router);

// 載入 EasyUI





// 載入 App scss


var router = new vue_router_esm["a" /* default */]({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

router.beforeEach(function (to, form, next) {
    var loginUserData = JSON.parse(localStorage.getItem('token'));

    // if (!isLogin) {
    // }
    if (loginUserData) {
        // 如在登入狀態下重整，應該把存在localStorage的資料再送給state一次
        // 如串後端，API應該再傳給state
        vuex_store.commit({
            type: 'setUserData',
            userData: loginUserData
        });
        next();
    } else {
        if (to.path !== '/login' && to.path !== '/signup' && to.path !== '/search_password') {
            next('/login');
        } else {
            next();
        }
    }
});

vue_esm["a" /* default */].use(vx_easyui_min_default.a);

new vue_esm["a" /* default */]({
    el: '#page-wrapper',
    store: vuex_store,
    router: router,
    render: function render(h) {
        return h(assets_js_app);
    }
});

/***/ }),

/***/ "xZZD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["sV/x"]);
//# sourceMappingURL=app.js.map