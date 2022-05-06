import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Nutrition(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.nutritionalInfoStack}>
          <Text style={styles.nutritionalInfo}>Nutritional Info</Text>
          <Text style={styles.perValue}>Per {props.nutrionalData.perValue}</Text>
        </View>
        <View style={styles.rule}></View>
        <View style={styles.row}>
          <Text style={styles.typeText}>Energy Values</Text>
          <Text style={styles.value}>{props.nutrionalData.energyValueKj}Kj            {props.nutrionalData.energyValueKcal}Kcal</Text>
        </View>
        <View style={styles.rule}></View>
        <View style={styles.row}>
          <Text style={styles.typeText}>Fat</Text>
          <Text style={styles.value}>{props.nutrionalData.fat}g</Text>
        </View>
        <View style={styles.rule}></View>
        <View style={styles.row}>
          <Text style={styles.typeText}>Saturates</Text>
          <Text style={styles.value}>{props.nutrionalData.saturates}g</Text>
        </View>
        <View style={styles.rule}></View>
        <View style={styles.row}>
          <Text style={styles.typeText}>Carbohydrates</Text>
          <Text style={styles.value}>{props.nutrionalData.carbohydrates}g</Text>
        </View>
        <View style={styles.rule}></View>
        <View style={styles.row}>
          <Text style={styles.typeText}>Sugar</Text>
          <Text style={styles.value}>{props.nutrionalData.sugar}g</Text>
        </View>
        <View style={styles.rule}></View>
        <View style={styles.row}>
          <Text style={styles.typeText}>Protein</Text>
          <Text style={styles.value}>{props.nutrionalData.protein}g</Text>
        </View>
        <View style={styles.rule}></View>
        <View style={[[styles.row,styles.last]]}>
          <Text style={styles.typeText}>Salt</Text>
          <Text style={styles.value}>{props.nutrionalData.salt}g</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex:1,
    marginBottom:20,
  },
  rect2: {
    width: 315,
    backgroundColor: "#E6E6E6",
    padding:1,
  },
  nutritionalInfo: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    fontWeight:"bold",
  },
  perValue: {
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
  rule: {
    width: 303,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 4,
    marginLeft: 7
  },

  typeText: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },

  row: {
    marginTop: 2,
    marginLeft: 10,
    marginRight:10,
  },

  value: {
    fontFamily: "roboto-regular",
    color: "#121212",
    position: 'absolute',
    right: 0,
  },
  last:{
    marginBottom:10
  }
});

export default Nutrition;
