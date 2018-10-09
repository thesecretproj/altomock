import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Font } from 'expo';


export default class GoldText extends Component{
  render(){
    return(
      <Text style={styles.text}>{this.props.text}</Text>
    )
  }

}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'grotesk',
    color: '#ac826d',
    marginTop: 30,
    marginBottom: 0
  }
});