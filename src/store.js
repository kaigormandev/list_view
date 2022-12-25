import { legacy_createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";

import reducer from './reducer';

export const store = legacy_createStore(reducer, applyMiddleware(thunkMiddleware));