import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.logoStyle}>Φ</Text>
        <GoogleSigninButton
          style={styles.buttonGoogle}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={() => this.loginUser()}
        />
        <Button
            style={styles.buttonStyle}
            onPress={() => this.logoutUser()}
        >
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(176, 209, 236, 1)',
    justifyContent: 'flex-end'
  },
  logoStyle: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    fontSize: 250,
    color: '#rgb(41, 139, 194)',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  buttonStyle: {
    height: 10,
    padding: 5,
  },
  buttonGoogle: {
    height: 50,
    width: 150,
    margin: 20,
    padding: 10,
    alignSelf: 'center'
  }
};

export default LoginForm;
