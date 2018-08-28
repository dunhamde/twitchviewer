import { combineReducers } from 'redux';
import StreamsReducer from './reducer_streams';

const rootReducer = combineReducers({
  streams: StreamsReducer,
});

export default rootReducer;