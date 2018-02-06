import React, { Component } from 'react';
import _ from 'lodash';
import { Alert, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';
import { Container, Content, SwipeRow, View,
  Icon, Button, Footer, FooterTab, List,
  ListItem, Right, Body } from 'native-base';
import { itemsFetchData, loginUser, itemSave } from '../actions';
import { CardSection } from './common';

class UserList extends Component {
    componentWillMount() {
      this.props.itemsFetchData();
      console.log(GoogleSignin.currentUser());
    }

    onCheckInPress() {
      console.log('ini dari checkinpage', this.props.items);
      const currentUser = GoogleSignin.currentUser().email;
      console.log('current user google', currentUser);
      const userdb = _.find(this.props.items, { Email: currentUser });
      console.log('current user db', userdb);
      Actions.checkinpage({ user: userdb });
    }

    render() {
        if (this.props.hasErrored) {
            return <Text>Sorry! There was an error loading the items</Text>;
        }
        if (this.props.isLoading) {
            return <Text>Loading…</Text>;
        }

        return (
          <Content>
            <FlatList
              style={{ marginBottom: 30 }}
              data={this.props.items}
              keyExtractor={items => items.Id}
              renderItem={({ item }) =>
                <CardSection>
                  <Text style={styles.userStyle}>{item.Name}</Text>
                  <Icon
                    name='radio-button-on'
                    style={[styles.statusFalse, item.Status && styles.statusTrue]}
                  />
                </CardSection>
              }
            />
            <SwipeRow
               style={{
                 width: 250,
                 backgroundColor: 'rgb(213, 236, 104)',
                 alignSelf: 'center',
                 alignItems: 'flex-end',
                 flex: 1,
                  borderRadius: 20 }}
               leftOpenValue={250}
               disableLeftSwipe
               swipeToOpenPercent={100}
               onRowOpen={this.onCheckInPress.bind(this)}
               left={
                 <Button
                   style={{ borderRadius: 20 }}
                   danger onPress={this.onCheckInPress.bind(this)}
                 >
                   <Icon active name="undo" />
                 </Button>
               }
               body={
                 <View style={{ width: 100 }} >
                   <Text style={{ paddingLeft: 20, fontSize: 20, fontWeight: 'bold' }}>
                     Check In
                   </Text>
                 </View>
               }
            />
          </Content>
        );
    }
}

// <Button onPress={this.onCheckInPress.bind(this)}><Text>Check In</Text></Button>
const styles = {
  userStyle: {
    textAlign: 'left',
    fontSize: 20
  },
  statusTrue: {
    textAlign: 'right',
    fontSize: 35,
    flex: 1,
    color: '#00cd46'
  },
  statusFalse: {
    color: '#c21010',
    flex: 1,
    textAlign: 'right',
    fontSize: 35
  },
  listItemStyle: {

  }
};

const mapStateToProps = state => {
  const { items } = state.users;
  return { items };
};

export default connect(mapStateToProps, {
  itemsFetchData, loginUser, itemSave
})(UserList);
