const initState = [
    {
        collection: '首爾大學第 12 課',
        words: [
            {
                word: '기숙사',
                practice: [
                    '기숙사11111111111111',
                    '기숙사22222222222222',
                    '기숙사33333333333333',
                ],
            },
            {
                word: '빌라',
                practice: [
                    '빌라11111111111111',
                    '빌라22222222222222',
                    '빌라33333333333333',
                ],
            },
            {
                word: '원룸',
                practice: [
                    '원룸11111111111111',
                    '원룸22222222222222',
                    '원룸33333333333333',
                ],
            },
            {
                word: '주택',
                practice: [
                    '주택11111111111111',
                    '주택22222222222222',
                    '주택33333333333333',
                ],
            },
            {
                word: '오피스탤',
                practice: [
                    '오피스탤11111111111111',
                    '오피스탤22222222222222',
                    '오피스탤33333333333333',
                ],
            },
        ],
    },
    {
        collection: '首爾大學第 13 課',
        words: [],
    },
];

const reducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case '':
            return state;
        default:
            return state;
    }
};

export default reducer;
