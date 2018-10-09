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
        <ClockText style={{flex:1}} time={this.props.arrival.time} ampm={this.props.arrival.ampm}/>
        <BasicText style={{flex:1}} text={this.props.arrival.arrival}/>
        <View style={[{flexDirection: 'row'},{marginTop: 20}, {flex:1}]}>
          <KeyValueText text={"Estimated Fare:"} value={this.props.dest.fare} info={true}/>
          <KeyValueText text={"Passengers:"} value={this.props.dest.passengers} info={false}/>
          <KeyValueText text={"Payment:"} value={this.props.dest.payment} info={false}/>
        </View>
        <View style={[{marginEnd:130},{flex:3}]}>
          <View style={{flex:1}}>
            <BasicText text={this.props.dest.address1}/>
            <BasicText text={this.props.dest.address2}/>
          </View>
		  <View style={styles.borderSmall}/>
          <View style={{flex:1}}>
              <Text style={{fontFamily:'grotesk-bold'}}>{this.props.dest.destination1}</Text>
              <Text style={{fontFamily:'grotesk-bold'}}>{this.props.dest.destination2}</Text>
              <Text style={{fontFamily:'grotesk-bold'}}>{this.props.dest.destination3}</Text>
          </View>
          <View style={[{marginTop:(Platform.OS === 'ios') ? 0 : 20},{flexDirection: 'row'},{flex:1},{justifyContent:'space-between'}]}>
			<Text>{this.props.dest.request}<Image
				style={Platform.OS === 'android' ? {height:40,width:40} : null}
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