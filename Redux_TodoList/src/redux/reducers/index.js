import todoReducers from './todoreducers';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  todoReducers,
});
export default (state, action) =>
  rootReducer(action.type === 'RESET_STORE' ? undefined : state, action);
