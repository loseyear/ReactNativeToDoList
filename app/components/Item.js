import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native';
import CheckBox from 'react-native-check-box';

import PTD from './../../library/PxToDp';

const s = StyleSheet.create({
    item: {
        flexDirection: 'row',
    },
    check: {
        width: PTD(60),
        backgroundColor: 'rgba(0, 0, 255, .1)',
    },
    text: {
        width: PTD(200),
        marginTop: PTD(4),
        marginLeft: PTD(10),
    },
    isCheck: {
        backgroundColor: 'rgba(0, 0, 0, .1)',
    },
    del: {
        width: PTD(40),
        alignItems: 'center',
    }
});

export default class Header extends Component {
    _toggleCheck() {
        const { turn, check } = this.props;
        const text = this.refs.key.props.children;
        check(text, turn);
    }
    _delete() {
        const text = this.refs.key.props.children;
        const { turn, del } = this.props;
        del(text, turn);;
    }
    render() {
        const { text, isDone } = this.props;
        const title = isDone ? 'checked' : 'uncheck';

        return (
            <View
                style={isDone ? [s.item, s.isCheck] : s.item}
            >
                <Button
                    title={title}
                    style={s.check}
                    onPress={() => this._toggleCheck()}
                />
                <Text
                    style={s.text}
                    ref='key'
                >{text}</Text>
                <Button
                    title='delete'
                    onPress={() => this._delete()}
                />
            </View>
        )
    }
}

