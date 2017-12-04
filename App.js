import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import VideoList from './src/components/VideoList';
import ViewVideo from './src/components/ViewVideo';

const options = {
  header: null
};

const AppNav = StackNavigator({
      VideoList: {
        screen: VideoList
      },
      ViewVideo: {
        screen: ViewVideo
      }
  },
  {
      navigationOptions: options
  }
);


AppRegistry.registerComponent('youtube_video', () => AppNav);
