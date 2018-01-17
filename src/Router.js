import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          hideNavbar
          key="auth"
          component={LoginForm}
          initial
        />
        <Scene
          key="main"
          component={Home}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
