import { GET_CARD, ADD_EXAMPLE, DELETE_EXAMPLE } from './actions';

export interface I_Card {
    name: string;
    practice: string[];
}

const reducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case GET_CARD:
            return action.card;
        case ADD_EXAMPLE:
            return { ...state, practice: [...state.practice, action.example] };
        case DELETE_EXAMPLE:
            const newState: any = { ...state };
            newState.practice.splice(action.index, 1);

            return { ...state, practice: newState.practice };
        default:
            return state;
    }
};

export default reducer;
