import React, { useState,useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "./components/Logo";
import MaterialStackedLabelTextbox2 from "./components/MaterialStackedLabelTextbox2";
import CupertinoButtonDanger from "./components/CupertinoButtonDanger";
import { API_URL } from "../../../global";//importing the url
import {SetJWTTokenContext} from '../../../AppContext'


export default function Signup(props) {
    const setJWT = useContext(SetJWTTokenContext);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    //when username changes
    const handleUsernameChange = (input) =>{
        setUsername(input);
    }
    //when email changes
    const handleEmailChange = (input) =>{
        setEmail(input);
    }
    //when password changes
    const handlePasswordChange = (input) =>{
        setPassword(input);
    }
    //when confirm password changes
    const handleConfirmPasswordChange = (input) =>{
        setConfirmPassword(input);
    }
    const submitSignup = async () =>{
        //check if the passwords match
        if(password!=confirmPassword){
            setError("Please make sure passwords match");
        }else{
            setError(false);
            setLoading(true);
            const response = await fetch(`${API_URL}/api/auth/register`,{
                method:"POST",
                headers:{
                'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    username:username.toLowerCase(),
                    email:email.toLowerCase(),
                    password:password,

                }),
            });
            const data = await response.json();
            console.log(data);
            if(data.success){
              setError(false);
              const authToken = response.headers.get("auth-token");
              setJWT(authToken);
            }else if(data.error){
                if(data.error){
                    const recievedError = data.error[0]
                    setError(recievedError.type + " - " + recievedError.message);
                }
            }else{
              setError('Please try again!');
            }
            setLoading(false);
        }
    }
    return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Logo style={styles.logo}></Logo>
        <MaterialStackedLabelTextbox2
          style={styles.materialStackedLabelTextbox2}
          label="Username"
          type="username"
          value=""
          handleChange={handleUsernameChange}
        ></MaterialStackedLabelTextbox2>
        <MaterialStackedLabelTextbox2
          style={styles.materialStackedLabelTextbox22}
          label="Email"
          type="username"
          value=""
          handleChange={handleEmailChange}
        ></MaterialStackedLabelTextbox2>
        <MaterialStackedLabelTextbox2
          style={styles.materialStackedLabelTextbox22}
          label="Password"
          type="password"
          handleChange={handlePasswordChange}
        ></MaterialStackedLabelTextbox2>
        <MaterialStackedLabelTextbox2
          style={styles.materialStackedLabelTextbox22}
          label="Confirm Password"
          type="password"
          handleChange={handleConfirmPasswordChange}
        ></MaterialStackedLabelTextbox2>
        <CupertinoButtonDanger
            caption={loading?"Loading...":"Sign Up"}
            onPress={loading?(null):(submitSignup)}
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
    forgot: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 14,
    },
    error: {
      fontFamily: "roboto-regular",
      color: "rgba(255,0,0,1)",
      marginTop: -330,
    },
  });
