import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class FooterTextBox extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>ATL Int'l Airport</Text>
                <Text>ETA: 5:40 PM</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
