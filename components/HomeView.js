import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
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
          <KeyValueText text={"Estimated Fare:"} value={"$65 - $75 "} info={true}/>
          <KeyValueText text={"Passengers:"} value={"1 - 5"} info={false}/>
          <KeyValueText text={"Payment:"} value={"Amex01"} info={false}/>
        </View>
          <View style={{marginEnd:150}}>
        <View style={{marginTop:40}}>
          <BasicText text={"499 Flora St."}/>
          <BasicText text={"Dallas, Texas 75201"}/>
        </View>
              <View style={styles.borderSmall}/>
        <View>
            <Text style={{fontFamily:'grotesk-bold'}}>DFW International Airport</Text>
            <Text style={{fontFamily:'grotesk-bold'}}>American Airlines Terminal E</Text>
            <Text style={{fontFamily:'grotesk-bold'}}>Irving, Texas 75261</Text>
        </View>
        <View style={[{marginTop:20},{flexDirection: 'row'}]}>
          <BasicText text={"Can you drop me off at AA International bag drop please?  "}/>
          <Image style={[{alignSelf:'flex-end'},{marginBottom:2}]}source={require('../assets/images/Edit_icon.png')}/>
        </View>
          </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  borderSmall: {
      borderTopWidth: 1,
      borderTopColor: '#dddad6',
      width: 100,
      marginTop: 15,
      marginBottom:15
  }
});