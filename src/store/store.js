import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as favReducer} from './favorites/favorities.slice';

const reducers = combineReducers({
  favorites: favReducer,
});

export const store = configureStore({
  reducer: reducers,
  // devTools
});
