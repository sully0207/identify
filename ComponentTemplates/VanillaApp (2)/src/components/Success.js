import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Success(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/images/62705656822ee4e15f084305.jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Svg viewBox="0 0 75 75" style={styles.ellipse}>
          <Ellipse
            strokeWidth={0}
            fill="rgba(40,167,69,1)"
            cx={38}
            cy={38}
            rx={38}
            ry={38}
          ></Ellipse>
        </Svg>
        <Icon name="check" style={styles.icon}></Icon>
        <Text style={styles.loremIpsum2}>
          Kellogg&#39;s Crunchy Nut Chocolate Clusters 450G
        </Text>
      </View>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>No interactions found</Text>
        <View style={styles.rect}></View>
      </View>
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
    width: 75,
    height: 75,
    position: "absolute",
    left: 119
  },
  icon: {
    top: 196,
    left: 137,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  imageStack: {
    width: 315,
    height: 255
  },
  loremIpsum: {
    top: 0,
    left: 41,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24
  },
  rect: {
    top: 28,
    left: 0,
    width: 315,
    height: 2,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsumStack: {
    width: 315,
    height: 30
  }
});

export default Success;
