import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import KeyAllergenCheck from "../components/KeyAllergenCheck";
import VegSettings from "../components/VegSettings";
import Keywords from "../components/Keywords";

function Preferences(props) {
  return (
    <View style={styles.container}>
      <KeyAllergenCheck style={styles.keyAllergenCheck}></KeyAllergenCheck>
      <VegSettings style={styles.vegSettings}></VegSettings>
      <Keywords style={styles.keywords}></Keywords>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  keyAllergenCheck: {
    height: 768,
    width: 315,
    marginTop: 30,
    alignSelf: "center"
  },
  vegSettings: {
    height: 109,
    width: 315,
    marginTop: 20,
    marginLeft: 30
  },
  keywords: {
    height: 384,
    width: 315,
    marginTop: 21,
    marginLeft: 30
  }
});

export default Preferences;
