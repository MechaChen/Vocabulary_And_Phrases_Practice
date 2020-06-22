import { GET_SET } from './actions';

const reducer = (state: any = {}, action: any) => {
    switch (action.type) {
        case GET_SET:
            return action.set_card;
        default:
            return state;
    }
};

export default reducer;
