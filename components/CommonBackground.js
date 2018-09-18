import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default class CommonBackground extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/pokebackground.png")}
        style={styles.backgroundContainer}
        imageStyle={styles.background}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
