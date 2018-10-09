import React from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import Footer from './components/Footer'
import {Font} from "expo";
import MainContentContainer from "./components/MainContentContainer";
import * as data from "./data/data.json"

export default class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {fontLoaded: false, userData:data}
  }
  render() {
    if(this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./assets/images/Alto_logo.png')}/>
          <StatusBarBackground/>
          <MainContentContainer userData={this.state.userData}/>
          <Footer
              dest={this.state.userData.arrivalInfo.shortenedDest}
              time={this.state.userData.arrivalInfo.time}
              ampm={this.state.userData.arrivalInfo.ampm}
          />
        </View>
      )
    } else return (<Text style={[{textAlign:'center'},{paddingTop:300}]}>Loading...</Text>)

  }
  async componentDidMount() {
    await Font.loadAsync({
      'optima': require('./assets/fonts/Linotype-OptimaLTStd.otf'),
      'optima-bold' : require('./assets/fonts/Linotype-OptimaLTStd-Bold.otf'),
      'grotesk': require('./assets/fonts/PxGrotesk-Regular.otf'),
      'grotesk-bold': require('./assets/fonts/PxGrotesk-Bold.otf'),
      'grotesk-light':require('./assets/fonts/PxGrotesk-Light.otf')
    })

    this.setState({ fontLoaded: true });
  }
}

class StatusBarBackground extends React.Component{
    render(){
        return(
            <View style={styles.statusBarBackground}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f3ef'
  },
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 0 : 24
    },
    logo: {
      position: 'absolute',
      top:40,
      alignSelf:'center',
      zIndex:1
    }
});
