import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { ReduxThunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { GoogleSignin } from 'react-native-google-signin';
import { reducers } from './reducers';
import { Router } from './Router';

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
  loginUser() {
    GoogleSignin.signIn()
    .then((user) => {
      if (user.email === 'rurouniadhi@gmail.com') {
        const User = GoogleSignin.currentUser();
        console.log(user);
        this.setState({ user });
        console.log(`welcome, ${User.name}`);
      } else {
        console.log('you are not allow');
        GoogleSignin.signOut();
      }
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }
  logoutUser() {
    GoogleSignin.signOut()
    .then(() => {
      console.log('out');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={createStore(store)}>
        <Router />
      </Provider>

    );
  }
}
