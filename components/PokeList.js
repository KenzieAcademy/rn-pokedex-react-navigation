import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PokeCard from "./PokeCard";
import pokemonList from "../assets/pokemon_1-150.json";

export default class PokeList extends React.Component {
  state = { pokemonList };

  static navigationOptions = {
    title: "Pokedex"
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.containerStyle}>
          {this.state.pokemonList.map(pokemon => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 15,
    paddingBottom: 75
  }
});
