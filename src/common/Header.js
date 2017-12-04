import  React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
	render() {
		return (
      <View style={Styles.HeaderStyle}>
      <Text style={Styles.HeaderText}>{ this.props.HeaderText }</Text>
      </View>
    );
  }
}

const Styles = {

	HeaderStyle: {
		justifyContent: 'center',
		alignSelf: 'stretch',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		elevation: 2,
		backgroundColor: '#ff0000'
},
HeaderText: {
	fontSize: 20,
	color: '#FFFFFF'
}

};

export default Header;
