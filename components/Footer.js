import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import FooterTextBox from './FooterTextBox'

export default class Footer extends Component{
    render(){
        return(
        <View style={styles.container}>
            <Image source={require('../assets/images/Profile_icon.png')}/>
            <FooterTextBox/>
            <Image source={require('../assets/images/Vibes_icon.png')}/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddad6'
    },
});
