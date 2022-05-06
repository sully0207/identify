import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialFixedLabelTextbox from "./MaterialFixedLabelTextbox";
import Icon from "react-native-vector-icons/Entypo";
import KeywordItem from "./KeywordItem";

function Keywords(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.text}>Keywords</Text>
        <View style={styles.materialFixedLabelTextboxRow}>
          <MaterialFixedLabelTextbox
            style={styles.materialFixedLabelTextbox}
          ></MaterialFixedLabelTextbox>
          <Icon name="plus" style={styles.icon}></Icon>
        </View>
        <KeywordItem style={styles.keywordItem}></KeywordItem>
        <KeywordItem style={styles.keywordItem2}></KeywordItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 315,
    height: 384,
    backgroundColor: "#E6E6E6"
  },
  text: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 24,
    marginTop: 10,
    marginLeft: 10
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 252
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft: 12,
    marginTop: 10
  },
  materialFixedLabelTextboxRow: {
    height: 43,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 11
  },
  keywordItem: {
    height: 47,
    width: 315,
    marginTop: 22
  },
  keywordItem2: {
    height: 47,
    width: 315
  }
});

export default Keywords;
