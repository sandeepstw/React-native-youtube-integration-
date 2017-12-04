import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, ScrollView } from 'react-native';
import CardWrapper from '../common/CardWrapper';
import CardInner from '../common/CardInner';
import Button from '../common/Button';

const DOMParser = require('xmldom').DOMParser;

class VideoList extends Component {
  state = { videos: [], }
  componentWillMount() {
    const getXMLData = (listdata) => {
       const parseData = new DOMParser().parseFromString(listdata, 'text/xml');
       const allVideoTitle = parseData.getElementsByTagName('title');
       const allVideoId = parseData.getElementsByTagName('yt:videoId');
       const allThumbnails = parseData.getElementsByTagName('media:thumbnail');
	/* define a new array */

       const finalArray = [];

/* push all items in one array */

       for (const i = 0; i < allVideoId.length; i++) {
      finalArray.push({
          title: allVideoTitle[i].textContent,
          id: allVideoId[i].textContent,
          thumbnail: allThumbnails[i].getAttribute('url')
        });
      }
      return finalArray;
    };

  /* Now make url of youtube video smal feed */
  const url = 'http://www.youtube.com/feeds/videos.xml?playlist_id=LLA34Z3lq8FozSQzDHsSLcmQ';

  /* now its time to fetch data from url */

  fetch(url)
  .then(Data => Data.text())
  /* now we will run console.log to check if data coming after fetch */
  .then(DataText => this.setState({ videos: getXMLData(DataText) }));
  }
  renderNavBar() {
      return (
          <View style={styles.navBar}>
              <TouchableOpacity style={styles.logo} >
                  <Text style={styles.text}>Our Videos</Text>
              </TouchableOpacity>
          </View>
      );
  }
  renderthumbnails() {
    return this.state.videos.map(video =>
      <CardWrapper key={video.id}>
        <CardInner>
            <View>
                <Text>{video.title}</Text>
            </View>
        </CardInner>
        <Image
        resizeMode={Image.resizeMode.cover}
        style={{ height: 280, width: null }}
        source={{ uri: video.thumbnail }}
        />
        <CardInner>
            <Button 
              onPress={() => this.props.navigation.navigate('ViewVideo', { vidid: video.id })}
            >
                View
            </Button>
        </CardInner>
      </CardWrapper>
    );
  }


  render() {
    return (
      <View>
          { this.renderNavBar() }
          <ScrollView>
              {this.renderthumbnails()}
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarStyle: {
      backgroundColor: '#ff0000'
  },
  navBar: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ff0000',
      paddingHorizontal: 25
  },
  text: {
      color: '#ffffff',
      fontWeight: '700'
  },
  logo: {
      paddingTop: 15,
      paddingBottom: 15
  },
});

export default VideoList;
