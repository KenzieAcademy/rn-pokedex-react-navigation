import React from "react";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import CommonBackground from "./CommonBackground";

export default (PokeModal = ({ navigation }) => {
  const { cardStyle, textStyle } = styles;
  const { name, id, types, sprites } = navigation.state.params.pokemon;

  return (
    <CommonBackground>
      <View style={cardStyle}>
        <Text style={textStyle}>#{id}</Text>
        <Text style={textStyle}>{name}</Text>
        <Image
          source={{ uri: sprites.front_default }}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        />
        <Text style={[textStyle, { marginBottom: 50 }]}>{`${
          types[0].type.name
        } ${
          // not all pokemon have a second type, so we must check if it exists
          types[1] ? types[1].type.name : ""
        }`}</Text>
        <Button onPress={() => navigation.goBack()} title="return" />
      </View>
    </CommonBackground>
  );
});

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 5
  },
  textStyle: {
    fontSize: 30
  }
});
