import React, {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style ={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
