import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" >
        <Scene key="auth" hideNavBar>
          <Scene
            key="login"
            component={LoginForm}
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="home"
            rightTitle="Logout"
            component={Home}
            renderBackButton={() => (null)}
            hideNavBar
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
