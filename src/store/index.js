import rootReducer from './reducer/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const initStore = (initialState, options) => {
    let composeEnhancers = compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(thunk)
    ));

    return store;
};


export default initStore;