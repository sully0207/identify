import React, { Component,useCallback,useState,useContext } from "react";
import { StyleSheet, View, ScrollView,TouchableOpacity} from "react-native";
import { API_URL } from "../../../global";
import HistoryItem from "./components/HistoryItem";
import Loading from "./components/Loading";
import { JWTContext } from "../../../AppContext";
import { useFocusEffect } from '@react-navigation/native';

function History(props) {
  const [historyData,setHistoryData] = useState([]);
  const JWT = useContext(JWTContext)
  const [isLoading,setIsLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused/mount
      fetchHistory();

    }, [])
  );

  const fetchHistory = async () =>{
    setIsLoading(true);
    const response = await fetch(`${API_URL}/api/user/getUserData?data=itemHistory`,{
      headers:{
        'auth-token':JWT,
      }
    });
    const data = await response.json();
    console.log(data);
    setHistoryData(data.itemHistory);
    setIsLoading(false);
  }

  return (
    <>
    {
      (isLoading)?(
        <Loading/>
        ):(
          <View style={styles.container}>
        <ScrollView>
        {
          historyData.map((historyItem,index)=>(
            <TouchableOpacity key={index}>
              <HistoryItem style={styles.historyItem} name={historyItem.name} id={historyItem._id}/>
            </TouchableOpacity>
          ))
        }
        </ScrollView>
      </View>
      )
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  historyItem: {
    height: 90,
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
  
});

export default History