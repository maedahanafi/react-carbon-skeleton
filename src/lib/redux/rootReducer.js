/* Instruments */
import { counterSlice } from './slices';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  counter: counterSlice.reducer,
});
