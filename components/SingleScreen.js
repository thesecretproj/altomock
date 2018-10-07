import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import MainContentContainer from "./MainContentContainer";

export default class SingleScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <MainContentContainer/>
                <View style={styles.buttonContainer}>
                  <View style={styles.button} >
                    <Text style={styles.buttonText}>CANCEL TRIP</Text>
                  </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 75
    },
    button: {
      height:45,
      width: 300,
      borderWidth: 1,
      borderColor: '#dddad6',
      justifyContent: 'center',
      alignItems: 'center'

    },
  buttonText: {
    fontFamily: 'optima',
    color: '#dddad6',
    textAlign: 'center'
  }
});
