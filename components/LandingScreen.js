import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";

export default (LandingScreen = ({ navigation }) => {
  const { containerStyle, titleStyle, imageStyle, buttonStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Welcome to the Wonderful World of Pokemon!</Text>
      <Image source={require("../assets/pokeball.png")} style={imageStyle} />
      <Button
        style={buttonStyle}
        title="Explore"
        onPress={() => navigation.navigate("List")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    margin: 20,
    fontSize: 18,
    textAlign: "center"
  },
  imageStyle: {
    height: 150,
    width: 150,
    margin: 50
  },
  buttonStyle: {
    margin: 50
  }
});
