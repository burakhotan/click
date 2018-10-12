import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, AsyncStorage} from 'react-native';
import { LinearGradient } from 'expo';
import { Button } from 'react-native-elements';
import CountdownCircle from 'react-native-countdown-circle';
import { BackHandler } from 'react-native';
Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
import PopupDialog from 'react-native-popup-dialog';





class After20 extends React.Component {

    static navigationOptions = {
        header: null,
    
    }

    componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', function() {
      
          return true;
        });
  }


    constructor(props) {
      super(props)
  
      this.state = ({
        count: 20,
        count2: 1 ,
        count3: 1 ,
        randCount: Math.ceil((Math.random()*10 + 1)),
        durum1: false,
        durum2: false,
        highScore:0,
        score:20
      })}
    
      data=()=>{
       
       
       this.setState({
        score: this.state.count
        });

        if(this.state.score>this.state.highScore){
          this.setState({
            highScore: this.state.count
            });

        }
        else{
          console.log(this.state.score);
        }

      }
      
        


    changeColor = (count) => {
 
        let choosen;
        switch(count){
          case 20: choosen = "#9795f0"; break;        
          case 30: choosen = "#feada6"; break;
          case 40: choosen = "#a8caba"; break;
          case 50: choosen = "#96fbc4"; break;
          case 60: choosen = "#e8198b"; break;
          case 70: choosen = "#c7eafd"; break;
          case 80: choosen = "#9795f0"; break;
          case 90: choosen = "#fdcbf1"; break;
          case 100: choosen = "#a18cd1"; break;


          default:null;
        } 
        return choosen;

    };
    changeColor2 = (count) =>{
          let choosen;
          switch(count){
            case 20: choosen = "#fbc8d4"; break;
            case 30: choosen = "#f5efef"; break;
            case 40: choosen = "#5d4157"; break;
            case 50: choosen = "#f9f586"; break;
            case 60: choosen = "#c7eafd"; break;
            case 70: choosen = "#9face6"; break;
            case 80: choosen = "#fbc8d4"; break;
            case 90: choosen = "#e6dee9"; break;
            case 100: choosen = "#a18cd1"; break;
            default:null;
          } 
          return choosen;
  
    };

    methodum = () =>{
    if(this.state.durum1===true && this.state.durum2===true){
      
        this.setState({
        count: this.state.count+1 })
        console.log("adamsın ");
        console.log(this.state.count)
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
        this.extraPress2();
 
        console.log(this.state.count3)
        if(this.state.randCount===this.state.count3){

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
        this.extraPress1();
      
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

    extraPress1=()=>{
      if(this.state.count2 > this.state.randCount){
        this.data();
        this.popupDialog.show();
      }
    

    };

    extraPress2=()=>{
    
      if(this.state.count3 > this.state.randCount){
        this.props.navigation.navigate('Result')
     }

    }; 
return=()=>{
  this.props.navigation.navigate('First');
  
  
}

    render() {
        return (
      
    
     
    
            <LinearGradient colors ={[this.changeColor(this.state.count), this.changeColor2(this.state.count)]} style={styles.linearGradient}>
                <PopupDialog
               dismissOnTouchOutside={false}
                 ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                  <View>
                  <TouchableOpacity style ={styles.containers}
                    onPress={this.return}
                 >
                 <Image
                     style={{width: 450, height: 200,marginTop:10,marginRight:50}}
                     source={require('../images/play.png')}
                         />
                 </TouchableOpacity>
                </View>
                <View>
                  <Text>High Score:{this.state.highScore}
                        Score: {this.state.score}</Text>
                </View>
                </PopupDialog>
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
             // marginTop:(Math.random()*10+1)*45,
             //marginLeft:((Math.random()*10+1)*18)/2
  }}/>
              </View>
              <View style={{height:750,width:1,backgroundColor:"black",opacity:1}}>
              
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
            // marginTop:(Math.random()*10+1)*45,
            // marginLeft:((Math.random()*10+1)*18)/2
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
          marginLeft:75,
          textShadowRadius:5
        },
        linearGradient: {
          width:360,
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