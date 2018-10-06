import React, { Component } from "react";
import { View, Text } from "react-native";
import R from "res/R";

class PlaylistsScreen extends Component {
  static navigationOptions = {
    title: "Playlists"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{R.strings.playlists.title}</Text>
      </View>
    );
  }
}

export default PlaylistsScreen;
