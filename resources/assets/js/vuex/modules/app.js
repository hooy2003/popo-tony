const state = {
    User: {
        account: "",
        email: "",
        name: "",
        phone: "",        
        isLogin: false
    },
    errorState: {
        "more"  : "使用者帳號須在5-30個字元",
        "emailempty" : "信箱不得為空",
        "email" : "信箱已經被註冊過了",
        "phone" : "手機號碼已經被註冊過了",
        "tel"   : "必須為數字",
        "passwordempty" : "密碼不得為空",
        "less"  : "密碼須為英文數字混合且6位數以上",
        "same"  : "兩次輸入的密碼不一樣",        
        "type"  : "格式不正確",
        "agree" : "請勾選同意",
        "what"  : "無效的資料",
        "code"  : "驗證碼錯誤",
        "strange" : "不得包括特殊符號"
    },
    isLoading: false,
};


const getters = {
    User: state => state.User,    
    errorState: state => state.errorState,
    isLoading: state => state.isLoading
};

const mutations = {
    setUserData(state, { userData }) {        
        state.User.account  = userData.email;
        state.User.name     = userData.name;
        state.User.phone    = userData.phone;
        state.User.isLogin  = true;
    },
    clearUserData(state) {
        state.User.account  = "";
        state.User.name     = "";
        state.User.phone    = "";
        state.User.isLogin  = false;
    },
    editUserData(state, {value} ) {
        state.User.email = value.email;
        state.User.name  = value.name;
        state.User.phone = value.phone;
    },
    isLoading (state) {
        state.isLoading = !state.isLoading
    }
};

const actions = {
};

export default {
    state,
    getters,
    mutations
}
  
  