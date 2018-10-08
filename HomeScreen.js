import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import CountdownCircle from 'react-native-countdown-circle';
Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);



class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    
}
  constructor(props) {
    super(props)

    this.state = ({
      count: 0,
      count2: 1 ,
      randCount: Math.ceil((Math.random()*10 + 1)),
      süre:false
  
    })
  
  }
  
  

  
changeColor = (count) => {
 
if(count <=9 ){
  color="#37ecba";
return color;
}
else if(9 < count <= 19){
  color="#a18cd1";
  return color;
}
}

changeColor2 = (count) =>{
  if(count <=9 ){
    color="#192f6a";
  return color;
  }
  else if(9 < count <= 19){
    color="#fbc2eb";

    return color;
  }
}

methodum = () =>{
  
  this.setState({
  count: this.state.count+1 })
    if(this.state.count===2){
    this.setState({
    süre:this.state.süre=true})
    this.props.navigation.navigate('After20');
    }
    console.log("adamsın");
    randCount= this.state.randCount=Math.ceil(Math.random()*10+1);
    this.setState({
    count2: this.state.count2=1 })
    
}

pressAndAddCount = () =>{

  
  this.setState({
    count2: this.state.count2+1
    }); 

 if(this.state.randCount===this.state.count2){
   this.methodum();
    
 }else{
  console.log(this.state.count2)
  console.log("Devam")
 }

};

countDown=(a)=>{
if(this.state.randCount===1){
  if(this.state.süre===true){
    return 750;
  }
  return 0.5;
}
else if(this.state.randCount===2){
  if(this.state.süre===true){
    return 750;
  }
  return 50;
}
else if(this.state.randCount===3){
  if(this.state.süre===true){
    return 750;
  }
  return 51;
}
else if(this.state.randCount===4){
  if(this.state.süre===true){
    return 750;
  }
  return 52;
}
else if(this.state.randCount===5){
  if(this.state.süre===true){
    return 750;
  }
  return 53;
}
else if(this.state.randCount===6){
  if(this.state.süre===true){
    return 750;
  }
  return 15;
}
else if(this.state.randCount===7){
  if(this.state.süre===true){
    return 750;
  }
  return 54;
}
else if(this.state.randCount===8){
  if(this.state.süre===true){
    return 750;
  }
  return 55;
}
else if(this.state.randCount===9){
  if(this.state.süre===true){
    return 750;
  }
  return 56;
}
else if(this.state.randCount===10){
  if(this.state.süre===true){
    return 750;
  }
  return 57;
}

else{
  if(this.state.süre===true){
    return 750;
  }
  return 58;
}




}

  render() {
    return (
  
 <View>
    <LinearGradient colors={[this.changeColor(this.state.count), this.changeColor2(this.state.count)]} style={styles.linearGradient}>
      <View id ="ENDIŞ">

        <View id="SAYININ YAZDIGI VİEW" style={{
        flexDirection: 'row',alignItems: 'center',backgroundColor:"transparent" }} >
        <CountdownCircle
            seconds={this.countDown(this.state.randCount)}
            radius={30}
            borderWidth={8}
            color="#ff003f"
            bgColor="#fff"
            style={{marginLeft:20}}
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={() => this.props.navigation.navigate('Result')}
        />
         <Text style ={styles.textDesign}>{this.state.count}</Text>
  
         </View>
     

  <Button
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
   
    
        </View>  
     </LinearGradient>

     
   
 </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({

  textDesign:{
    fontSize:75,
    fontStyle:'italic',
    textShadowColor:'black',
    color:"white",
    fontWeight:'500',
    marginTop:5,
    textShadowRadius:5,
    marginLeft:95
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