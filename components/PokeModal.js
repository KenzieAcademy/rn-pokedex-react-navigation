import React from "react";
import { Text, View, Button } from "react-native";

export default class PokeModal extends React.Component {
  render() {
    return (
      <View>
        <Text>I am a pokemon</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
