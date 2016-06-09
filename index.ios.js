/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class NativeStarter extends Component {
  render() {
    return (
      <Image 
      style={styles.container}
      source={require('./images/background.jpg')}
      >
        <Text style={styles.welcome}>
          Time to build a React Native app!
        </Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    width: null,
    height: null,
  },
  welcome: {
    flex: 1,
    padding: 40,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NativeStarter', () => NativeStarter);
