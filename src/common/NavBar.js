import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

class NavBar extends Component {
    _pressBtnBack() {
        this.props.navigator.goBack();
    }
    render() {
        const txtMarginLeft = (this.props.hideBackButton) ? 0 : -18;
        const btnBack = (
            <TouchableOpacity 
                style={styles.btnback} 
                onPress={() => this._pressBtnBack()}
            >
                <Icon 
                    name='arrow-left' 
                    style={[styles.icon, this.props.headerLeftIconStyle || {}]} size={16} 
                />
            </TouchableOpacity>
        );
        return (
            <View style={[styles.bar, this.props.style || {}]}>
                { !this.props.hideBackButton && btnBack}
                <View style={styles.titleHolder}>
                    <Text style={[styles.text, this.props.titleStyle || {}, { marginLeft: txtMarginLeft }]}>{ this.props.title }</Text>
                </View>
                { this.props.headerRight || null }
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        backgroundColor: '#ff0000',
    },
    titleHolder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        fontWeight: '700'
    },
    icon: {
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    btnback: {
        padding: 10,
        marginLeft: 10
    }
});

module.exports = NavBar;
