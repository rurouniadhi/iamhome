import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { GoogleSignin } from 'react-native-google-signin';
import {
  Container, Header, Title, Content,
  Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Spinner } from './common';
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
      <Container>
        <Header style={{ backgroundColor: '#E1E4BC' }}>
          <Left>
            <Button transparent onPress={this.onButtonPress.bind(this)}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.welcomeTextStyle}>Hi, {user.givenName} !</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <UserList />
        </Content>
      </Container>
    );
  }
}
const styles = {
  buttonStyle: {
    height: 50,
    padding: 5,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    position: 'absolute'
  },
  welcomeTextStyle: {
    textAlign: 'center',
    color: '#949a46'
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
