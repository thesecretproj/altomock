import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Footer from './components/Footer'
import SingleScreen from "./components/SingleScreen";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarBackground/>
        <SingleScreen/>
        <Footer/>
      </View>
    );
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
    backgroundColor: '#F7F3EF',
  },
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18 : 0
    }
});
