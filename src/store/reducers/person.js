import { FETCH_PERSON_DATA } from '../actions/person';

const initState = {
    info: {}
}
export default (state = initState ,action) => {
    switch(action?.type){
        case FETCH_PERSON_DATA:
             return action.payload;
        default:
            return state;
    }
}