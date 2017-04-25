import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Button,
    Text,
    View,
} from 'react-native';

import PTD from './../../library/PxToDp';

const s = StyleSheet.create({
    box: {
        marginTop: PTD(20),
    }
});

export default class Header extends Component {
    _allChecked() {
        this.props.allChecked();
    }
    _allDoneDelete() {
        this.props.allDoneDelete();
    }
    _allDelete() {
        this.props.allDelete();
    }
    render() {
        const { count, doneCount } = this.props;

        return (
            <View style={s.box} >
                <Text
                    style={{textAlign: 'center'}}
                >共{count}条数据,其中已完成{doneCount}条</Text>
                <Button
                    title='全选'
                    disabled={count === doneCount ? true : false}
                    onPress={() => this._allChecked()}
                />
                <Button
                    title='删除全部已完成'
                    disabled={doneCount > 0 ? false: true}
                    onPress={() => this._allDoneDelete()}
                />
                <Button
                    title='删除全部'
                    disabled={count > 0 ? false: true}
                    onPress={() => this._allDelete()}
                />
            </View>
        );
    }
}

