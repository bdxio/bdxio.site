import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import Home from './pages/Home.page';
import Team from './pages/Team.page';
import News from './pages/News.page';
import Speakers from './pages/Speakers.page';
import Partnerships from './pages/Partnerships.page';
import Faq from './pages/Faq.page';
import Contact from './pages/Contact.page';

const store = createStore(reducers);
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/team" component={Team} />
                <Route path="/news" component={News} />
                <Route path="/speakers" component={Speakers} />
                <Route path="/partnerships" component={Partnerships} />
                <Route path="/faq" component={Faq} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);
