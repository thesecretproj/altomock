import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class FooterTextBox extends Component{
    render(){
        return(
            <View style={styles.container}>
              <Text style={styles.footerTextTop}>DFW Int'l Airport</Text>
              <Text style={styles.footerTextBottom}>ETA: 5:40 PM</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },

    footerTextTop: {
        textAlign: 'center',
        fontFamily: 'grotesk-bold',
        letterSpacing:0.5
    },
    footerTextBottom: {
      textAlign: 'center',
      fontFamily: 'grotesk-light'
    }
});
