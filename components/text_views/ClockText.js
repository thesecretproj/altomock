import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Font } from 'expo';


export default class HeaderText extends Component{
  render(){
    return(
      /*<View style={styles.container}>
        <Text style={styles.time}>{this.props.time}</Text>
        <Text style={styles.ampm}>{this.props.ampm}</Text>
      </View>*/
      <View>
        <View style={styles.container}>
          <Text style={styles.time}>{this.props.time}
            <Text style={styles.ampm}>{this.props.ampm}</Text>
          </Text>

        </View>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'flex-end'
  },
  time:{
    fontFamily: 'grotesk-light',
    fontSize: 72
  },
  ampm:{
    fontSize: 24,
    fontFamily: 'grotesk'
  }

});