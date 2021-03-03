/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

class KontributeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <App />
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent(appName, () => KontributeApp);
