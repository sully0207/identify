import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function KeywordItem(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.exampleWordRow}>
          <Text style={styles.exampleWord}>Example Word</Text>
          <Icon name="trash" style={styles.icon2}></Icon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect2: {
    width: 315,
    height: 47,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    flexDirection: "row"
  },
  exampleWord: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 14
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 162
  },
  exampleWordRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 10,
    marginTop: 1
  }
});

export default KeywordItem;
