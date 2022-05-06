import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Ingredients(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.textStack}>
          <Text style={styles.text}>Ingredients</Text>
          <Text style={styles.ingredients4}>
            Rolled Oats, Sugar, Milk Chocolate (15%) (Sugar, Dried Milk, Cocoa
            Mass, Cocoa Butter, Dried Skimmed Milk, Emulsifier {"{"}Soy
            Lecithin}, Flavouring), Maize, Wheat Flour, Vegetable Oil
            (Sunflower, Palm), Peanuts (4%), Honey (3%), Invert Sugar Syrup,
            Glucose Syrup, Salt, Barley Malt Flavouring, Antioxidant (Ascorbyl
            Palmitate, Alpha Tocopherol), Skimmed Milk Powder, Soy Lecithin
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    width: 315,
    height: 132,
    backgroundColor: "#E6E6E6"
  },
  text: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12
  },
  ingredients4: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 12
  },
  textStack: {
    width: 295,
    height: 112,
    marginTop: 10,
    marginLeft: 10
  }
});

export default Ingredients;
