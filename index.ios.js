/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';


import SimpleButton from './app/components/SimpleButton';
import NoteScreen from './app/components/NoteScreen';
import HomeScreen from './app/components/HomeScreen';

class PACKT extends React.Component {
  renderScene(route,navigator){
    switch(route.name){
      case'home':
        return(
        <HomeScreen/>
        );
        case 'createNote':
        return(
          <NoteScreen/>
        )
    }
  }
  render(){
    return(
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={ NavigationBarRouteMapper}
          />
        }
      />
    );
  }
}

 var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState){
    switch (route.name) {
      case 'createNote':
      return(
        <SimpleButton onPress={ ()=> navigator.pop() }
          customText='Back'
          />
      );
        break;
      default:
        return null;
    }
  },
  RightButton: function(route,navigator,index, navState){
    switch (route.name) {
    case 'home':
    return(
      <SimpleButton onPress={ ()=> {
          navigator.push({
            name: 'createNote'
          });
        }}
        customText='Create Note'
        />
    );
    break;
    default:
      return null;
    }
  },
  Title: function(route,navigator,index, navState){
    switch (route.name) {
      case 'home':
      return(
        <Text>React Notes</Text>
      );
      case 'createNote':
      return(
        <Text> Create Note </Text>
      );
        break;
      default:
        return null;
    }

  },
};
AppRegistry.registerComponent('PACKT', () => PACKT);
