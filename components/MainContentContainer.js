import React, { Component } from 'react';
import {Platform, Text, View, Image, StyleSheet} from 'react-native';
import HomeView from "./HomeView";
import Swiper from 'react-native-swiper'
import BasicInfoView from "./BasicInfoView";


const CANCEL_TRIP = 'CANCEL TRIP'
const CONTACT_DRIVER = 'CONTACT DRIVER'
const IDENTIFY_VEHICLE = 'IDENTIFY VEHICLE'
const CHANGE_VEHICLE_VIBE = 'CHANGE VEHICLE VIBE'
const YOUR_DRIVER = 'YOUR DRIVER'
const YOUR_VEHICLE = 'YOUR VEHICLE'
const YOUR_TRIP = 'YOUR TRIP'
const ERROR = "ERROR"

export default class MainContentContainer extends Component{
	constructor(props){
		super(props)
		this.pageChanged = this.pageChanged.bind(this)
		this.state={buttonString: CANCEL_TRIP,buttonStyle: styles.buttonDefault}
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
          <HomeView
			  arrival={this.props.userData.arrivalInfo}
			  dest={this.props.userData.destinationInfo}
		  />
          <BasicInfoView
            imageSrc={driverPhoto}
            text={YOUR_DRIVER}
            time={this.props.userData.driver}
            driverInfo={this.props.userData.driverInfo}
          />
          <BasicInfoView
              imageSrc={vehiclePhoto}
              text={YOUR_VEHICLE}
              time={this.props.userData.vehicle}
              make={this.props.userData.model}
              color={this.props.userData.color}
          />
          <BasicInfoView
              imageSrc={mapPhoto}
              text={YOUR_TRIP}
              time={this.props.userData.arrivalInfo.time}
              ampm={this.props.userData.arrivalInfo.ampm}
              arrival={this.props.userData.arrivalInfo.arrival}
              music={this.props.userData.music}
          />
        </Swiper>
		<View style={styles.buttonContainer}>
			<View style={this.state.buttonStyle} >
				<Text style={styles.buttonText}>{this.state.buttonString}</Text>
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
			default: buttonString = ERROR
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
		height: 45,
		marginBottom:10
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
		paddingTop: (Platform.OS === 'ios') ? 5 : 0,
		textAlign: 'center'
	}
});

