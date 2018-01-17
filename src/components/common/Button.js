import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
    const {
        buttonStyle,
        buttonTextStyle
    } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        padding: 10,
        margin: 20,
        borderRadius: 10,
        borderColor: '#09b753',
        borderWidth: 2,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        color: 'rgb(6, 64, 112)',
        fontSize: 22,
        textAlign: 'center'
    }

};

export { Button };
