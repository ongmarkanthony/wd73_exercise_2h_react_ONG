import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import jokeReducer from './components/jokeReducer';

const store = createStore(jokeReducer, applyMiddleware(thunk));

export default store;