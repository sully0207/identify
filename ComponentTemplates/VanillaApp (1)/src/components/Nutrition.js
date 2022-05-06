import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Nutrition(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.nutritionalInfoStack}>
          <Text style={styles.nutritionalInfo}>Nutritional Info</Text>
          <Text style={styles.per100G}>Per 100g</Text>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
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
    alignSelf: "center"
  },
  nutritionalInfo: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12
  },
  per100G: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  nutritionalInfoStack: {
    width: 82,
    height: 31,
    marginTop: 7,
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
  }
});

export default Nutrition;
