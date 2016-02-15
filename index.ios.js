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

class PACKT extends React.Component {
  renderScene(route,navigator){
    switch(route.name){
      case'home':
        return(
          <View style={styles.container}>
            <SimpleButton onPress ={() => { navigator.push({
                  name:'createNote'
              });
            }}
              customText = "Create Note"
              />
          </View>
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

  },
  Title: function(route,navigator,index, navState){

  },
 }


var styles =  StyleSheet.create({
  container:{
    flex:1,
    justifyContent : 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('PACKT', () => PACKT);
