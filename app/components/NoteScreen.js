import React, {
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

export default class NoteScreen extends React.Component{
  render(){
    return(
      <View collapsable={false} style={styles.container}>
        <TextInput
          ref="title"
          placeholder="Untitled"
          style={styles.titleBox}
          autoFocus={true}
          onEndEditing={(text) =>{this.refs.body.focus()}}/>
        <TextInput
          ref="body"
          multiline={true}
          placeholder="Start Typing"
          style={styles.bodyBox}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:64
  },
  titleBox:{
    height: 40,
    borderWidth: 2,
  },
  bodyBox:{
    flex :1,
    borderWidth:10
  }
});
