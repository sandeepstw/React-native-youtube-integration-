import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import NavBar from '../common/NavBar';

class ViewVideo extends Component {
	render() {
    const videoId = this.props.navigation.state.params.vidid;
		return (
            <View style={{ flex: 1 }}>
                <NavBar 
                    navigator={this.props.navigation} 
                    title='Video Details'
                />
                <WebView
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                />
            </View>
        );
	}
}

export default ViewVideo;
