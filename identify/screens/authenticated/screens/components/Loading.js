import { View, ActivityIndicator,StyleSheet} from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.spinner} size="large"/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent:'center',
    },
    spinner: {

    }
  });