import moment from 'moment';
import { simpleSet, GET_SETS, CREATE_SET } from './actions';

const reducer = (state: simpleSet[] = [], action: any) => {
    switch (action.type) {
        case GET_SETS:
            return action.allSets;
        case CREATE_SET:
            return state;
        default:
            return state;
    }
};

export default reducer;
