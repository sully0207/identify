import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Allergens(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect3}>
        <View style={styles.textStack}>
          <Text style={styles.text}>Allergens</Text>
          <Text style={styles.fat2}>
            Wheat, Barley, Oats, Milk, Peanuts, Soybeans,
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect3: {
    width: 315,
    height: 58,
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
  fat2: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  textStack: {
    width: 295,
    height: 31,
    marginTop: 10,
    marginLeft: 10
  }
});

export default Allergens;
