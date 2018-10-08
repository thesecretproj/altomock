import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import HomeView from "./HomeView";
import Swiper from 'react-native-swiper'
import BasicInfoView from "./BasicInfoView";

const CANCEL_TRIP = 'CANCEL TRIP'
const CONTACT_DRIVER = 'CONTACT DRIVER'
const IDENTIFY_VEHICLE = 'IDENTIFY VEHICLE'
const CHANGE_VEHICLE_VIBE = 'CHANGE VEHICLE VIBE'
export default class MainContentContainer extends Component{
	constructor(props){
		super(props)
		this.pageChanged = this.pageChanged.bind(this)
		this.state={buttonString: CANCEL_TRIP}
		this.state={buttonStyle: styles.buttonDefault}
	}
  render(){
    let driverPhoto = require('../assets/images/Driver_photo.png')
    let vehiclePhoto = require('../assets/images/Vehicle_photo.png')
    let mapPhoto = require('../assets/images/Map_overview.png')
    return(
      <View style={styles.container}>
        <Swiper
			horizontal={false}
			loop={false}
			activeDotColor={'#3f3825'}
			dotColor={'#d9d8cb'}
			paginationStyle={styles.paginationStyle}
			onIndexChanged={this.pageChanged}>
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
		  <View style={styles.buttonContainer}>
			  <View style={this.state.buttonStyle} >
				  <Text style={styles.buttonText}>{this.state.buttonString ? this.state.buttonString : CANCEL_TRIP}</Text>
			  </View>
		  </View>
      </View>
    )
  }

	pageChanged(index) {
  		let buttonString
		this.setState({buttonStyle:styles.buttonDefault})
		switch(index){
			case 0: buttonString = CANCEL_TRIP
				break
			case 1: buttonString = CONTACT_DRIVER
				break
			case 2: buttonString = IDENTIFY_VEHICLE
				break
			case 3: buttonString = CHANGE_VEHICLE_VIBE
					this.setState({buttonStyle:styles.buttonRed})
				break
			default: buttonString = "ERROR"
				break
		}
		this.setState({buttonString:buttonString})
	}

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    paginationStyle: {
        position: 'absolute',
        top:-415,
    },
	buttonContainer: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 55
	},
	buttonDefault: {
		height:40,
		width: 330,
		marginTop: 5,
		borderWidth: 1,
		borderColor: '#dddad6',
		justifyContent: 'center',
		alignItems: 'center',

	},
	buttonRed: {
		height:40,
		width: 330,
		marginTop: 5,
		backgroundColor: '#ac826d',
		justifyContent: 'center',
		alignItems: 'center',

	},
	buttonText: {
		fontFamily: 'grotesk-bold',
		color: '#dddad6',
		letterSpacing: 2,
		paddingTop: 5,
		textAlign: 'center'
	}
});

