import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
} from 'react-native';

import PTD from './../../library/PxToDp';

const s = StyleSheet.create({
    box: {
        marginTop: PTD(6),
        width: PTD(375),
        height: PTD(30),
        fontSize: 20,
        backgroundColor: 'rgba(0, 0, 0, .1)',
    }
});

export default class Header extends Component {
    render() {
        const { text, isDone } = this.props;
        return (
            <View>
                <Text>{text}</Text>
            </View>
        )
    }
}

