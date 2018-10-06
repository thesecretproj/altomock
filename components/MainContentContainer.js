import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import HomeView from "./HomeView";
import Swiper from 'react-native-swiper'
import BasicInfoView from "./BasicInfoView";

export default class MainContentContainer extends Component{
    render(){
        return(
            <View style={styles.container}>
              <Swiper horizontal={false} loop={false}>
                <HomeView/>
                <BasicInfoView/>
                <BasicInfoView/>
                <BasicInfoView/>
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
