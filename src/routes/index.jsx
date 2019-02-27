import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../components/pages/Home';
import NoMatch from '../components/pages/NoMatch';


const history = createBrowserHistory();
const Routes = () => (
    <div>
        <BrowserRouter hisotry={history}>
            <Switch>
                <Route path="/" component={Home} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default Routes

  