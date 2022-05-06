import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import RequirementCheck from "./RequirementCheck";

function VegSettings(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.veganAndVegetarian}>Vegan and Vegetarian</Text>
        <RequirementCheck style={styles.requirementCheck}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck2}></RequirementCheck>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 315,
    height: 109,
    backgroundColor: "#E6E6E6"
  },
  veganAndVegetarian: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: 10,
    marginLeft: 9
  },
  requirementCheck: {
    width: 90,
    height: 23,
    marginTop: 9,
    marginLeft: 9
  },
  requirementCheck2: {
    width: 90,
    height: 23,
    marginTop: 5,
    marginLeft: 9
  }
});

export default VegSettings;
