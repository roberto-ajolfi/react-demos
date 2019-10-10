import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import rootReducer  from "./Reducers";


export const store = createStore(rootReducer);