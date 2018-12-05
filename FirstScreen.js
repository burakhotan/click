import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


class FirstScreen extends Component {
    static navigationOptions = {
        header: null
    }
    
   
   
  render() {
    return (
        <TouchableOpacity style = {styles.container} onPress = { ()=> this.props.navigation.navigate('Home')}   >
            <Image
          style={{width: 360, height: 720}}
          source={require('../images/anasayfa.gif')}></Image>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});

export default FirstScreen;