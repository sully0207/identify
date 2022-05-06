import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import SwitchComponent from './subComponents/SwitchComponent';
import {API_URL} from '../../../../global';
import {JWTContext} from '../../../../AppContext';
import Loading from '../components/Loading'
export default function VegPreferences() {
    const JWT = useContext(JWTContext);
    const [isVegan,setIsVegan] = useState(null);
    const [isVegetarian,setIsVegetarian] = useState(null);

    useEffect(() => {
        fetchVeg();
    }, [])


    const fetchVeg = async () =>{
        const response = await fetch(`${API_URL}/api/user/getUserData?data=isVegetarian,isVegan`,{
            headers:{
            'auth-token':JWT,
            }
        });
        const data = await response.json();
        console.log(data);
        setIsVegan(data.isVegan);
        setIsVegetarian(data.isVegetarian);
    }
    
    const handleSwitch = async (requirement,value)=>{
        let body = {};
        let urlEnd = '';
        if(requirement==="vegan"){
            body={
                isVegan:value,
            }
            urlEnd = "editIsVegan";
        }else if(requirement==="vegetarian"){
            body={
                isVegetarian:value,
            }
            urlEnd = "editIsVegetarian";
        }
        //post to backend, on response, change the usestate
        const response = await fetch(`${API_URL}/api/user/${urlEnd}`,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
                'auth-token':JWT,
            },
            body:JSON.stringify(body),
        });
        const data = await response.json();
        if(requirement==="vegan"){
            setIsVegan(data.isVegan);
        }else if(requirement==="vegetarian"){
            setIsVegetarian(data.isVegetarian);
        }
     


    }
    return (
        <>
        {
        (isVegan===null || isVegetarian===null)?(
            <Loading/>
            ):(
            <View style={styles.container}>
                <View style={styles.rect3}>
                    <Text style={styles.header}>Vegan and Vegetarian</Text>
                        <SwitchComponent name="vegan" onChange={handleSwitch} value={isVegan}/>
                        <SwitchComponent name="vegetarian" onChange={handleSwitch} value={isVegetarian}/>
                </View>
            </View>
            )
        }
        </>
  )
}
const styles = StyleSheet.create({
    container: {
        margin:20,
    },
    rect3: {
      backgroundColor: "#E6E6E6"
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
        marginTop: 10,
        marginLeft: 10,
      },

  });