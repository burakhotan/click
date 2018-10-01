import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';


export default class sonucekrani extends React.Component {
    
    
    
    
    
    render() {
        return (
      
     <View>
        <LinearGradient colors={[this.renkDegis(this.state.count), this.renkDegis2(this.state.count)]} style={styles.linearGradient}>
          <View id ="ENDIŞ">
    
            <View id="SAYININ YAZDIGI VİEW" style={{alignItems: 'center',backgroundColor:"transparent" }} >
        
             <Text style ={styles.textDesign}>{this.state.count}</Text>
      
             </View>
         
    
      <Button id="asd"
      title={this.state.randCount.toString()}
      onPress={this.pressAndAddCount}
      titleStyle={{ fontWeight: "700" }}
      buttonStyle={{
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 60,
        height: 60,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 20,
       // marginTop:(Math.random()*10+1)*45,
       // marginLeft:(Math.random()*10+1)*25
      }}/>
     
    
        <LinearGradient colors ={["#30cfd0","#330867"]} style={{width:300,marginLeft:30,height:180,borderRadius:5,borderColor:"black",borderWidth:5}}>
          <Text style ={{
                        fontSize:35,
                        color:"white",
                        fontStyle:"italic",
                        textShadowColor:"black",
                        textShadowRadius:15,
                        marginLeft:35}}> {this.state.yandın}</Text>
          <Text style ={{
                        fontSize:25,
                        color:"white",
                        fontStyle:"italic",
                        textShadowColor:"black",
                        textShadowRadius:15,
                        marginLeft:45}}>Score:{this.state.count}</Text>
       <View style={styles.container}>
             <View style={styles.buttonContainer}>
                   <Button 
                      title="->"
                      color="#330867"
                      buttonStyle={{
                      backgroundColor: "#a1c4fd",
                      width: 50,
                      height: 50,
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
                      width: 50,
                      height: 50,
                      borderColor: "#c2e9fb",
                      borderWidth: 3,
                      borderRadius: 20 }}/> 
             </View>
             </View>
    
       </LinearGradient>
           
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

export default sonucekrani;