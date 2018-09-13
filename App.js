import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import PokeList from "./components/PokeList";
import LandingScreen from "./components/LandingScreen";

const RootStack = createStackNavigator(
  {
    Home: LandingScreen,
    List: PokeList
  },
  { initialRouteName: "Home" }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1
  }
});
