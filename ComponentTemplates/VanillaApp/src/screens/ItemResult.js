import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function ItemResult(props) {
  return (
    <View style={styles.container}>
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
        <Text style={styles.loremIpsum2}>No interactions found</Text>
      </View>
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>No interactions found</Text>
        <View style={styles.rect}></View>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.nutritionalInfo}>Nutritional Info</Text>
        <Text style={styles.per100G}>Per 100g</Text>
        <View style={styles.rect3}></View>
        <View style={styles.energyValuesRow}>
          <Text style={styles.energyValues}>Energy Values</Text>
          <Text style={styles.energyValues2}>2157Kj</Text>
        </View>
        <Text style={styles.energyValues3}>516Kcal</Text>
        <View style={styles.rect4}></View>
        <View style={styles.fatRow}>
          <Text style={styles.fat}>Fat</Text>
          <Text style={styles.energyValues4}>29.5g</Text>
        </View>
        <View style={styles.rect5}></View>
        <View style={styles.saturatesRow}>
          <Text style={styles.saturates}>Saturates</Text>
          <Text style={styles.energyValues5}>11.6g</Text>
        </View>
        <View style={styles.rect6}></View>
        <View style={styles.carbohydratesRow}>
          <Text style={styles.carbohydrates}>Carbohydrates</Text>
          <Text style={styles.energyValues6}>50.3g</Text>
        </View>
        <View style={styles.rect7}></View>
        <View style={styles.sugarRow}>
          <Text style={styles.sugar}>Sugar</Text>
          <Text style={styles.energyValues7}>4.6g</Text>
        </View>
        <View style={styles.rect8}></View>
        <View style={styles.proteinRow}>
          <Text style={styles.protein}>Protein</Text>
          <Text style={styles.energyValues8}>10.8g</Text>
        </View>
        <View style={styles.rect9}></View>
        <View style={styles.saltRow}>
          <Text style={styles.salt}>Salt</Text>
          <Text style={styles.energyValues9}>2.6g</Text>
        </View>
        <View style={styles.rect10}></View>
      </View>
      <Text style={styles.loremIpsum1}>No interactions found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    top: 23,
    width: 200,
    height: 200,
    position: "absolute",
    left: 58
  },
  ellipse: {
    top: 173,
    width: 75,
    height: 75,
    position: "absolute",
    left: 120
  },
  icon: {
    top: 189,
    left: 138,
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
    fontSize: 24
  },
  imageStack: {
    width: 258,
    height: 248,
    marginTop: 52,
    marginLeft: 30
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
    height: 30,
    marginLeft: 31
  },
  rect2: {
    width: 315,
    height: 205,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 210,
    shadowOpacity: 0.03,
    shadowRadius: 70,
    backgroundColor: "#E6E6E6",
    marginTop: 7,
    marginLeft: 30
  },
  nutritionalInfo: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginTop: 7,
    marginLeft: 7
  },
  per100G: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 7
  },
  rect3: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 4,
    marginLeft: 7
  },
  energyValues: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  energyValues2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 64
  },
  energyValuesRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 7,
    marginRight: 113
  },
  energyValues3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 159
  },
  rect4: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 1,
    marginLeft: 7
  },
  fat: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  energyValues4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 132
  },
  fatRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 7,
    marginRight: 121
  },
  rect5: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 7
  },
  saturates: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  energyValues5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 92,
    marginTop: 1
  },
  saturatesRow: {
    height: 18,
    flexDirection: "row",
    marginLeft: 7,
    marginRight: 121
  },
  rect6: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 7
  },
  carbohydrates: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  energyValues6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 61
  },
  carbohydratesRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 7,
    marginRight: 121
  },
  rect7: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 7
  },
  sugar: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  energyValues7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 116
  },
  sugarRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 7,
    marginRight: 129
  },
  rect8: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 7
  },
  protein: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  energyValues8: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 107
  },
  proteinRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 7,
    marginRight: 121
  },
  rect9: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 7
  },
  salt: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  energyValues9: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 128
  },
  saltRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 7,
    marginRight: 129
  },
  rect10: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginLeft: 7
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: -497,
    marginLeft: 21,
    height: 0,
    width: 0,
    opacity: 0
  }
});

export default ItemResult;
