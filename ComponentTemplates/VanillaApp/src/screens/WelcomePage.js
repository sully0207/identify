import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function WelcomePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logoColumn}>
        <Logo style={styles.logo}></Logo>
        <Text style={styles.or2}>or</Text>
        <CupertinoButtonDanger
          caption="Sign Up"
          style={styles.cupertinoButtonDanger2}
        ></CupertinoButtonDanger>
      </View>
      <View style={styles.logoColumnFiller}>
        <CupertinoButtonDanger
          caption="Log In"
          style={styles.cupertinoButtonDanger}
        ></CupertinoButtonDanger>
      </View>
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
    width: 246
  },
  or2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 77,
    marginLeft: 115
  },
  cupertinoButtonDanger2: {
    height: 47,
    width: 229,
    backgroundColor: "rgba(66,56,51,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
    marginTop: 10,
    marginLeft: 8
  },
  logoColumn: {
    width: 246,
    marginTop: 286,
    marginLeft: 64
  },
  cupertinoButtonDanger: {
    height: 47,
    width: 229,
    backgroundColor: "rgba(66,56,51,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    marginLeft: 72
  },
  logoColumnFiller: {
    flex: 1,
    justifyContent: "center"
  }
});

export default WelcomePage;
