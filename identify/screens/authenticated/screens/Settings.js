import React, { useContext, useState,useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import Loading from "./components/Loading";
import { API_URL } from "../../../global";
import { JWTContext } from "../../../AppContext";
import MaterialStackedLabelTextbox2 from "./PreferenceComponents/MaterialStackedLabelTextbox2";
import CupertinoButtonDanger from "./PreferenceComponents/CupertinoButtonDanger";
import { useFocusEffect } from '@react-navigation/native';
import { DeleteJWTTokenContext } from "../../../AppContext";

const Settings = () => { 
  const deleteJWT = useContext(DeleteJWTTokenContext)
  const JWT  = useContext(JWTContext);
  const [userData,setUserData] = useState(null);
  const [newPassword,setNewPassword]= useState("");
  const [confirmNewPassword,setConfirmNewPassword]= useState("");
  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState("");

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused/mount
      fetchUserData();

    }, [])
  );

  const fetchUserData = async () =>{
    const response = await fetch(`${API_URL}/api/user/getUserData?data=email,username`,{
        headers:{
        'auth-token':JWT,
        }
    });
    const data = await response.json();
    setUserData(data);
    console.log(data);
  }
  //Functions for managing inputs
  const handleNewPasswordChange = (text) =>{
    setNewPassword(text)
  }
  const handleConfirmNewPasswordChange = (text) =>{
    setConfirmNewPassword(text)
  }
  //Submit Form
  const handleSubmit = async () => {
    if(!loading){
      if(newPassword==confirmNewPassword){
        setMessage("");
        setLoading(true); 
        const response = await fetch(`${API_URL}/api/auth/changePassword`,{
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
            'auth-token':JWT,
          },
          body:JSON.stringify({
            newPassword:newPassword,
          }),
        });
        const data = await response.json()
        if(data.success){
          setMessage(data.success)
        }else if(data.error){
          setMessage(data.error[0].message);
        }else{
          setMessage("Uknown error please try again");
        }
        setLoading(false);
      }else{
        setMessage("Passwords do not match");
      }
    }
  }
  const clearHistory = async () => {
    const response = await fetch(`${API_URL}/api/user/clearHistory`,{
      method:"PUT",
      headers:{
        'Content-Type': 'application/json',
        'auth-token':JWT,
      },
      body:JSON.stringify({
        newPassword:newPassword,
      }),
    });
  }
  const Logout = () =>{
    deleteJWT();
  }

  return (
    <>
      {
        (userData===null)?(
          <Loading/>
          ):(
            <View style={styles.container}>
              <Text style={styles.text1}>Logged in as</Text>
              <Text style={styles.text2}>{userData.username}</Text>
              <View style={styles.innerContainer}>
                  <Text style={styles.subHeader}>Email</Text>
                  <Text style={styles.text}>{userData.email}</Text>
              </View>
              <View style={styles.innerContainer}>
                  <Text style={styles.subHeader}>Change Password</Text>
                    <MaterialStackedLabelTextbox2
                    type="password"
                    label="New Password"
                    handleChange={handleNewPasswordChange}
                  />
                  <MaterialStackedLabelTextbox2
                    type="password"
                    label="Confirm New Password"
                    handleChange={handleConfirmNewPasswordChange}
                  />
                  <Text style={[styles.message]}>{message}</Text>
                  <View style={styles.buttonContainer}>
                    <CupertinoButtonDanger
                      caption={loading?"Loading":"Change Password"}
                      onPress={handleSubmit}
                      style={styles.cupertinoButtonDanger1}
                    />
                    </View>
                  <View style={styles.buttonContainer}>
                    <CupertinoButtonDanger
                      caption="Clear Scan History"
                      onPress={clearHistory}
                      style={styles.cupertinoButtonDanger1}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <CupertinoButtonDanger
                      caption="Logout"
                      onPress={Logout}
                      style={styles.cupertinoButtonDanger1}
                    />
                  </View>
              </View>
            </View>
        )
      }
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
  },
  text1:{
    color:"black",
    fontSize:20,
    textAlign:"center",
    marginTop:20,
  },
  header: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    marginTop: 10,
    marginLeft: 10,
    fontWeight:"bold",
  },
  subHeader: {
      fontFamily: "roboto-700",
      color: "rgba(0,0,0,1)",
      fontSize: 20,
  },
  text2:{
    color:"black",
    fontSize:32,
    textAlign:"center",
    fontWeight:"bold",
  },
  innerContainer:{
    backgroundColor: "#E6E6E6",
    padding:10,
    marginTop:20,
    justifyContent: 'center',
  },
  text:{
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginLeft: 20,
  },
  cupertinoButtonDanger1: {
    height: 47,
    width: 350,
    marginTop:20,
    backgroundColor: "rgba(66,56,51,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
  },
  message:{
    fontFamily: "roboto-regular",
    color: "black",
    marginTop:5,
  },
});

export default Settings