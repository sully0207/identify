import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSwitch from "./MaterialSwitch";

function RequirementCheck(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.materialSwitchRow}>
        <MaterialSwitch style={styles.materialSwitch}></MaterialSwitch>
        <Text style={styles.wheat}>Wheat</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  materialSwitch: {
    width: 45,
    height: 23
  },
  wheat: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginLeft: 6,
    marginTop: 3
  },
  materialSwitchRow: {
    height: 23,
    flexDirection: "row",
    flex: 1
  }
});

export default RequirementCheck;
