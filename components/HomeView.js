import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class HomeView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Home View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});