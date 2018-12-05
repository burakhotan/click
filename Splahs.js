import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';


class Splash extends Component {
    static navigationOptions = {
        header: null
    }
    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('First');
        }, 4000);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0E0E0E', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 450, height: 700 }}
                    source={require('../images/load.gif')}
                />
            </View>
        );
    }
}

export default Splash;