import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from './Routes';
import {CookiesProvider} from 'react-cookie';

const routes = Routes.map((route) => {
    let Component = route.component;
    return <Route key={route.path}  path={route.path} exact={route.exact || false} render={() => {
        return <Component access={route.access} {...route.props}/>
    }} />
});

ReactDOM.render(
    <Router>
        <CookiesProvider>
            <Switch>
                {routes}
            </Switch>
        </CookiesProvider>
    </Router>,
    document.body
);