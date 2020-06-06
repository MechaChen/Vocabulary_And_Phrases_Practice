import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer';
import Module from './Module';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(),
));

const AllSets = (props: any) => {
    return (
        <Provider store={store}>
            <Module {...props} />
        </Provider>
    );
}

export default AllSets;
