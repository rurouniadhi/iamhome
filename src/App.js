import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { GoogleSignin } from 'react-native-google-signin';

import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    GoogleSignin.configure({
      webClientId:
        '1070010664755-74hurvecb3g5jqtn0g7q3erpptsk6i70.apps.googleusercontent.com'
    });
    GoogleSignin.hasPlayServices({ autoResolve: true });
    GoogleSignin.currentUserAsync().then((user) => {
      console.log('USER', user);
      this.setState({ user });
    }).done();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
