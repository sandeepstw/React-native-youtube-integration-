import React, { Component } from 'react';
import { View } from 'react-native';

class CardInner extends Component {
	render() {
		return (
			<View style={Styles.CardStyles}>
      {this.props.children}
      </View>
    );
	}
}
const Styles = {
  CardStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};
export default CardInner;
