import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Logo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.identify}>Identify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  identify: {
    fontFamily: "work-sans-700",
    color: "rgba(66,56,51,1)",
    fontSize: 64
  }
});

export default Logo;
