import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


export default class KeyValueText extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>{this.props.value}</Text>
          {this.props.info ? <Image source={require('../../assets/images/Info_icon.png')}/> : null}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: '#dddad6',
    flex: 1,
    marginEnd: 25
  },
  key: {

  },
  value: {
    fontWeight: 'bold'
  }
});