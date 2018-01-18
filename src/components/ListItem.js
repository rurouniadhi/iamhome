import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text style={styles.userList}>{this.props.user.email}</Text>
      </CardSection>
    );
  }
}

const styles = {
  userList: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 20,
    textAlign: 'left'
  }
};
//
// const mapStateToProps = () => {
//     return;
// };

export default ListItem;
