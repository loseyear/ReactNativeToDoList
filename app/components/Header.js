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
        height: PTD(40),
        fontSize: 20,
        backgroundColor: 'rgba(0, 0, 0, .1)',
    }
});

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: '',
        }
    }
    _add(e) {
        const newTodoItem = {
            text: this.state.value,
            isDone: false
        }
        this.setState({
            value: ''
        });
        this.props.add(newTodoItem);
    }
    render() {
        return (
            <View>
                <TextInput
                    style={s.box}
                    onChangeText={(value) => this.setState({value})}
                    onEndEditing={this._add.bind(this)}
                    placeholder='请输入新的待做事项'
                    value={this.state.value}
                />
            </View>
        );
    }
}

