import moment from 'moment';

const initState = {
    title: '首爾大學第 12 課',
    date: moment().locale('ko').format('MMMM Do'),
    words: [
        {
            name: '기숙사',
            practice: [
                '기숙사11111111111111',
                '기숙사22222222222222',
                '기숙사33333333333333',
            ],
        },
        {
            name: '빌라',
            practice: [
                '빌라11111111111111',
                '빌라22222222222222',
                '빌라33333333333333',
            ],
        },
        {
            name: '원룸',
            practice: [
                '원룸11111111111111',
                '원룸22222222222222',
                '원룸33333333333333',
            ],
        },
        {
            name: '주택',
            practice: [
                '주택11111111111111',
                '주택22222222222222',
                '주택33333333333333',
            ],
        },
        {
            name: '오피스탤',
            practice: [
                '오피스탤11111111111111',
                '오피스탤22222222222222',
                '오피스탤33333333333333',
            ],
        },
    ],
    phrases: [
        {
            id: '2',
            name: 'A/V(으)ㄹ 모르겠어요',
            practice: [
                'A/V(으)ㄹ 모르겠어요 111111',
                'A/V(으)ㄹ 모르겠어요 222222',
                'A/V(으)ㄹ 모르겠어요 333333',
            ],
        },
    ],
};

const reducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case '':
            return state;
        default:
            return state;
    }
}

export default reducer;
