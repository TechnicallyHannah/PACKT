import React,{
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text onPress={()=> setState({text:' Native!'})}>{this.props.text + this.state.appendText}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1
    justifyContent:'center',
    alignItems:'center',
  }

})
