import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMidleware from 'redux-thunk';

import reducers from './reducers';

import Home from './pages/Home.page';
import Team from './pages/Team.page';
import News from './pages/News.page';
import Speakers from './pages/Speakers.page';
import Talks from './pages/Talks.page';
import Partnerships from './pages/Partnerships.page';
import Faq from './pages/Faq.page';
import Contact from './pages/Contact.page';
import TicketSwitch from './pages/TicketSwitch.page.js';

import { default as Speakers2017 } from './pages/2017/Speakers.page';
import CGV from './pages/legal/CGV';
import CodeConduite from './pages/legal/CodeConduite';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMidleware)
);
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Redirect exact from='/' to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/team" component={Team} />
                <Route path="/news" component={News} />
                <Route path="/speakers" component={Speakers} />
                <Route path="/talks" component={Talks} />
                <Route path="/partnerships" component={Partnerships} />
                <Route path="/faq" component={Faq} />
                <Route path="/contact" component={Contact} />
                <Route path="/2017/speakers" component={Speakers2017} />
                <Route path="/legal/cgv" component={CGV} />
                <Route path="/legal/code_de_conduite" component={CodeConduite} />
                {/* <Route path="/tickets/switch" component={TicketSwitch} /> */}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app')
);
