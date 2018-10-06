import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import HomeView from "./HomeView";

export default class MainContentContainer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <HomeView/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
