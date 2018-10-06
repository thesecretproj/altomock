import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import MainContentContainer from "./MainContentContainer";

export default class SingleScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <MainContentContainer/>
                <Button style={styles.button} title={"Cancel Ride"} onPress={() => console.log("button pressed")}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        height: 75
    }
});
