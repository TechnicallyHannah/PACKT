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
   ToolbarAndroid
 } from 'react-native';


 import SimpleButton from './app/components/SimpleButton';
 import NoteScreen from './app/components/NoteScreen';
 import HomeScreen from './app/components/HomeScreen';

 class PACKT extends React.Component {
   render(){
     return(
       <View style={styles.container}>
        <ToolbarAndroid
          title="React Notes"
          style={styles.toolbar}
          actions={[{title: 'Create'},{title: 'Delete'}]}
          onActionSelected={this.onActionSelected}
         />
        <HomeScreen/>
      </View>
     );
   }
   onActionSelected(position){
     if (position === 0) { // index of 'Settings'
       console.log("create!");
     }
   }
 }


 var styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   toolbar: {
     backgroundColor: '#e9eaed',
     height: 56,
   }
 });
AppRegistry.registerComponent('PACKT', () => PACKT);
