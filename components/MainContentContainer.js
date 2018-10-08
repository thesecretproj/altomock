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
        <Swiper horizontal={false} loop={false} activeDotColor={'#3f3825'} dotColor={'#d9d8cb'} paginationStyle={styles.paginationStyle}>
          <HomeView/>
          <BasicInfoView
            imageSrc={driverPhoto}
            text={"YOUR DRIVER"}
            time={"Steph"}
            ampm={""}
            driverInfo={"Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portuguese, Spanish, and English. Steph has been driving with Alto since 2018."}
          />
          <BasicInfoView
              imageSrc={vehiclePhoto}
              text={"YOUR VEHICLE"}
              time={"Alto 09"}
              ampm={""}
              make={"2019 Volkswagen Atlas"}
              color={"Pure White"}
          />
          <BasicInfoView
              imageSrc={mapPhoto}
              text={"YOUR TRIP"}
              time={"5:39"}
              ampm={"PM"}
              arrival={"Estimated Arrival at DFW Int'l Airport - Terminal E"}
              music={"Vaporwave Beats"}
          />
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    paginationStyle: {
        position: 'absolute',
        top:-415,
    }
});
