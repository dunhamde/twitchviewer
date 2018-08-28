import _ from 'lodash';
import { FETCH_FEATURED } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_FEATURED:
        console.log(action.payload.data.featured);
        return action.payload.data.featured;
    default:
        return state;
    }
}