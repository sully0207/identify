import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Fail from "../components/Fail";

function ItemResult1(props) {
  return (
    <View style={styles.container}>
      <Fail style={styles.fail}></Fail>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  fail: {
    height: 287,
    width: 316,
    marginTop: 45,
    marginLeft: 30
  }
});

export default ItemResult1;
