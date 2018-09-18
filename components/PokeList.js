import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import PokeCard from "./PokeCard";
import CommonBackground from "./CommonBackground";
import pokemonList from "../assets/pokemon_1-150.json";

export default class PokeList extends React.Component {
  state = { pokemonList };

  static navigationOptions = {
    title: "Pokedex"
  };

  render() {
    return (
      <CommonBackground>
        <ScrollView>
          <View style={styles.containerStyle}>
            {this.state.pokemonList.map(pokemon => (
              <PokeCard
                key={pokemon.id}
                pokemon={pokemon}
                handlePress={() =>
                  this.props.navigation.navigate("PokeModal", { pokemon })
                }
              />
            ))}
          </View>
        </ScrollView>
      </CommonBackground>
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
