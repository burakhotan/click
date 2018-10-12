import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput} from 'react-native';
import { LinearGradient } from 'expo';
Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
import { BackHandler } from 'react-native';


class ResultScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {
            return true;
          });
          
    }

    render() {
        return (
      
            <View>
     
    
            <LinearGradient colors ={["#F0F2F0","#000C40"]} style={{width:360,
             height:800}}>
             
              <Image style={{width:350 , height:250,marginTop:50,marginBottom:50}}
               source={require('../images/GameOver1.gif')}/>
             
           <View>
           <Image style={{width:400 , height:100,margin:10,marginLeft:5}}
               source={require('../images/score2.png')}/>
           </View>

           <View style={styles.container}>
                 <TouchableOpacity style ={styles.containers}
                 onPress={()=> this.props.navigation.navigate('First')}>
                 <Image
                     style={{width: 450, height: 200,marginTop:10,marginRight:50}}
                     source={require('../images/play.png')}
                         />
                 </TouchableOpacity>
                 
                 </View>
        
           </LinearGradient>
               
                </View>
        );
      }
    }
    
    const styles = StyleSheet.create({

        textDesign:{
          fontSize:40,
          textShadowColor:'black',
          color:"#434343",
          marginTop:3,
          marginLeft:15,
          textShadowRadius:5,
          fontFamily: 'sans-serif-medium'
        },
        linearGradient: {
          width:375,
          height:800,
        },
        containers: {
            flex:1,
            backgroundColor: '#C9C2CB',
            height:100,
            width:200
          },
          container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:25
      },
      buttonContainer: {
          flex: 1,
      },
    
      
    
    
});

export default ResultScreen;