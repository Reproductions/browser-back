import React, { Component, Fragment } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import NavigationPrompt from 'react-router-navigation-prompt';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import store from './store'

import Foo ,{ Bar } from './Components'

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
