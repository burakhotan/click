import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

class FirstScreen extends Component {
    static navigationOptions = {
        header: null
    }
   
   
  render() {
    return (
        <TouchableOpacity style = {styles.container} onPress = { ()=> this.props.navigation.navigate('Home')}   >
            <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif'}} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

export default FirstScreen;