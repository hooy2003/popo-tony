const state = {
    setAClass: [
        {
            parent:'套餐',
            level: 'A',
            name: [
                '沙拉套餐',
                '串炸套餐',
                '海鮮套餐',
                '牛排套餐'
            ]
        }, 
    ],
    setBClass: [
        {
            parent:'沙拉套餐',
            level: 'B',
            name: [
                '沙拉A套餐',
                '沙拉B套餐'
            ]
        },
        {
            parent:'串炸套餐',
            level: 'B',
            name: [
                '肉串炸',
                '蔬菜串炸',
                '天婦羅串炸'
            ]
        }    
    ],
    setBItem: [
        {
            parent:'沙拉套餐',
            level: 'B',
            name: [
                '千島沙拉',
                '凱薩沙拉',
                '日式沙拉'
            ]
        },
        {
            parent:'串炸套餐',
            level: 'B',
            name: [
                '起司球',
                '泡菜起司球',
                '寧波年糕'
            ]
        },
    ],
    setCItem: [
        {
            parent:'沙拉套餐',
            level: 'C',
            class: [
                {
                    parent:'沙拉A套餐',
                    name: [
                        '沙拉A',
                        '沙拉B',
                        '沙拉C'
                    ]
                },
                {
                    parent:'沙拉B套餐',
                    name: [
                        '沙拉D',
                        '沙拉E',
                        '沙拉F'
                    ]
                },
            ]
        },
        {
            parent:'串炸套餐',
            level: 'C',
            class: [
                {
                    parent:'肉串炸',
                    name: [
                        '豬肉',
                        '牛肉',
                    ]
                },
                {
                    parent:'蔬菜串炸',
                    name: [
                        '花椰菜',
                        '高麗菜',
                    ]
                },
                {
                    parent:'天婦羅串炸',
                    name: [
                        '蝦',
                        '花枝',
                        '蛋'
                    ]
                },
            ]
        }
    ],
};


const getters = {
    setAClass: state => state.setAClass,
    setBClass: state => state.setBClass,
    setBItem: state => state.setBItem,
    setCItem: state => state.setCItem
};

const mutations = {

    // 好像有問題
    changeCardName (state, { newArray } ) {
        state.setItem = newArray;
    },
    BClassAddNewClass (state, { newArray } ) {
        state.setBClass = newArray;
    },
    CItemAddNewItem (state, { newArray } ) {
        state.setCItem = newArray;
    },
    BItemAddNewItem (state, { newArray } ) {
        state.setBItem = newArray;
    },
    BClassDeleteItem (state, { newArray }) {
        state.setBClass = newArray;
    },
    BItemDeleteItem (state, { newArray }) {
        state.setBItem = newArray;
    },
    CItemDeleteItem (state, { newArray }) {
        state.setCItem = newArray;
    }
};

const actions = {
};

export default {
    state,
    getters,
    mutations
}
  
  