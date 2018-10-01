import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';





//15 den sonra ikili yap

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      count: 0,
      count2: 1 ,
      randCount: Math.ceil((Math.random()*10 + 1)),
      hata :"true",
      error : false,
      yandın: ""
     
    })

  }

renkDegis = (count) => {
  let choosen;
  switch(count){
    case 0: choosen = "#37ecba"; break;
    case 1: choosen = "#37ecba"; break;
    case 2: choosen = "#37ecba"; break;
    case 3: choosen = "#37ecba"; break;
    case 4: choosen = "#37ecba"; break;
    case 5: choosen = "#37ecba"; break;
    case 6: choosen = "#37ecba"; break;
    case 7: choosen = "#37ecba"; break;
    case 8: choosen = "#37ecba"; break;
    case 9: choosen = "#37ecba"; break;
   

    case 10: choosen = "#fa709a"; break;
    case 11: choosen = "#fa709a"; break;
    case 12: choosen = "#fa709a"; break;
    case 13: choosen = "#fa709a"; break;
    case 14: choosen = "#fa709a"; break;
    case 15: choosen = "#fa709a"; break;
    case 16: choosen = "#fa709a"; break;
    case 17: choosen = "#fa709a"; break;
    case 18: choosen = "#fa709a"; break;
    case 19: choosen = "#fa709a"; break;

    case 20: choosen = "red"; break;
    case 21: choosen = "red"; break;
    case 22: choosen = "red"; break;
    case 23: choosen = "red"; break;
    case 24: choosen = "red"; break;
    case 25: choosen = "red"; break;
    case 26: choosen = "red"; break;
    case 27: choosen = "red"; break;
    case 28: choosen = "red"; break;
    case 29: choosen = "red"; break;
    
    case 30: choosen = "green"; break;

    
    default:null;
  } 
  return choosen;
}
renkDegis2 = (count) =>{
  let choosen;
  switch(count){
    case 0: choosen = "#192f6a"; break;
    case 1: choosen = "#192f6a"; break;
    case 2: choosen = "#192f6a"; break;
    case 3: choosen = "#192f6a"; break;
    case 4: choosen = "#192f6a"; break;
    case 5: choosen = "#192f6a"; break;
    case 6: choosen = "#192f6a"; break;
    case 7: choosen = "#192f6a"; break;
    case 8: choosen = "#192f6a"; break;
    case 9: choosen = "#192f6a"; break;

    case 10: choosen = "#fee140"; break;
    case 11: choosen = "#fee140"; break;
    case 12: choosen = "#fee140"; break;
    case 13: choosen = "#fee140"; break;
    case 14: choosen = "#fee140"; break;
    case 15: choosen = "#fee140"; break;
    case 16: choosen = "#fee140"; break;
    case 17: choosen = "#fee140"; break;
    case 18: choosen = "#fee140"; break;
    case 19: choosen = "#fee140"; break;

    case 20: choosen = "red"; break;
    case 21: choosen = "red"; break;
    case 22: choosen = "red"; break;
    case 23: choosen = "red"; break;
    case 24: choosen = "red"; break;
    case 25: choosen = "red"; break;
    case 26: choosen = "red"; break;
    case 27: choosen = "red"; break;
    case 28: choosen = "red"; break;
    case 29: choosen = "red"; break;
    
    case 30: choosen = "green"; break;

    
    default:null;
  } 
  return choosen;
}
methodum = () =>{
  var sonsuz=0;
  while(sonsuz<=100){
  this.setState({
    count: this.state.count+1 })
    console.log("adamsın ");
    randCount= this.state.randCount=Math.ceil(Math.random()*10+1);
    this.setState({
    count2: this.state.count2=1 })
    sonsuz=sonsuz+1;
   
  }
}

clearTimer = () => {
  // Is our timer running?
  if (this.timerHandle) {
      // Yes, clear it
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
  }
};

setTimer = () => {
 switch(this.state.randCount){
   case 1 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER",count:this.state.count});
    console.log("1 yandın") 
    this.timerHandle = 0;
},500); break;
   case 2 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER",count:this.state.count });
    console.log("2 yandın") 
    this.timerHandle = 0;
},700);break;
   case 3 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER",count:this.state.count });
    console.log("3 yandın") 
    this.timerHandle = 0;
}, 1200);break;
   case 4 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER",count:this.state.count });
    console.log("4 yandınn abimm") 
    this.timerHandle = 0;
}, 2000);break;
   case 5 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER",count:this.state.count });
    console.log("5 yandınn abimm") 
    this.timerHandle = 0;
}, 2200);break;
   case 6 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER",count:this.state.count });
    console.log("6 yandınn abimm") 
    this.timerHandle = 0;
}, 2500);break;
   case 7 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER",count:this.state.count });
    console.log("7 yandınn abimm") 
    this.timerHandle = 0;
}, 3400);break;
   case 8 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER",count:this.state.count });
    console.log("8 yandınn abimm") 
    this.timerHandle = 0;
}, 4000);break;
   case 9 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER" });
    console.log("9 yandınn abimm") 
    this.timerHandle = 0;
}, 5200);break;
   case 10 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER" });
    console.log("10 yandınn abimm") 
    this.timerHandle = 0;
}, 5000);break;
   case 11 : this.timerHandle = setTimeout(() => {
    this.setState({ error: true,yandın:"GAME OVER" });
    console.log("11 yandınn abimm") 
    this.timerHandle = 0;

  
    
}, 5200);break;
    default : null;

  var sonuç = new LinearGradient( colors=["yellow","#330867"]);
    return sonuç;
 }
};

pressAndAddCount = () =>{
  this.setState({
    count2: this.state.count2+1
    }); 
  
   
  this.state.hata="false"
  if (this.state.randCount - this.state.count2 === this.state.randCount-1 ){
      if(this.state.hata = "false"){
          this.setTimer();
      }

  }

 if(this.state.randCount===this.state.count2){
   this.methodum();
   this.clearTimer();
  
    
 }else{
  console.log(this.state.count2)
   console.log("yandın")
 }

};
after15 = () => {
  if(this.state.count >= 1){
    var button= new Button({backgroundColor: "rgba(92, 99,216, 1)",
                            width:60,
                            height: 60,
                            borderColor: "white",
                            borderWidth: 3,
                            borderRadius: 20,
                            title:"qdfasd",
                            id:"efdsa"})
  
  return button;

  }

};


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

