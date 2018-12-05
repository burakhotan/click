import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import After10 from './screens/After10';
import FirstScreen from './screens/FirstScreen';
import Splash from './screens/Splahs';
import After20 from './screens/After20';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}
const AppStackNavigator = createStackNavigator({



  Load: Splash,
  First: FirstScreen,
  Home: HomeScreen,
  After10: After10,
  After20: After20,



})
