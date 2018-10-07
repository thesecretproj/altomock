import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

export default class BasicInfoView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.stretch} source={this.props.imageSrc}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  stretch: {
    width: Dimensions.get('window').width,
    height: 275,
    resizeMode: 'cover'
  },
  blurry: {
    //blurRadius: 20
  }
});