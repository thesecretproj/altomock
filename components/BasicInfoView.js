import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import GoldText from "./text_views/GoldText";
import ClockText from "./text_views/ClockText"
import BasicText from "./text_views/BasicText";

export default class BasicInfoView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.stretch} source={this.props.imageSrc}/>
        <View style={styles.text}>
          <GoldText text={this.props.text}/>
          <ClockText time={this.props.time} ampm={this.props.ampm}/>
          {this.props.driverInfo ? <BasicText text={this.props.driverInfo}/> : null}
        </View>
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
  text: {
    paddingLeft: 20,
    paddingRight: 30
  },
  blurry: {
    //blurRadius: 20
  }
});