import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import GoldText from "./text_views/GoldText";
import ClockText from "./text_views/ClockText"
import BasicText from "./text_views/BasicText"
import KeyValueText from "./text_views/KeyValueText"

export default class BasicInfoView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.stretch} source={this.props.imageSrc}/>
        <View style={styles.text}>
          <GoldText text={this.props.text}/>
          <ClockText time={this.props.time} ampm={this.props.ampm}/>
            {this.props.driverInfo ?
                <View>
                    <View style={styles.borderMedium}/>
                    <Text style={{fontFamily:'grotesk-light'}}>{this.props.driverInfo}</Text>
                </View> : null}
          {this.props.make ?
              <View style={[{flexDirection: 'row'}]}>
                <KeyValueText text={"Make / Model"} value={this.props.make}/>
                <KeyValueText text={"Color"} value={this.props.color}/>
              </View> : null}
            {this.props.music ?
                <View>
                  <BasicText text={this.props.arrival}/>
                  <View style={[{flexDirection: 'row'}, {marginTop:20}]}>
                    <KeyValueText text={"Current Vibe"} value={this.props.music}/>
                  </View>
                  <Image style={styles.mapIcon} source={require('../assets/images/Map_icon.png')}/>
                </View> : null}
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
  borderMedium: {
	borderTopWidth: 1,
    borderTopColor: '#dddad6',
	width: 170,
	//marginTop: 15,
	marginBottom:10
  },
  blurry: {
    //blurRadius: 20
  },
  mapIcon: {
    position: 'absolute',
	top: -165,
	right: 0
  }

});