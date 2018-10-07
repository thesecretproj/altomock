import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import HomeView from "./HomeView";
import Swiper from 'react-native-swiper'
import BasicInfoView from "./BasicInfoView";

export default class MainContentContainer extends Component{
  render(){
    let driverPhoto = require('../assets/images/Driver_photo.png')
    let vehiclePhoto = require('../assets/images/Vehicle_photo.png')
    let mapPhoto = require('../assets/images/Map_overview.png')
    return(
      <View style={styles.container}>
        <Swiper horizontal={false} loop={false}>
          <HomeView/>
          <BasicInfoView imageSrc={driverPhoto}/>
          <BasicInfoView imageSrc={vehiclePhoto}/>
          <BasicInfoView imageSrc={mapPhoto}/>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
