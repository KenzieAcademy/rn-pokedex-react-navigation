import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const PokeCard = ({ pokemon, handlePress }) => {
  const { cardStyle, textStyle } = styles;
  return (
    <View style={cardStyle}>
      <Text style={textStyle}>#{pokemon.id}</Text>
      <Text style={textStyle}>{pokemon.name}</Text>
      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={{ width: 50, height: 50, alignSelf: "center" }}
      />
      <Button title="open" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 100,
    width: 100,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5
  },
  textStyle: {
    fontSize: 15
  }
});

export default PokeCard;
