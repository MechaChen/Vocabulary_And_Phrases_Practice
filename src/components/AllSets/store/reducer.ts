import moment from 'moment';

const initState = [
    {
        id: '1',
        title: '首爾大學第 12 課',
        date: moment().locale('ko').format('MMMM Do'),
        totalWords: 5,
        totalPhrases: 1,
    },
    {
        title: '首爾大學第 13 課',
        date: moment().add(1, 'month').locale('ko').format('MMMM Do'),
        totalWords: 3,
        totalPhrases: 2,
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
