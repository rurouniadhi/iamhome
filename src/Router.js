import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="auth"
          component={LoginForm}
        />
        <Scene
          key="main"
          component={Home}
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
