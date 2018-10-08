import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { Button } from 'react-native-elements';
import CountdownCircle from 'react-native-countdown-circle';



class After20 extends React.Component {

    static navigationOptions = {
        header: null,
    
    }
    constructor(props) {
      super(props)
  
      this.state = ({
        count: 20,
        count2: 1 ,
        count3: 1 ,
        randCount: Math.ceil((Math.random()*10 + 1)),
        durum1: false,
        durum2: false
    
      })}

  


    methodum = () =>{
    if(this.state.durum1===true && this.state.durum2===true){
      
        this.setState({
        count: this.state.count+1 })
        console.log("adamsın ");
        randCount= this.state.randCount=Math.ceil(Math.random()*10+1);
        this.setState({
        count2: this.state.count2=1,
        count3: this.state.count3=1,
        durum1:this.state.durum1=false,
        durum2:this.state.durum2=false })
        
      }
    };

    pressAndAddCount2= () =>{
      this.setState({
        count3: this.state.count3+1,
        });
        console.log(this.state.count3)
        if(this.state.randCount===this.state.count3){
           this.fazlabasma2();
          this.setState({
            durum2 : this.state.durum2=true
            });
           
         console.log(this.state.durum2)
         this.methodum();
        }
       

    };

    pressAndAddCount = () =>{
      this.setState({
        count2: this.state.count2+1,
        }); 
        this.fazlabasma1();
        console.log(this.state.count2)
        if(this.state.randCount===this.state.count2){
          
          this.setState({
            durum1 :this.state.durum1= true
            });
            
            console.log(this.state.durum1) 
            this.methodum();
          } 
    };
        
    gerisayım=(a)=>{
      if(this.state.randCount===1){
        return 0.5;
      }
      else if(this.state.randCount===2){
        return 5;
      }
      else if(this.state.randCount===3){
        return 6;
      }
      else if(this.state.randCount===4){
        return 5;
      }
      else if(this.state.randCount===5){
        return 5;
      }
      else if(this.state.randCount===6){
        return 5;
      }
      else if(this.state.randCount===7){
        return 5;
      }
      else if(this.state.randCount===8){
        return 5;
      }
      else if(this.state.randCount===9){
        return 5;
      }
      else if(this.state.randCount===10){
        return 5;
      }else{
        return 5.5;
      }
      
      
    };

    fazlabasma1=()=>{
      if(this.state.count2 > this.state.randCount){
        this.props.navigation.navigate('Result')
      }
    

    };

    fazlabasma2=()=>{
    
      if(this.state.count3 > this.state.randCount){
        this.props.navigation.navigate('Result')
     }

    }; 
 
    render() {
        return (
      
    
     
    
            <LinearGradient colors ={["yellow","blue"]} style={{width:360,
             height:800,borderRadius:5,borderColor:"black",borderWidth:5}}>

             <View id="SAYININ YAZDIGI VİEW" style={{
        flexDirection: 'row',alignItems: 'center',backgroundColor:"transparent" }} >
        <CountdownCircle
            seconds={80}
            radius={30}
            borderWidth={8}
            color="#ff003f"
            bgColor="#fff"
            style={{marginLeft:20}}
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={() => console.log("dfasdf")}
        />
         <Text style ={styles.textDesign}>{this.state.count}</Text>
         </View>
           <View style={{flex:1,backgroundColor:"transparent",flexDirection: 'row'}}>
              <View style={{height:800,width:175,backgroundColor:"transparent"}}>
              <Button id="adsfasdf"
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
              marginTop:(Math.random()*10+1)*45,
              marginLeft:((Math.random()*10+1)*18)/2
  }}/>
              </View>

              <View style={{height:800,width:175,backgroundColor:"transparent"}}>
              <Button id="sadfe"
             title={this.state.randCount.toString()}
             onPress={this.pressAndAddCount2}
             titleStyle={{ fontWeight: "700" }}
             buttonStyle={{
             backgroundColor: "rgba(92, 99,216, 1)",
             width: 60,
             height: 60,
             borderColor: "white",
             borderWidth: 3,
             borderRadius: 20,
             marginTop:(Math.random()*10+1)*45,
             marginLeft:((Math.random()*10+1)*18)/2
  }}/>
              </View> 
            </View>
        
           </LinearGradient>
               
              
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
          marginLeft:65,
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

export default After20;