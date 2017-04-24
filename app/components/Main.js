import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Text,
    View,
} from 'react-native';

import PTD from './../../library/PxToDp';
import Item from './Item';

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
    constructor(props) {
        super(props);
        this.state= {
            value: '',
        }
    }
    render() {
        const { list } = this.props;
        if (list.length === 0) {
            return (
                <View><Text>没有在办项目</Text></View>
            )
        } else {
            return (
                <View>
                    {
                        list.map((v, i) => <Item
                            text={v.text}
                            isDone={v.isDone}
                            key={i}
                            {...this.props}
                        />)
                    }
                </View>
            );
        }
    }
}

