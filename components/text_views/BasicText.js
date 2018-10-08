import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Font } from 'expo';


export default class BasicText extends Component{
  render(){
    return(
      <Text>{this.props.text}</Text>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'grotesk'
  }
});