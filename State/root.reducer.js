import {combineReducers} from 'redux';
import {authReducer} from '../src/+state/auth.reducer';
//form reducer
let {reducer: formReducer} = require('redux-form');

export default combineReducers({
  auth: authReducer,
});
