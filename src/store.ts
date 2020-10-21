import { createStore, combineReducers } from 'redux';
import countModule from './countModule';

const store = createStore(combineReducers({
  countModule
}));

export default store;
