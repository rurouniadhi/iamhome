import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Button, Spinner } from './common';
import UserList from './UserList';

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
    return (
      <View>
        <Text style={styles.welcomeTextStyle}>Hai thereee</Text>
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
    fontSize: 20,
    textAlign: 'center'
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
  logoutUser
})(Home);
