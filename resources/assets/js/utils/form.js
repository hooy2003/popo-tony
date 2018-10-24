import store from '../vuex/store';

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
let checkInput = checkInput || {};

checkInput = {
    Validate: {
        isEmail: function (para) {
            return para == '' ? false : !(!/^[^\s]+@[^\s]+\.[^\s]{2,3}$/.test(para));
        }, isDate: function (para) {
            try {
                var D, d = para.split(/\D+/);
                d[0] *= 1;
                d[1] -= 1;
                d[2] *= 1;
                D = new Date(d[0], d[1], d[2]);ｚ
                return (D.getFullYear() == d[0] && D.getMonth() == d[1] && D.getDate() == d[2]) ? true : false;
            }
            catch (er) {
                return false;
            }
        }, chkAccount: function (para) {
            return para == '' ? false : /^[0-9a-zA-Z_]{4,}$/.test(para);
        }, chkPassword: function (para) {
            return para == '' ? false : /(?=^.{6,18}$)(?=.*[a-zA-Z])(?=.*[0-9])(?!.*\s).*$/.test(para);
        }, chkPhone: function (para) {
            return para == '' ? false : /^[0-9]{8,}$/.test(para);
        }
    }, String: {
        trimSymbol: function (para, symbol) {
            return (para == '' || symbol == '') ? '' : (function () {
                para = para.substr(0, 1) == symbol ? para.substr(1, para.length - 1) : para;
                para = para.substr(para.length - 1, 1) == symbol ? para.substr(0, para.length - 1) : para;
                return para;
            })(para);
        }
    }, Web: {
        request: function (para) {
            var q = location.search;
            q = q == "" ? "" : q.substr(1, q.length);
            para = para.toLowerCase();
            return (q == "" || para == '') ? "" : (function (q, para) {
                var arr = [];
                var result = q.split('&');
                for (i = 0; i < result.length; i++) {
                    var tmp = result[i].split('=');
                    if (tmp[0] == para) { return tmp[1]; }
                }
                return "";
            })(q, para);
        }, browser: (function () {
            var N = navigator.appName, ua = navigator.userAgent, tem;
            var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
            M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
            if (navigator.userAgent.toLowerCase().search(/(msie\s|trident.*rv:)([\w.]+)/) != -1) {
                return "msie";
            } else {
                return M[0].toLowerCase();
            }
        })(), browserVersion: (function () {
            var N = navigator.appName, ua = navigator.userAgent, tem;
            var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
            M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
            return M[1];
        })()
    }
}


export function checkInputV (target, value) {
    let type,
       isError,
        errorMsg;

    //先丟進去判斷是哪一種input
    if (target.type == 'email') {
        // 判斷input的值是否符合格式
        // 如果不符合，要拋出哪種訊息
        // 引入vuex的state，千萬不要從這邊改vuex裡面的state
        type     = 'email';
        isError  = !checkInput.Validate.isEmail(value);
        errorMsg = store.state.app.errorState.type;        
    }
    if (target.type == 'password') {
        type     = 'password';
        isError  = !checkInput.Validate.chkPassword(value);
        errorMsg = store.state.app.errorState.less;
    }
    if (target.type == 'phone') {
        type     = 'phone';
        isError  = !checkInput.Validate.chkPhone(value);
        errorMsg = store.state.app.errorState.phone;
    }
    if (target.type == 'text') {
        type     = 'text';
        isError  = false;
        errorMsg = '';
    }

    return [type, isError, errorMsg];
}