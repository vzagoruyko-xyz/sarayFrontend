import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import { store } from './redux/configureStore';

import Homepage from './components/Homepage';
import InProgress from './containers/InProgress';

import './style/reset.css';
import './style/style.css';

const App = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route component={InProgress} />
            </Switch>
        </HashRouter>
    </Provider>
);

render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));