import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HistoryItem from "../components/HistoryItem";

function History(props) {
  return (
    <View style={styles.container}>
      <HistoryItem style={styles.historyItem2}></HistoryItem>
      <HistoryItem style={styles.historyItem1}></HistoryItem>
      <HistoryItem style={styles.historyItem}></HistoryItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  historyItem2: {
    height: 90,
    width: 375,
    marginTop: 180
  },
  historyItem1: {
    height: 90,
    width: 375,
    marginTop: -180
  },
  historyItem: {
    height: 90,
    width: 375,
    marginTop: -180
  }
});

export default History;
