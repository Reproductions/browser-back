import React, { Component, Fragment } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import NavigationPrompt from 'react-router-navigation-prompt';
import createBrowserHistory from 'history/createBrowserHistory';

import { Foo, Bar } from './Components'
import './App.css';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Fragment>
        <Switch>
          <Route
            path="/bar"
            exact
            component={Bar}
          />
          <Route
            path="/*"
            component={Foo}
          />
        </Switch>
        <NavigationPrompt
          renderIfNotActive={false}
          when={true}
        >
          {({ onCancel, onConfirm }) => {
            return (
              <div>
                <span>dialog</span>
                <button onClick={onCancel}>cancel</button>
                <button onClick={onConfirm}>OK</button>
              </div>
            );
          }}
        </NavigationPrompt>
        </Fragment>
      </Router>
    );
  }
}

export default App;
