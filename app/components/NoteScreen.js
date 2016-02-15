import React, {
  Text,
  View,
    StyleSheet,
  TouchableOpacity,
  Navigator
} from 'react-native';

export default class NoteScreen extends React.Component{
  render(){
    return(
      <View>
        <Text>Create Note Screen!</Text>
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
