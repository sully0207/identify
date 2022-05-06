import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import Logo from "./components/Logo";
import CupertinoButtonDanger from "./components/CupertinoButtonDanger";

export default function WelcomePage(props) {
 
  const navigateTo = (screenName) =>{
    props.navigation.navigate(screenName);
  }
  return (
    <View style={styles.container}>
        <View style={styles.logoColumn}>
            <Logo style={styles.logo}></Logo>
              <CupertinoButtonDanger
                  caption="Log In"
                  style={styles.cupertinoButtonDanger}
                  onPress={()=>navigateTo("Login")}
              ></CupertinoButtonDanger>
            <Text style={styles.or2}>or</Text>
              <CupertinoButtonDanger
                  caption="Sign Up"
                  style={styles.cupertinoButtonDanger}
                  onPress={()=>navigateTo("Signup")}
              ></CupertinoButtonDanger>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'center',

    },
    logo: {
      height: 76,
      width: 246,
      justifyContent: 'center',
      alignItems: 'center'
    },
    or2: {
      fontFamily: "roboto-700",
      color: "#121212",
      fontSize: 18,
      textAlign:"center",
    },
    cupertinoButtonDanger: {
      height: 47,
      width: 229,
      backgroundColor: "rgba(66,56,51,1)",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 5,
      shadowOpacity: 0.03,
      shadowRadius: 0,
      marginTop: 10,
    },
    logoColumn: {
      justifyContent: 'center',
      alignItems: 'center',  
    },
  });