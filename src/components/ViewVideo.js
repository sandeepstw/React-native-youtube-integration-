import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import NavBar from '../common/NavBar';

class ViewVideo extends Component {
	render() {
    const videoId = this.props.navigation.state.params.vidid;
		const videoTitle = this.props.navigation.state.params.vidtitle;
		return (
            <View style={{ flex: 1 }}>
                <NavBar
                    navigator={this.props.navigation}
                    title={videoTitle}
                />
                <WebView
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                />
            </View>
        );
	}
}

export default ViewVideo;
