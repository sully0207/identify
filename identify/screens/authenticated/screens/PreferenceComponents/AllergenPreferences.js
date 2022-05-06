import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import SwitchComponent from './subComponents/SwitchComponent';
import {API_URL} from '../../../../global';
import {JWTContext} from '../../../../AppContext';
import Loading from '../components/Loading'
export default function AllergenPreferences() {
    const JWT = useContext(JWTContext);
    const [allergenData,setAllergenData] = useState(null);
    
    useEffect(() => {
        fetchAllergens();
      }, [])


    const fetchAllergens = async () =>{
        const response = await fetch(`${API_URL}/api/user/getUserData?data=keyAllergens`,{
            headers:{
            'auth-token':JWT,
            }
        });
        const data = await response.json();
        setAllergenData(data.keyAllergens);
    }
    
    const handleSwitch = async (allergen,value)=>{
        let tempObject = {...allergenData};
        const cereals = ["wheat","rye","barley","oats"];
        const treeNuts = ["almond","hazelnut","walnut","cashewNuts","pecanNuts","brazilNuts","pistachioNuts","macadamiaNuts","queenslandNuts",];
        if(cereals.includes(allergen)){
            tempObject.cerealsContainingGluten[allergen] = value;
        }else if(treeNuts.includes(allergen)){
            tempObject.treeNuts[allergen] = value;
        }else{
            tempObject[allergen] = value;
        }            
        console.log(tempObject);
        
        //post to backend, on response, change the usestate
        const response = await fetch(`${API_URL}/api/user/editKeyAllergies`,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
                'auth-token':JWT,
            },
            body:JSON.stringify(tempObject),
        });
        const data = await response.json();
        console.log(data);
        setAllergenData(data.keyAllergens);
    }
    return (
        <>
        {
        (allergenData===null)?(
            <Loading/>
            ):(
            <View style={styles.container}>
                <View style={styles.rect3}>
                    <Text style={styles.header}>Key Allergens</Text>
                    <Text style={styles.subHeader}>Cereals containing gluten</Text>
                        <SwitchComponent name="wheat" onChange={handleSwitch} value={allergenData.cerealsContainingGluten.wheat}/>
                        <SwitchComponent name="rye" onChange={handleSwitch} value={allergenData.cerealsContainingGluten.rye}/>
                        <SwitchComponent name="barley" onChange={handleSwitch} value={allergenData.cerealsContainingGluten.barley}/>
                        <SwitchComponent name="oats" onChange={handleSwitch} value={allergenData.cerealsContainingGluten.oats}/>
                    <Text style={styles.subHeader}>Tree Nuts</Text>
                        <SwitchComponent name="almond" onChange={handleSwitch} value={allergenData.treeNuts.almond}/>
                        <SwitchComponent name="hazelnut" onChange={handleSwitch} value={allergenData.treeNuts.hazelnut}/>
                        <SwitchComponent name="walnut" onChange={handleSwitch} value={allergenData.treeNuts.walnut}/>
                        <SwitchComponent name="cashewNuts" onChange={handleSwitch} value={allergenData.treeNuts.cashewNut}/>
                        <SwitchComponent name="pecanNuts" onChange={handleSwitch} value={allergenData.treeNuts.pecanNut}/>
                        <SwitchComponent name="brazilNuts" onChange={handleSwitch} value={allergenData.treeNuts.brazilNut}/>
                        <SwitchComponent name="pistachioNuts" onChange={handleSwitch} value={allergenData.treeNuts.pistachioNut}/>
                        <SwitchComponent name="macadamiaNuts" onChange={handleSwitch} value={allergenData.treeNuts.macadamiaNut}/>
                        <SwitchComponent name="queenslandNuts" onChange={handleSwitch} value={allergenData.treeNuts.QueenslandNut}/>
                    <Text style={styles.subHeader}>Other Allergens</Text>
                        <SwitchComponent name="celery" onChange={handleSwitch} value={allergenData.celery}/>
                        <SwitchComponent name="crustaceans" onChange={handleSwitch} value={allergenData.crustaceans}/>
                        <SwitchComponent name="eggs" onChange={handleSwitch} value={allergenData.eggs}/>
                        <SwitchComponent name="fish" onChange={handleSwitch} value={allergenData.fish}/>
                        <SwitchComponent name="lupin" onChange={handleSwitch} value={allergenData.lupin}/>
                        <SwitchComponent name="milk" onChange={handleSwitch} value={allergenData.milk}/>
                        <SwitchComponent name="molluscs" onChange={handleSwitch} value={allergenData.molluscs}/>
                        <SwitchComponent name="mustard" onChange={handleSwitch} value={allergenData.mustard}/>
                        <SwitchComponent name="peanuts" onChange={handleSwitch} value={allergenData.peanuts}/>
                        <SwitchComponent name="sesame" onChange={handleSwitch} value={allergenData.sesame}/>
                        <SwitchComponent name="soybeans" onChange={handleSwitch} value={allergenData.soybeans}/>
                        <SwitchComponent name="sulphureDioxideAndSulphites" onChange={handleSwitch} value={allergenData.sulphureDioxideAndSulphites}/>
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