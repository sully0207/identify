import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons';

const KeywordItem = (props) => {
  return (
    <>
    <View style={styles.rule}></View>
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>props.delete(props.name)}>
            <Ionicon name="trash-outline" style={styles.deleteIcon}/>
        </TouchableOpacity>
        <Text style={styles.subHeader}>{props.name}</Text>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        marginLeft: 10,
        marginRight:10,
        flexDirection:'row',
        flex:1,
        padding:10,
    },
    subHeader: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        fontSize: 20,
        marginLeft: 7,
    },
    rule: {
        width: 303,
        height: 1,
        backgroundColor: "rgba(0,0,0,1)",
        marginTop: 4,
        marginLeft: 7
    },
    deleteIcon:{
        color:"black",
        fontSize:20,
    }
  });

export default KeywordItem