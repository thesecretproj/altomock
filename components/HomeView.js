import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { Font } from 'expo';
import BasicText from "./text_views/BasicText";
import HeaderText from "./text_views/HeaderText";
import ClockText from "./text_views/ClockText"
import KeyValueText from "./text_views/KeyValueText"


export default class HomeView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <HeaderText text={"Your Trip"} />
        <ClockText time={"5:39"} ampm={"PM"}/>
        <BasicText text={"Estimated at DFW Int'l Airport - Terminal E"}/>
        <View style={[{flexDirection: 'row'},{marginTop: 20}]}>
          <KeyValueText text={"Passengers:"} value={"1 - 5"} info={true}/>
          <KeyValueText text={"Estimated Fare:"} value={"$65 - $75"} info={false}/>
          <KeyValueText text={"Payment:"} value={"Amex01"} info={false}/>
        </View>
        <View style={{marginTop: 40}}>
          <BasicText text={"499 Flora St."}/>
          <BasicText text={"Dallas, Texas 75201"}/>
        </View>
        <View style={[{marginTop:30}]}>
          <BasicText style={{fontWeight:'bold'}} text={"DFW International Airport"}/>
          <BasicText style={{fontWeight:'bold'}} text={"American Airlines Terminal E"}/>
          <BasicText style={{fontWeight:'bold'}} text={"Irving, Texas 75261"}/>
        </View>
        <View style={{marginTop:20}}>
          <BasicText text={"Can you drop me off at AA International bag drop please?"}/>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  }
});