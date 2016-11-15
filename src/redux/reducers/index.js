// Just getting this Redux thing started
import { combineReducers } from 'redux';
import GreetingReducer from './reducer_greeting';

const rootReducer = combineReducers({
  greeting: GreetingReducer
});

export default rootReducer;
