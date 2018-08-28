import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import NavHeader from './components/nav_header';
import Popular from './components/popular';
import Games from './components/games';
import Settings from './components/settings';
import MainStream from './components/main_stream';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
        <div>
            <NavHeader />
            <div className="maincontent">
            <Switch>
                <Route path="/popular" component={Popular} />
                <Route path="/games" component={Games} />
                <Route path="/settings" component={Settings} />
            </Switch>
            </div>
            {/* <MainStream /> */}
        </div>
        </BrowserRouter>
    </Provider>
, document.querySelector('.container'));