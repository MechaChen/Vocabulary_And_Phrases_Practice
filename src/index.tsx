import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';

import NotoSansTC from './assets/fonts/NotoSansTC-Regular.otf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: NotoSansTC;
        src: url(${NotoSansTC});
        font-style: normal;
        font-weight: 400;
        font-display: fallback;
    }
    
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

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root'),
);
