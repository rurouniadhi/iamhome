import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { Button } from './common';
import { logoutUser } from '../actions';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Hai there</Text>
        <GoogleSigninButton
          style={{ width: 100, height: 48 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => this.logoutUser()}
        >
          Logout
        </GoogleSigninButton>
      </View>
    );
  }
}

export default Home;
