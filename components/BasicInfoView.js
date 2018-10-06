import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class BasicInfoView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Basic Info View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});