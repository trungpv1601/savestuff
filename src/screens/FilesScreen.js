import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class FilesScreen extends Component {
    static navigationOptions = {
        title: "Files"
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Files</Text>
                <Button
                title="Go to Settings"
                onPress={() => this.props.navigation.navigate('Settings')}
                />
                <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}