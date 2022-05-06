import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.usernameStack}>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.loggedInAs}>Logged in as</Text>
      </View>
      <View style={styles.rect}>
        <Text style={styles.eMail}>E-mail</Text>
        <Text style={styles.exampleEmailCom}>example@email.com</Text>
      </View>
      <View style={styles.exampleEmailCom2StackStack}>
        <View style={styles.exampleEmailCom2Stack}>
          <Text style={styles.exampleEmailCom2}>example@email.com</Text>
          <View style={styles.rect2}>
            <View style={styles.eMail3Stack}>
              <Text style={styles.eMail3}></Text>
              <Text style={styles.eMail4}>E-mail</Text>
            </View>
            <MaterialFixedLabelTextbox1
              style={styles.materialFixedLabelTextbox1}
            ></MaterialFixedLabelTextbox1>
            <MaterialFixedLabelTextbox1
              style={styles.materialFixedLabelTextbox2}
            ></MaterialFixedLabelTextbox1>
            <MaterialFixedLabelTextbox1
              style={styles.materialFixedLabelTextbox3}
            ></MaterialFixedLabelTextbox1>
            <CupertinoButtonDanger
              caption="Sign Out"
              style={styles.cupertinoButtonDanger}
            ></CupertinoButtonDanger>
          </View>
        </View>
        <Text style={styles.eMail2}>E-mail</Text>
      </View>
      <CupertinoButtonDanger
        caption="Clear Scan History"
        style={styles.cupertinoButtonDanger3}
      ></CupertinoButtonDanger>
      <CupertinoButtonDanger
        caption="Clear S"
        style={styles.cupertinoButtonDanger4}
      ></CupertinoButtonDanger>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  username: {
    top: 11,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 32,
    left: 0
  },
  loggedInAs: {
    top: 0,
    left: 33,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  usernameStack: {
    width: 145,
    height: 49,
    marginTop: 51,
    marginLeft: 115
  },
  rect: {
    width: 315,
    height: 71,
    backgroundColor: "#E6E6E6",
    marginTop: 12,
    marginLeft: 30
  },
  eMail: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 10,
    marginLeft: 10
  },
  exampleEmailCom: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 30
  },
  exampleEmailCom2: {
    top: 33,
    left: 30,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect2: {
    top: 0,
    left: 0,
    width: 315,
    height: 250,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  eMail3: {
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  eMail4: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212"
  },
  eMail3Stack: {
    width: 40,
    height: 17,
    marginTop: 10,
    marginLeft: 9
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 295,
    marginTop: 14,
    marginLeft: 10
  },
  materialFixedLabelTextbox2: {
    height: 43,
    width: 295,
    marginLeft: 9
  },
  materialFixedLabelTextbox3: {
    height: 43,
    width: 295,
    marginLeft: 10
  },
  cupertinoButtonDanger: {
    width: 294,
    height: 44,
    backgroundColor: "rgba(66,56,51,1)",
    marginTop: 12,
    marginLeft: 10
  },
  exampleEmailCom2Stack: {
    top: 0,
    left: 0,
    width: 315,
    height: 250,
    position: "absolute"
  },
  eMail2: {
    top: 10,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  exampleEmailCom2StackStack: {
    width: 315,
    height: 250,
    marginTop: 24,
    marginLeft: 30
  },
  cupertinoButtonDanger3: {
    width: 315,
    height: 44,
    backgroundColor: "rgba(66,56,51,1)",
    marginTop: 20,
    marginLeft: 29
  },
  cupertinoButtonDanger4: {
    width: 315,
    height: 44,
    backgroundColor: "rgba(66,56,51,1)",
    marginTop: 20,
    marginLeft: 29
  }
});

export default Settings;
