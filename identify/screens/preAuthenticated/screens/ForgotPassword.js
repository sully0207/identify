import React, { useState } from "react";
import { StyleSheet, View, Text  } from "react-native";
import Logo from "./components/Logo";
//Importing components
import MaterialStackedLabelTextbox2 from "./components/MaterialStackedLabelTextbox2";
import CupertinoButtonDanger from "./components/CupertinoButtonDanger";

import { API_URL } from "../../../global";//importing the url

export default function ForgotPassword() {
    const [email,setEmail] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    //when email changes
    const handleEmailChange = (input) =>{
        setEmail(input);
    }

    //on submit
    const submitForgotPassword = async () =>{
        setLoading(true);
        const response = await fetch(`${API_URL}/api/auth/requestPasswordReset`,{
          method:"POST",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            email:email.toLowerCase(),
          }),
        });
        const data = await response.json();
        if(data.success){
          setError(data.success[0].message)
        }else if(data.error){
          const recievedError = data.error[0]
          setError(recievedError.message)
        }else{
          setError('Please try again!');
        }
        setLoading(false);
    }
    return (
        <View style={styles.container}>
        <View style={styles.formContainer}>
          <Logo style={styles.logo}></Logo>
          <MaterialStackedLabelTextbox2
            style={styles.materialStackedLabelTextbox22}
            label="Email"
            type="username"
            value=""
            handleChange={handleEmailChange}
          ></MaterialStackedLabelTextbox2>
          <CupertinoButtonDanger
              caption={loading?"Loading...":"Request Password Reset"}
              onPress={loading?(null):(submitForgotPassword)}
              style={styles.cupertinoButtonDanger1}
          ></CupertinoButtonDanger>
          <Text style={[styles.error]}>{(error)?(error):(null)}</Text>
          </View>
      </View>
    )
}
const styles = StyleSheet.create({
    formContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    logo: {
      height: 76,
      width: 246,
      justifyContent: 'center',
      alignItems: 'center'
    },
    materialStackedLabelTextbox2: {
      height: 60,
      width: 315,
      marginTop: 44,
    },
    materialStackedLabelTextbox22: {
      height: 60,
      width: 315,
    },
    cupertinoButtonDanger1: {
      height: 47,
      width: 315,
      backgroundColor: "rgba(66,56,51,1)",
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: {
        width: 3,
        height: 3
      },
      elevation: 5,
      shadowOpacity: 0.05,
      shadowRadius: 0,
      marginTop: 26,
    },
    error: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 10,
    },
  });
