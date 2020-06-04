import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PracCard from './PracCard';
import WordsAndPhrases from './WordsAndPhrases';
import Collections from './Collections';

const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/word-card" component={PracCard} />
                <Route path="/words" component={WordsAndPhrases} />
                <Route path="/" component={Collections} />
            </Switch>
        </BrowserRouter>
    </>
);

export default App;
