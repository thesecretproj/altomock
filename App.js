import React from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import Footer from './components/Footer'
import SingleScreen from "./components/SingleScreen";
import {Font} from "expo";
export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  render() {
    if(this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./assets/images/Alto_logo.png')}/>
          <StatusBarBackground/>
          <SingleScreen/>
          <Footer/>
        </View>
      )
    } else return (<Text>Loading...</Text>)

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
    backgroundColor: '#F7F3EF'
  },
    statusBarBackground: {
        //height: (Platform.OS === 'ios') ? 18 : 24
    },
    logo: {
      position: 'absolute',
      top:40,
      alignSelf:'center',
      zIndex:1
    }
});
