import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import { Button } from 'react-native-elements';
import CountdownCircle from 'react-native-countdown-circle';
import { BackHandler } from 'react-native';
Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
import PopupDialog from 'react-native-popup-dialog';
import data from './data'
import { Vibration } from 'react-native';




class After40 extends React.Component {

  static navigationOptions = {
    header: null,

  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', function () {

      return true;
    });
  }

  constructor(props) {
    super(props)

    this.state = ({
      count: 20,
      count2: 1,
      count3: 1,
      randCount: Math.ceil((Math.random() * 10 + 1)),
      durum1: false,
      durum2: false,
      highScore: 0,
      score: 20
    })
  }


  changeColor = (count) => {

    let choosen;
    switch (count) {
      case 20: choosen = "#9795f0"; break;
      case 30: choosen = "#feada6"; break;
      case 40: choosen = "#a8caba"; break;
      case 50: choosen = "#96fbc4"; break;
      case 60: choosen = "#e8198b"; break;
      case 70: choosen = "#c7eafd"; break;
      case 80: choosen = "#9795f0"; break;
      case 90: choosen = "#fdcbf1"; break;
      case 100: choosen = "#a18cd1"; break;


      default: null;
    }
    return choosen;

  };
  changeColor2 = (count) => {
    let choosen;
    switch (count) {
      case 20: choosen = "#fbc8d4"; break;
      case 30: choosen = "#f5efef"; break;
      case 40: choosen = "#5d4157"; break;
      case 50: choosen = "#f9f586"; break;
      case 60: choosen = "#c7eafd"; break;
      case 70: choosen = "#9face6"; break;
      case 80: choosen = "#fbc8d4"; break;
      case 90: choosen = "#e6dee9"; break;
      case 100: choosen = "#a18cd1"; break;
      default: null;
    }
    return choosen;

  };

  methodum = () => {
    if (this.state.durum1 === true && this.state.durum2 === true) {

      this.setState({
        count: this.state.count + 1
      })

      Vibration.vibrate(500);

      console.log("adamsın ");
      var a = this.state.randCount;
      this.setState({
        randCount: this.state.randCount = Math.ceil(Math.random() * 10 + 1)
      })
      if (a === this.state.randCount) {
        this.setState({
          randCount: this.state.randCount = Math.ceil(Math.random() * 10 + 1)
        })
        console.log("Olduu")
      }
      this.setState({
        count2: this.state.count2 = 1,
        count3: this.state.count3 = 1,
        score: this.state.count + 1,
        durum1: this.state.durum1 = false,
        durum2: this.state.durum2 = false
      })

    }
  };

  pressAndAddCount2 = () => {
    this.setState({
      count3: this.state.count3 + 1,
    });
    this.extraPress();

    console.log(this.state.count3)
    if (this.state.randCount === this.state.count3) {

      this.setState({
        durum2: this.state.durum2 = true
      });

      console.log(this.state.durum2)
      this.methodum();
    }


  };

  pressAndAddCount = () => {
    this.setState({
      count2: this.state.count2 + 1,
    });
    this.extraPress();

    console.log(this.state.count2)
    if (this.state.randCount === this.state.count2) {

      this.setState({
        durum1: this.state.durum1 = true
      });

      console.log(this.state.durum1)
      this.methodum();
    }
  };

  countDown = (a) => {

    if (this.state.randCount === 2) {
      return 2.5;
    }
    else if (this.state.randCount === 3) {
      return 4;
    }
    else if (this.state.randCount === 4) {
      return 6;
    }
    else if (this.state.randCount === 5) {
      return 8;
    }
    else if (this.state.randCount === 6) {
      return 8.5;
    }
    else if (this.state.randCount === 7) {
      return 9;
    }
    else if (this.state.randCount === 8) {
      return 10;
    }
    else if (this.state.randCount === 9) {
      return 10.5;
    }
    else if (this.state.randCount === 10) {
      return 11;

    } else if (this.state.randCount === 11) {
      return 13;

    } else {
      return 5.5;
    }


  };

  extraPress = () => {
    if (this.state.count2 > this.state.randCount || this.state.count3 > this.state.randCount) {
      this.show();
      this.popupDialog.show();
    }


  };
  show = () => {
    data.push(this.state.count);
    data.sort(function (a, b) { return b - a });
    console.log(data);

    for (var i = 0; i < 1; i++) {
      this.setState({
        highScore: data[i]
      });
    }
    this.popupDialog.show()
    console.log(this.state.highScore + "show")
  }

  render() {
    return (

      <LinearGradient colors={[this.changeColor(this.state.count), this.changeColor2(this.state.count)]} style={styles.linearGradient}>
        <PopupDialog
          dismissOnHardwareBackPress={false}
          dismissOnTouchOutside={false}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
          <View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

              <Image style={{ width: 50, height: 50, marginTop: 25 }}
                source={require('../images/tac.png')} />
              <Text style={{ fontSize: 25 }}>{this.state.highScore}</Text>
              <Text style={{ marginTop: 30, fontSize: 35, marginBottom: 10 }}>{this.state.score}</Text>
            </View>

            <TouchableOpacity style={styles.containers}
              onPress={() => this.props.navigation.navigate('First')}
            >
              <Image
                style={{ width: 450, height: 200, marginTop: 10, marginRight: 50 }}
                source={require('../images/play.png')}
              />

            </TouchableOpacity>
          </View>

        </PopupDialog>
        <View id="SAYININ YAZDIGI VİEW" style={{
          flexDirection: 'row', alignItems: 'center', backgroundColor: "transparent"
        }} >
          <CountdownCircle
            seconds={this.countDown(this.state.randCount)}
            radius={30}
            borderWidth={8}
            color="#ff003f"
            bgColor="#fff"
            style={{ marginLeft: 20 }}
            textStyle={{ fontSize: 20 }}
            onTimeElapsed={this.show}
          />
          <Text style={styles.textDesign}>{this.state.count}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          <View style={{ height: 295, width: 375, backgroundColor: "transparent" }}>
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
                marginTop: (Math.random() * 10 + 1) * 20,
                marginLeft: (Math.random() * 10 + 1) * 25
              }} />
          </View>
          <View style={{ height: 1, width: 375, backgroundColor: "black", opacity: 1 }}>

          </View>
          <View style={{ height: 295, width: 375, backgroundColor: "transparent" }}>
            <Button
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
                marginTop: (Math.random() * 10 + 1) * 20,
                marginLeft: (Math.random() * 10 + 1) * 25
              }} />
          </View>
        </View>

      </LinearGradient>


    );
  }
}

const styles = StyleSheet.create({

  textDesign: {
    fontSize: 75,
    fontStyle: 'italic',
    textShadowColor: 'black',
    color: "white",
    fontWeight: '500',
    marginTop: 5,
    marginLeft: 75,
    textShadowRadius: 5
  },
  linearGradient: {
    width: 360,
    height: 800,
  },
  btn: {
    color: "white",
    height: 50,
    width: 50

  }, container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 35
  },
  buttonContainer: {
    flex: 1,
  }



});

export default After40;