import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonstyles}>
        <Text style={styles.buttonTextstyle}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {

buttonstyles: {
  flex: 1,
  alignSelf: 'stretch',
  borderRadius: 4,
  borderColor: '#000',
  borderWidth: 1,
  backgroundColor: '#ff0000'
},
buttonTextstyle: {
  fontSize: 16,
  color: '#FFF',
  paddingTop: 10,
  paddingBottom: 10,
  alignSelf: 'center',
  fontWeight: '600'
}

};


export default Button;
