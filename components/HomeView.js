import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import BasicText from "./text_views/BasicText";
import HeaderText from "./text_views/HeaderText";
import ClockText from "./text_views/ClockText"
import KeyValueText from "./text_views/KeyValueText"


export default class HomeView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <HeaderText style={{flex:1}} text={"Your Trip"} />
        <ClockText style={{flex:1}} time={"5:39"} ampm={"PM"}/>
        <BasicText style={{flex:1}} text={"Estimated at DFW Int'l Airport - Terminal E"}/>
        <View style={[{flexDirection: 'row'},{marginTop: 20}, {flex:1}]}>
          <KeyValueText text={"Estimated Fare:"} value={"$65 - $75 "} info={true}/>
          <KeyValueText text={"Passengers:"} value={"1 - 5"} info={false}/>
          <KeyValueText text={"Payment:"} value={"Amex01"} info={false}/>
        </View>
        <View style={[{marginEnd:130},{flex:3}]}>
          <View style={{flex:1}}>
            <BasicText text={"499 Flora St."}/>
            <BasicText text={"Dallas, Texas 75201"}/>
          </View>
		  <View style={styles.borderSmall}/>
          <View style={{flex:1}}>
              <Text style={{fontFamily:'grotesk-bold'}}>DFW International Airport</Text>
              <Text style={{fontFamily:'grotesk-bold'}}>American Airlines Terminal E</Text>
              <Text style={{fontFamily:'grotesk-bold'}}>Irving, Texas 75261</Text>
          </View>
          <View style={[{marginTop:(Platform.OS === 'ios') ? 0 : 20},{flexDirection: 'row'},{flex:1},{justifyContent:'space-between'}]}>
			<Text>Can you drop me off at AA International bag drop please?   <Image
				style={{height:40,width:40}}
				source={require('../assets/images/Edit_icon.png')}/>
			</Text>
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
      marginTop: (Platform.OS === 'ios') ? -20 : 15,
      marginBottom:15
  }
});