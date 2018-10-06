import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class SingleScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Is there a soul on this earth</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
