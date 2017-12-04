import React, { Component } from 'react';
import { View } from 'react-native';

class CardWrapper extends Component {
	render() {
		return (
			<View style={Styles.WrapperStyle}>
      {this.props.children}
      </View>
    );
	}
}
const Styles = {
    WrapperStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowRadius: 2,
      elevation: 5,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    }
};

export default CardWrapper;
