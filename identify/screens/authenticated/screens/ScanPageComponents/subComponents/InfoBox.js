import React, {  } from "react";
import { StyleSheet, View, Text } from "react-native";

function InfoBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect3}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.fat2}>
          {props.content}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginBottom:20,
  },
  rect3: {
    width: 315,
    backgroundColor: "#E6E6E6"
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    marginTop: 10,
    marginLeft: 10,
    fontWeight:"bold",
  },
  fat2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 10,
    marginBottom: 10,
  }
});

export default InfoBox;