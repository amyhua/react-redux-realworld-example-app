'use strict';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';
import agent from './agent';
import history from  'history';
import store from './store';

import App from './components/App';
import Article from './components/Article';
import Editor from './components/Editor';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileFavorites from './components/ProfileFavorites';
import Register from './components/Register';
import Settings from './components/Settings';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Redirect from="signup" to="/login" />
        <Redirect from="log-in" to="/login" />
        <Route path="register" component={Register} />
        <Route path="editor" component={Editor} />
        <Route path="editor/:slug" component={Editor} />
        <Route path="article/:id" component={Article} />
        <Route path="settings" component={Settings} />
        <Route path="@:username" component={Profile} />
        <Route path="@:username/favorites" component={ProfileFavorites} />
        <Route path="*" component={() => <h1>Not Found!</h1>} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
