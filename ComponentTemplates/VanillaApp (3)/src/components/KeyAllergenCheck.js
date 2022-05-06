import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import RequirementCheck from "./RequirementCheck";

function KeyAllergenCheck(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.keyAllergens}>Key Allergens</Text>
        <Text style={styles.loremIpsum}>Cereals containing gluten</Text>
        <RequirementCheck style={styles.requirementCheck}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck1}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck2}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck5}></RequirementCheck>
        <Text style={styles.treeNuts}>Tree nuts</Text>
        <RequirementCheck style={styles.requirementCheck4}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck3}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck9}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck8}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck7}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck6}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck10}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck11}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck12}></RequirementCheck>
        <Text style={styles.otherAllergens}>Other Allergens</Text>
        <RequirementCheck style={styles.requirementCheck13}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck14}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck15}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck16}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck17}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck18}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck19}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck20}></RequirementCheck>
        <RequirementCheck style={styles.requirementCheck21}></RequirementCheck>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  rect: {
    width: 315,
    height: 768,
    backgroundColor: "#E6E6E6"
  },
  keyAllergens: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: 10,
    marginLeft: 6
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 5
  },
  requirementCheck: {
    height: 23,
    width: 90,
    marginTop: 14,
    marginLeft: 14
  },
  requirementCheck1: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck2: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck5: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  treeNuts: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 10
  },
  requirementCheck4: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck3: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck9: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck8: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck7: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck6: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck10: {
    height: 23,
    width: 90,
    marginTop: 4,
    marginLeft: 14
  },
  requirementCheck11: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  requirementCheck12: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 14
  },
  otherAllergens: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 10
  },
  requirementCheck13: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 10
  },
  requirementCheck14: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 10
  },
  requirementCheck15: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 10
  },
  requirementCheck16: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 10
  },
  requirementCheck17: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 10
  },
  requirementCheck18: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 10
  },
  requirementCheck19: {
    height: 23,
    width: 90,
    marginTop: 4,
    marginLeft: 10
  },
  requirementCheck20: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 10
  },
  requirementCheck21: {
    height: 23,
    width: 90,
    marginTop: 5,
    marginLeft: 10
  }
});

export default KeyAllergenCheck;
