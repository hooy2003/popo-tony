let setAClass = [
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
];
let setBClass = [
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
];
let setBItem = [
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
];
let setCItem = [
    {
        parent:'沙拉A套餐',
        level: 'C',
        name: [
            '沙拉A',
            '沙拉B',
            '沙拉C'
        ]
    },
    {
        parent:'沙拉B套餐',
        level: 'C',
        name: [
            '沙拉D',
            '沙拉E',
            '沙拉F'
        ]
    },
    {
        parent:'肉串炸',
        level: 'C',
        name: [
            '豬肉',
            '牛肉',
        ]
    },
    {
        parent:'蔬菜串炸',
        level: 'C',
        name: [
            '花椰菜',
            '高麗菜',
        ]
    },
    {
        parent:'天婦羅串炸',
        level: 'C',
        name: [
            '蝦',
            '花枝',
            '蛋'
        ]
    }
];

let apisetItem = [
    {
        types:'套餐',
        level: 'A',
        name: [
            '沙拉套餐',
            '串炸套餐',
            '海鮮套餐',
            '牛排套餐'
        ]
    },
    {
        types:'沙拉套餐',
        level: 'B',
        name: [
            '千島沙拉',
            '凱薩沙拉',
            '日式沙拉'
        ]
    },
    {
        parent:'沙拉套餐',
        types:'沙拉A套餐',
        level: 'C',
        name: [
            '沙拉A',
            '沙拉B',
            '沙拉C'
        ]
    },
    {
        parent:'沙拉套餐',
        types:'沙拉B套餐',
        level: 'C',
        name: [
            '沙拉D',
            '沙拉E',
            '沙拉F'
        ]
    },
    {
        types:'串炸套餐',
        level: 'B',
        name: [
            '起司球',
            '泡菜起司球',
            '寧波年糕'
        ]
    },
    {
        parent:'串炸套餐',
        types:'肉串炸',
        level: 'C',
        name: [
            '豬肉',
            '牛肉',
        ]
    },
    {
        parent:'串炸套餐',
        types:'蔬菜串炸',
        level: 'C',
        name: [
            '花椰菜',
            '高麗菜',
        ]
    },
    {
        parent:'串炸套餐',
        types:'天婦羅串炸',
        level: 'C',
        name: [
            '蝦',
            '花枝',
            '蛋'
        ]
    }

]
