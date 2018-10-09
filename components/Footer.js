import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import FooterTextBox from './FooterTextBox'

export default class Footer extends Component{
    render(){
        return(
        <View>
            <View style={styles.borderLineFull}/>
            <View style={styles.container}>
                <Image source={require('../assets/images/Profile_icon.png')}/>
                <FooterTextBox
                    dest={this.props.dest}
                    time={this.props.time}
                    ampm={this.props.ampm}
                />
                <Image source={require('../assets/images/Vibes_icon.png')}/>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginStart: 20,
        marginEnd: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },
    borderLineFull: {
        borderTopWidth: 1,
        borderTopColor: '#dddad6',
    }
});
