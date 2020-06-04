import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import reducer from './store/reducers';
import App from './components/containers/App';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #efded6;
        color: #333;
        font-family: 'Tohoma', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(),
));

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </>,
    document.getElementById('root'),
);
