import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Font } from 'expo';


export default class HeaderText extends Component{
  render(){
    return(
      <Text style={styles.container}>{this.props.text}</Text>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'optima',
    fontSize: 36,
    paddingTop: 40,
    paddingBottom: 40
  }
});