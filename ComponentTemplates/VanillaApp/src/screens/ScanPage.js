import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function ScanPage(props) {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo}></Logo>
      <Text style={styles.readyToScanItem}>Ready to scan item</Text>
      <Icon name="cellphone-wireless" style={styles.icon}></Icon>
      <Text style={styles.loremIpsum1}>Error - This is an example error</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logo: {
    height: 76,
    width: 246,
    marginTop: 45,
    marginLeft: 64
  },
  readyToScanItem: {
    fontFamily: "roboto-regular",
    color: "rgba(128,128,128,1)",
    fontSize: 16,
    marginTop: 235,
    marginLeft: 120
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    width: 40,
    height: 43,
    marginTop: -89,
    alignSelf: "center"
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,0,0,1)",
    marginTop: 52,
    marginLeft: 93
  }
});

export default ScanPage;
