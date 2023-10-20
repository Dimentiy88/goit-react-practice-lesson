import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import { postDetailsReducer } from './postDeteilReducer';

const rootReducer = combineReducers({
  postDetails: postDetailsReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
