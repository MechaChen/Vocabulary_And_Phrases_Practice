import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 30px;
`;

const App = () => <Heading>Hello World</Heading>;

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
