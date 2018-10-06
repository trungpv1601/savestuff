import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import RNFS from "react-native-fs";

export default class DownloadsScreen extends Component {
  constructor(props) {
    super(props);
    // console.log(RNFS.DocumentDirectoryPath);
    // console.log(RNBackgroundDownloader.directories.documents);
    // get a list of files and directories in the main bundle
    RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then(result => {
        console.log("GOT RESULT", result);
      });
  }

  static navigationOptions = {
    title: "Downloads"
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}
