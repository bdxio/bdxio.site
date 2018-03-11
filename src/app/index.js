import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Home from './pages/Home.page';
import About from './pages/About.page';

const store = createStore(reducers);
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);
