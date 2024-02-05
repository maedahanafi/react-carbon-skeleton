/* Core */
import { configureStore } from '@reduxjs/toolkit';
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux';

/* Instruments */
import { reducer } from './rootReducer';
import { middleware } from './middleware';

export const reduxStore = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});
export const useDispatch = () => useReduxDispatch();
export const useSelector = useReduxSelector;
