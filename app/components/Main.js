import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import PTD from './../../library/PxToDp';
import Item from './Item';

export default class Header extends Component {
    render() {
        const { list } = this.props;
        if (list.length === 0) {
            return (
                <Text
                    style={{textAlign: 'center'}}
                >没有在办项目</Text>
            )
        } else {
            return (
                <View style={{marginTop: PTD(20)}} >
                    {
                        list.map(
                            (v, i) =>
                            <Item
                                text={v.text}
                                isDone={v.isDone}
                                key={i}
                                turn={i}
                                {...this.props}
                            />
                        )
                    }
                </View>
            );
        }
    }
}

