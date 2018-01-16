import React, { Component } from 'react';
import { View } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';

class LoginForm extends Component {
  render() {
    return (
      <View>
        <GoogleSigninButton
          style={{ width: 100, height: 48 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => this.loginUser()}
        />


      </View>
    );
  }
}

export default LoginForm;
