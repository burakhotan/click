import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
class ResultScreen extends React.Component {

    static navigationOptions = {
        header: null
    }
    
    
    render() {
        return (
      
            <View>
     
    
            <LinearGradient colors ={["#30cfd0","#330867"]} style={{width:360,
             height:800,borderRadius:5,borderColor:"black",borderWidth:5}}>
             
              <Image style={{width:220 , height:160,margin:50}}
               source={require('../images/gameover2.png')}/>
           <View style={styles.container}>
                 <View style={styles.buttonContainer}>
                       <Button 
                          title="Home"
                          onPress = { () => this.props.navigation.navigate('After20') }
                          color="#330867"
                          buttonStyle={{
                          backgroundColor: "#a1c4fd",
                          width: 70,
                          height: 70,
                          borderColor: "#c2e9fb",
                          borderWidth: 3,
                          borderRadius: 20 }}/>  
                 </View>
                 <View style={styles.buttonContainer}>
                      <Button 
                          title="->"
                          color="#330867"
                          buttonStyle={{
                          backgroundColor: "#a1c4fd",
                          width: 70,
                          height: 70,
                          borderColor: "#c2e9fb",
                          borderWidth: 3,
                          borderRadius: 20 }}/> 
                 </View>
                 </View>
        
           </LinearGradient>
               
                </View>
        );
      }
    }
    
    const styles = StyleSheet.create({

        textDesign:{
          fontSize:75,
          fontStyle:'italic',
          textShadowColor:'black',
          color:"white",
          fontWeight:'500',
          marginTop:5,
          textShadowRadius:5
        },
        linearGradient: {
          width:375,
          height:800,
        },
        btn:{
          color:"white",
          height:50,
          width:50
      
        },  container: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft:35
      },
      buttonContainer: {
          flex: 1,
      }
      
    
    
});

export default ResultScreen;