import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ResultScreen from './screens/ResultScreen';
import HomeScreen from './screens/HomeScreen';
import After20 from './screens/After20';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Result: ResultScreen,
  After20:After20
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
