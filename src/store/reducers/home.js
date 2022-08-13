import { FETCH_HOME_DATA } from '../actions/home';

const initState = {
    articles: []
}
export default (state = initState ,action) => {
    switch(action?.type){
        case FETCH_HOME_DATA:
             return action.payload;
        default:
            return state;
    }
}