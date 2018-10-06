import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import DownloadsScreen from './screens/DownloadsScreen';
import FilesScreen from './screens/FilesScreen';
import SettingsScreen from './screens/SettingsScreen';
import PlaylistsScreen from './screens/PlaylistsScreen';
import DetailsScreen from './screens/DetailsScreen';

const MAP_ICONS = {
  Downloads: 'download',
  Files: 'music',
  Playlists: 'list',
  Settings: 'settings'
};

const DownloadsStack = createStackNavigator({
  Downloads: { screen: DownloadsScreen },
  Details: { screen: DetailsScreen },
});

const FilesStack = createStackNavigator({
  Files: { screen: FilesScreen },
  Details: { screen: DetailsScreen },
});

const PlaylistsStack = createStackNavigator({
  Playlists: { screen: PlaylistsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

export default createBottomTabNavigator(
  {
    Downloads: { screen: DownloadsStack },
    Files: { screen: FilesStack },
    Playlists: { screen: PlaylistsStack },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        console.log(navigation);
        const { routeName } = navigation.state;

        return <Feather name={MAP_ICONS[routeName]} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#8D8D92',
    },
  }
);
