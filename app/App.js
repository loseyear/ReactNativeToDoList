import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import PTD from './../library/PxToDp';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const s = StyleSheet.create({
    box: {
        marginTop: PTD(22),
    }
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            list: [],
        }
    }
    _add(v) {
        this.state.list.unshift(v);
        this.setState({
            list: this.state.list
        });
    }
    render() {
        return (
            <View style={s.box}>
                <Header add={this._add.bind(this)} />
                <Main list={this.state.list} />
                <Footer />
            </View>
        );
    }
}

