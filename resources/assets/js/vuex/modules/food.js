const state = {
    foodAClass: [
        {
            parent:'食材',
            level: 'A',
            name: [
                '牛肉類',
                '豬肉類',
                '羊肉類',
                '雞肉類',
                '蔬菜類',
                '飲料類'
            ]
        }, 
    ],
    foodBClass: [
        {
            parent:'牛肉類',
            level: 'B',
            name: [
                '牛肉分布',
                '牛內臟類',
                '再製品',
            ]
        },
        {
            parent:'豬肉類',
            level: 'B',
            name: [
                '豬肉分布',
                '豬內臟類',
                '再製品'
            ]
        },
        {
            parent:'羊肉類',
            level: 'B',
            name: [
            ]
        },
        {
            parent:'雞肉類',
            level: 'B',
            name: [
            ]
        },
        {
            parent:'蔬菜類',
            level: 'B',
            name: [
            ]
        },
        {
            parent:'飲料類',
            level: 'B',
            name: [
            ]
        },
    ],
    foodBItem: [
        {
            parent:'牛肉類',
            level: 'B',
            name: [
                '超級牛肉',
                '次等牛肉',
                '牛肉丸'
            ]
        },
        {
            parent:'豬肉類',
            level: 'B',
            name: [
                '藍帶豬排起司',
                '藍帶培根',
                '肉圓'
            ]
        },
        {
            parent:'羊肉類',
            level: 'B',
            name: [
            ]
        },
        {
            parent:'雞肉類',
            level: 'B',
            name: [
            ]
        },
        {
            parent:'蔬菜類',
            level: 'B',
            name: [
            ]
        },
        {
            parent:'飲料類',
            level: 'B',
            name: [
            ]
        },
    ],
    foodCItem: [
        {
            parent:'牛肉類',
            level: 'C',
            class: [
                {
                    parent:'牛肉分布',
                    name: [
                        '牛肩膀',
                        '牛肚子',
                        '牛舌頭',
                        '牛肩膀',
                        '牛肚子',
                        '牛舌頭',
                        '牛肩膀',
                        '牛肚子',
                        '牛舌頭',
                        '牛肩膀',
                        '牛肚子',
                        '牛舌頭',
                        '牛肩膀',
                        '牛肚子',
                        '牛舌頭',
                        '牛肩膀',
                        '牛肚子',
                        '牛舌頭'
                    ]
                },
                {
                    parent:'牛內臟類',
                    name: [
                        '牛肝臟',
                        '牛油脂',
                        '牛心臟'
                    ]
                },
                {
                    parent:'再製品',
                    name: [
                        '再製品A',
                        '再製品B',
                        '再製品C'
                    ]
                },
            ]
        },
        {
            parent:'豬肉類',
            level: 'C',
            class: [
                {
                    parent:'豬肉分布',
                    name: [
                        '豬肩膀',
                        '豬肚子',
                        '豬舌頭'
                    ]
                },
                {
                    parent:'豬內臟類',
                    name: [
                        '豬肝臟',
                        '豬油脂',
                        '豬心臟'
                    ]
                },
                {
                    parent:'再製品',
                    name: [
                        '再製品D',
                        '再製品E',
                        '再製品F'
                    ]
                },
            ]
        },
        {
            parent:'羊肉類',
            level: 'C',
            class: [
            ]
        },
        {
            parent:'雞肉類',
            level: 'C',
            class: [
            ]
        },
        {
            parent:'蔬菜類',
            level: 'C',
            class: [
            ]
        },
        {
            parent:'飲料類',
            level: 'C',
            class: [
            ]
        }
    ],
    imgSrc: ''
};


const getters = {
    foodAClass: state => state.foodAClass,
    foodBClass: state => state.foodBClass,
    foodBItem: state => state.foodBItem,
    foodCItem: state => state.foodCItem,
    imgSrc: state => state.imgSrc
};

const mutations = {

    // 好像有問題
    changeCardName (state, { newArray } ) {
        state.foodAClass = newArray;
    },
    AClassAddNewClass(state, { newArray } ) {
        state.foodAClass = newArray;
    },
    BClassAddNewClass (state, { newArray } ) {
        state.foodBClass = newArray;
    },
    CItemAddNewItem (state, { newArray } ) {
        state.foodCItem = newArray;
    },
    BItemAddNewItem (state, { newArray } ) {
        state.foodBItem = newArray;
    },
    BClassDeleteItem (state, { newArray }) {
        state.foodBClass = newArray;
    },
    BItemDeleteItem (state, { newArray }) {
        state.foodBItem = newArray;
    },
    CItemDeleteItem (state, { newArray }) {
        state.foodCItem = newArray;
    }
};

const actions = {
};

export default {
    state,
    getters,
    mutations
}
  
  