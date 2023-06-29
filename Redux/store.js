import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import rootreducer from './rootreducer';
// Passing counterReducer to createStore
 
const store = createStore(rootreducer, applyMiddleware(thunk));

export default store; 