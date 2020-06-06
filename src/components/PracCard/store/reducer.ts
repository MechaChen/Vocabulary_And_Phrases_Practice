import { ADD_EXAMPLE } from './actions';

export interface I_Card {
    name: string;
    practice: string[];
}

const initState: I_Card = {
    name: '기숙사',
    practice: [
        '기숙사11111111111111',
        '기숙사22222222222222',
        '기숙사33333333333333',
    ],
};

const reducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case ADD_EXAMPLE:
            return { ...state, practice: [ ...state.practice, action.example ]};
        default:
            return state;
    }
}

export default reducer;
