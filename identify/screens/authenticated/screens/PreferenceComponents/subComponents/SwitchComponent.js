import { View, Text,Switch,StyleSheet} from 'react-native'
import React from 'react'

export default function SwitchComponent(props) {
  const handleValueChange = (newValue)=>{
    props.onChange(props.name.toLowerCase(),newValue);
  }
    return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        trackColor={{ false: "#767577", true: "#423833" }}
        thumbColor={props.value ? "#ffffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleValueChange}
        value={props.value}
      />
      <Text style={styles.label}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        alignItems: "flex-start",
        padding:10,
    },
    label: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        marginLeft: 10,
      },
});