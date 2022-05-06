import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { API_URL } from "../../../../global";

function HistoryItem(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.loremIpsumStackRow}>
          <View style={styles.loremIpsumStack}>
            <Text style={styles.loremIpsum}>
              {props.name}
            </Text>
            <Image
              source={{uri:`${API_URL}/images/${props.id}.jpeg`}}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    height: 90,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    flexDirection: "row"
  },
  loremIpsum: {
    top: 27,
    left: 65,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 13
  },
  image: {
    top: 0,
    left: 0,
    width: 66,
    height: 70,
    position: "absolute"
  },
  loremIpsumStack: {
    width: 315,
    height: 70
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 15,
    marginLeft: 18,
    marginTop: 13
  },
  loremIpsumStackRow: {
    height: 70,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 11,
    marginTop: 10
  }
});

export default HistoryItem;
