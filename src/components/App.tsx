import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PracCard from './PracCard';
import CardSet from './CardSet';
import AllSets from './AllSets';

const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/word-card" render={(props: any) => <PracCard {...props} />} />
                <Route path="/words" render={(props: any) => <CardSet {...props} />} />
                <Route path="/" render={(props: any) => <AllSets {...props} />} />
            </Switch>
        </BrowserRouter>
    </>
);

export default App;
