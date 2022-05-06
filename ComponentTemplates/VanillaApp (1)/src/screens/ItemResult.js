import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Success from "../components/Success";
import Nutrition from "../components/Nutrition";
import Ingredients from "../components/Ingredients";
import Allergens from "../components/Allergens";
import Size from "../components/Size";
import Veg from "../components/Veg";

function ItemResult(props) {
  return (
    <View style={styles.container}>
      <View style={styles.loremIpsum1Row}>
        <Text style={styles.loremIpsum1}>No interactions found</Text>
        <Success style={styles.success}></Success>
      </View>
      <Nutrition style={styles.nutrition}></Nutrition>
      <Ingredients style={styles.ingredients}></Ingredients>
      <Allergens style={styles.allergens}></Allergens>
      <Size style={styles.size}></Size>
      <Veg style={styles.veg}></Veg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    height: 0,
    width: 0,
    opacity: 0
  },
  success: {
    height: 285,
    width: 315,
    marginLeft: 10
  },
  loremIpsum1Row: {
    height: 285,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 21,
    marginRight: 29
  },
  nutrition: {
    width: 315,
    height: 205,
    marginTop: 22,
    marginLeft: 31
  },
  ingredients: {
    height: 132,
    width: 315,
    marginTop: 18,
    marginLeft: 34
  },
  allergens: {
    height: 58,
    width: 315,
    marginTop: 19,
    marginLeft: 34
  },
  size: {
    height: 60,
    width: 315,
    marginTop: 16,
    marginLeft: 34
  },
  veg: {
    height: 82,
    width: 315,
    marginTop: 20,
    marginLeft: 34
  }
});

export default ItemResult;
