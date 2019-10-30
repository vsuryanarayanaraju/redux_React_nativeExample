import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root.reducer';
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

const initialState = {};
const middleware = [thunk];

//const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    offline(offlineConfig),
    //devTools
  ),
);

export default store;
