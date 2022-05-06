import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Veg(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.ellipseStackRow}>
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 49.66 50.38" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(220,53,69,1)"
                cx={25}
                cy={25}
                rx={25}
                ry={25}
              ></Ellipse>
            </Svg>
            <EntypoIcon name="cross" style={styles.icon1}></EntypoIcon>
          </View>
          <View style={styles.ellipse1Stack}>
            <Svg viewBox="0 0 50 50" style={styles.ellipse1}>
              <Ellipse
                strokeWidth={0}
                fill="rgba(40,167,69,1)"
                cx={25}
                cy={25}
                rx={25}
                ry={25}
              ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
              name="check"
              style={styles.icon2}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.vegetarianRow}>
          <Text style={styles.vegetarian}>Vegetarian</Text>
          <Text style={styles.vegan}>Vegan</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 315,
    height: 82,
    backgroundColor: "#E6E6E6",
    flexDirection: "row"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  icon1: {
    top: 3,
    left: 5,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  ellipseStack: {
    width: 50,
    height: 50
  },
  ellipse1: {
    top: 0,
    width: 50,
    height: 50,
    position: "absolute",
    left: 0
  },
  icon2: {
    top: 3,
    left: 5,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  ellipse1Stack: {
    width: 50,
    height: 50,
    marginLeft: 86
  },
  ellipseStackRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: -190,
    marginLeft: 58,
    marginTop: 8
  },
  vegetarian: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12
  },
  vegan: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginLeft: 91
  },
  vegetarianRow: {
    height: 15,
    flexDirection: "row",
    flex: 1,
    marginRight: 83,
    marginLeft: -190,
    marginTop: 59
  }
});

export default Veg;
