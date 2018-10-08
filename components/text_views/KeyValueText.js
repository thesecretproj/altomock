import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


export default class KeyValueText extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.keyText}>{this.props.text}</Text>
        <View style={styles.value}>
          <Text style={{fontFamily:'grotesk-bold'}}>{this.props.value}</Text>
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
  keyText: {
    marginTop:10,
    fontFamily: 'grotesk-light',
    fontSize: 12
  },
  value: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});