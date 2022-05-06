import React, { Component,} from "react";
import { StyleSheet, View,ScrollView} from "react-native";
import AllergenPreferences from "./PreferenceComponents/AllergenPreferences";
import VegPreferences from "./PreferenceComponents/VegPreferences";
import KeywordPreferences from "./PreferenceComponents/KeywordPreferences";

function Preferences(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <KeywordPreferences/>
        <AllergenPreferences/>
        <VegPreferences/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"white"
  },

});

export default Preferences;
