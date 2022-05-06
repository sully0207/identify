import React, { } from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import Ionicon from 'react-native-vector-icons/Ionicons';


export default function ReadyToScan(props) {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo}></Logo>
      <View style={styles.innerContainer}>
        <Ionicon name="scan-outline" style={styles.icon}/>
        <Text style={styles.readyToScanItem}>Ready to scan item</Text>
        <Text style={styles.error}>{props.error}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    flexDirection: "column",

  },
  innerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:200,
  },
  logo: {
    height: 76,
    width: 246,
    justifyContent: 'center',
    alignItems: 'center'
  },
  readyToScanItem: {
    fontFamily: "roboto-regular",
    color: "rgba(128,128,128,1)",
    fontSize: 16,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    alignSelf: "center",
  },
  error: {
    fontFamily: "roboto-regular",
    color: "rgba(255,0,0,1)",

  }
});