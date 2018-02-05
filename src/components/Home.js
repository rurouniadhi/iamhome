import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { GoogleSignin } from 'react-native-google-signin';
import { Button, Spinner, Card } from './common';
import UserList from './UserList';
import { logoutUser, loginUser } from '../actions';

class Home extends Component {
  onButtonPress() {
    this.props.logoutUser();
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <View>
        <Button
            style={styles.buttonStyle}
            onPress={this.onButtonPress.bind(this)}
        >
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }

  render() {
    const user = GoogleSignin.currentUser();
    return (
      <View>
        <Card>
          <Text style={styles.welcomeTextStyle}>Selamat datang, {user.givenName} !</Text>
        </Card>
        <UserList />
        {this.renderButton()}
      </View>
    );
  }
}
const styles = {
  buttonStyle: {
    height: 10,
    padding: 5,
  },
  welcomeTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000'
  }
};

const mapStateToProps = ({ auth }) => {
  const { error, loading } = auth;
  return {
    error,
    loading,
  };
};

export default connect(mapStateToProps, {
  logoutUser, loginUser
})(Home);
