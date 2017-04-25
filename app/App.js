import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import storage from './../library/storage';

import PTD from './../library/PxToDp';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const s = StyleSheet.create({
    box: {
        marginTop: PTD(22),
    }
});

const key = 'todo';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        storage.getAllDataForKey('todo').then(res => {
            this.setState({
                list: res
            });
        });
    }
    _add(data) {
        storage.load({
            key: key,
            id: data.text
        }).then(() => {
            alert('已经有这个计划啦！');
        }).catch(err => {
            storage.save({
                key: key,
                id: data.text,
                rawData: data
            });
            this.state.list.push(data);
            this.setState({
                list: this.state.list
            });
        })
    }
    _check(text, turn) {
        const isDone = !this.state.list[turn].isDone;
        storage.load({
            key: key,
            id: text
        }).then(res => {
            const data = {
                isDone: isDone,
                text: text
            }
            storage.save({
                key: key,
                id: text,
                rawData: data
            });
        }).catch(err => {
            alert(err.message);
        })
        this.state.list[turn].isDone = isDone;
        this.setState({
            list: this.state.list
        });
    }
    _delete(text, turn) {
        storage.remove({
            key: key,
            id: text
        });
        this.state.list.splice(turn, 1);
        this.setState({
            list: this.state.list
        });
    }
    _allChecked() {
        storage
            .getIdsForKey(key)
            .then(res => {
                res.map((k) => {
                    storage.load({
                        key: key,
                        id: k
                    }).then(res => {
                        const data = {
                            isDone: true,
                            text: k
                        }
                        storage.save({
                            key: key,
                            id: k,
                            rawData: data
                        });
                    }).catch(err => {
                        alert(err.message);
                    })
                })
            });
        const list = this.state.list.map(
            (n) => {
                return {
                    isDone: true,
                    text: n.text
                }
            }
        );
        this.setState({
            list: list,
        });
    }
    _allDoneDelete() {
        storage
            .getIdsForKey(key)
            .then(res => {
                res.map((k) => {
                    storage.load({
                        key: key,
                        id: k
                    }).then(res => {
                        if (res.isDone) {
                            storage.remove({
                                key: key,
                                id: res.text
                            });
                        }
                    }).catch(err => {
                        alert(err.message);
                    })
                })
            });
        const list = this.state.list.filter(n => !n.isDone);
        this.setState({
            list: list,
        });
    }
    _allDelete() {
        storage.clearMapForKey(key);
        this.setState({
            list: []
        });
    }
    render() {
        const info = {
            count: this.state.list.length || 0,
            doneCount: (this.state.list && this.state.list.filter(n => n.isDone)).length || 0
        }
        const { list } = this.state;
        return (
            <View style={s.box}>
                <Header add={this._add.bind(this)} />
                <Main
                    list={list}
                    check={this._check.bind(this)}
                    del={this._delete.bind(this)}
                />
                <Footer
                    allChecked={this._allChecked.bind(this)}
                    allDoneDelete={this._allDoneDelete.bind(this)}
                    allDelete={this._allDelete.bind(this)}
                    {...info}
                />
            </View>
        );
    }
}

