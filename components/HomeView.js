import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class HomeView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Your Trip</Text>
        <Text>5:39 PM</Text>
        <Text>Estimated at DFW Int'l Airport - Terminal E</Text>
        <View></View>
        <Text>499 Flora St.</Text>
        <Text>Dallas, Texas 75201</Text>
        <Text>DFW International Airport</Text>
        <Text>American Airlines Terminal E</Text>
        <Text>Irving, Texas 75261</Text>
        <Text>Can you drop me off at AA International bag drop please?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});