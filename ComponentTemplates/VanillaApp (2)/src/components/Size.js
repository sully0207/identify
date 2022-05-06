import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Size(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.loremIpsum2Row}>
          <Text style={styles.loremIpsum2}>450g</Text>
          <Text style={styles.text}>45g</Text>
        </View>
        <View style={styles.netContentRow}>
          <Text style={styles.netContent}>Net Content</Text>
          <Text style={styles.perPortion}>Per Portion</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 315,
    height: 60,
    backgroundColor: "#E6E6E6"
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginLeft: 90
  },
  loremIpsum2Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 57,
    marginRight: 73
  },
  netContent: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12
  },
  perPortion: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginLeft: 77
  },
  netContentRow: {
    height: 15,
    flexDirection: "row",
    marginLeft: 52,
    marginRight: 64
  }
});

export default Size;
