import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Ionicon from 'react-native-vector-icons/Ionicons';
import { API_URL } from "../../../../../global";
export default function InteractionFound(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <Image
          source={{uri:`${API_URL}/images/${props.item._id}.jpeg`}}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Svg viewBox="0 0 75 75" style={styles.ellipse}>
          <Ellipse
            strokeWidth={0}
            fill={(props.interactionFound)?("rgba(220,53,69,1)"):("rgba(40, 167, 69,1)")}
            cx={38}
            cy={38}
            rx={38}
            ry={38}
          ></Ellipse>
        </Svg>
        <Ionicon name={(props.interactionFound)?("close-outline"):("checkmark-outline")} style={styles.icon}/>
        <Text style={styles.loremIpsum1}>
          {props.item.name}
        </Text>
      </View>
      <Text style={styles.interactionsFound}>{(props.interactionFound)?("Interactions Found"):("No Interactions Found")}</Text>
      <View style={styles.rect1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    top: 30,
    width: 200,
    height: 200,
    position: "absolute",
    left: 57
  },
  ellipse: {
    top: 180,
    left: 119,
    width: 75,
    height: 75,
    position: "absolute"
  },
  icon: {
    top: 196,
    left: 137,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  loremIpsum1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  imageStack: {
    width: 315,
    height: 255,
    marginLeft: 1
  },
  interactionsFound: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginLeft: 60,
  },
  rect1: {
    width: 315,
    height: 2,
    backgroundColor: "#E6E6E6",
    marginTop: 1
  }
});

