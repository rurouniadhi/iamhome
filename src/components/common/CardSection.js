import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderColor: '#000',
        marginRight: 20,
        marginLeft: 20,
        flex: 2,
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        position: 'relative',
        alignItems: 'center'
    }
};

export { CardSection };
