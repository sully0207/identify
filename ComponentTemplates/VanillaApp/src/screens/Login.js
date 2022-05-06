import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import MaterialStackedLabelTextbox2 from "../components/MaterialStackedLabelTextbox2";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function Login(props) {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo}></Logo>
      <MaterialStackedLabelTextbox2
        style={styles.materialStackedLabelTextbox2}
      ></MaterialStackedLabelTextbox2>
      <MaterialStackedLabelTextbox2
        style={styles.materialStackedLabelTextbox22}
      ></MaterialStackedLabelTextbox2>
      <CupertinoButtonDanger
        caption="Log In"
        style={styles.cupertinoButtonDanger1}
      ></CupertinoButtonDanger>
      <Text style={styles.loremIpsum}>Forgot Password? Click here.</Text>
      <Text style={styles.loremIpsum1}>Error - This is an example error</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width: 246,
    height: 76,
    marginTop: 45,
    marginLeft: 65
  },
  materialStackedLabelTextbox2: {
    height: 60,
    width: 315,
    marginTop: 44,
    marginLeft: 30
  },
  materialStackedLabelTextbox22: {
    height: 60,
    width: 315,
    marginLeft: 30
  },
  cupertinoButtonDanger1: {
    height: 47,
    width: 315,
    backgroundColor: "rgba(66,56,51,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    marginTop: 26,
    marginLeft: 30
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 14,
    marginLeft: 98
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,0,0,1)",
    marginTop: -241,
    marginLeft: 30
  }
});

export default Login;
