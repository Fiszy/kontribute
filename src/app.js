import React, {Component} from 'react';
import {View} from  'react-native';
import {RootStack} from './routing/RootStack';
import SplashScreen from "react-native-splash-screen";

class App extends Component {
    componentDidMount(){
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <RootStack />
            </View>
        );
    }
}

export default App;
