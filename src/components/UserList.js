import React, { Component } from 'react';
import _ from 'lodash';
import { Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';
import { CardSection, Button } from './common';
import { itemsFetchData, loginUser, itemSave } from '../actions';


class UserList extends Component {
    componentWillMount() {
      this.props.itemsFetchData();
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
          <View>
            <FlatList
              style={{ backgroundColor: '#fff', height: 300 }}
              data={this.props.items}
              keyExtractor={items => items.Id}
              renderItem={({ item }) =>
                <CardSection>
                  <Text style={styles.userStyle}>{item.Name}</Text>
                  <Text style={[styles.statusFalse, item.Status && styles.statusTrue]}>
                    {String(item.Status)}
                  </Text>
                </CardSection>
              }
            />
          <Button onPress={this.onCheckInPress.bind(this)}><Text>Check In</Text></Button>
          </View>
        );
    }
}

const styles = {
  userStyle: {
    textAlign: 'left',
    fontSize: 20,
    flex: 1
  },
  statusTrue: {
    textAlign: 'right',
    fontSize: 20,
    flex: 1,
    color: '#00cd46'
  },
  statusFalse: {
    color: '#c21010',
    flex: 1,
    textAlign: 'right',
    fontSize: 20
  }
};

const mapStateToProps = state => {
  const { items } = state.users;
  return { items };
};

export default connect(mapStateToProps, {
  itemsFetchData, loginUser, itemSave
})(UserList);
