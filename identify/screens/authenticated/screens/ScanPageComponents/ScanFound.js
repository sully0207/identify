import { View,StyleSheet,TouchableOpacity,ScrollView,BackHandler} from 'react-native'
import React,{useEffect} from 'react'
import InteractionFound from './subComponents/InteractionFound';
import Ionicon from 'react-native-vector-icons/Ionicons';
import InfoBox from './subComponents/InfoBox';
import Nutrition from './subComponents/Nutrition';
import Size from './subComponents/Size';
const ScanFound = (props) => {
    useEffect(() => {
        const backAction = () =>{
            props.setItemOpen(false)
        }
        BackHandler.addEventListener('hardwareBackPress',backAction);
        return(
            BackHandler.removeEventListener('hardwareBackPress',backAction)
        )
    }, [])
    
    //Methods for parsing recieved data
    //takes the itemData and returns true or false if there are any interactions
    const checkInteractions = () =>{
        if(props.itemData.matchingAllergens.length>0){
            return true;
        }else if(props.itemData.matchingIngredients.length>0){
            return true;
        }else if(props.itemData.vegan || props.itemData.vegetarian){
            return true;
        }else{
            return false;
        }
    }
    const parseVeg = () =>{
        const veganResponse = ((!props.itemData.item.isVegan)?("Not suitable"):("Suitable")) + " for vegans";
        const vegetarianResponse = ((!props.itemData.item.isVegetarian)?("Not suitable"):("Suitable")) + " for vegetarians";
        const response = `${veganResponse}\n${vegetarianResponse}`;
        return response;
    }
    const parseArrayToString = (array) =>{
        return array.join();
    }
    return (
      <>
        <View>
            <TouchableOpacity style={styles.exit} onPress={props.closeModal}>
                <Ionicon name="close-outline" style={styles.exitIcon}/>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <InteractionFound style={styles.InteractionFound} item={props.itemData.item} interactionFound={checkInteractions()}></InteractionFound>
            <ScrollView>
                <InfoBox title={"Vegan/Vegetarian"} content={parseVeg()}/>
                {
                    (props.itemData.matchingAllergens.length>0)?(
                        <InfoBox title={"Interacting Allergens Found"} content={parseArrayToString(props.itemData.matchingAllergens)}/>
                    ):(
                        null
                    )
                }
                {
                    (props.itemData.matchingIngredients.length>0)?(
                        <InfoBox title={"Keyword Ingredients Found"} content={parseArrayToString(props.itemData.matchingIngredients)}/>
                    ):(
                        null
                    )
                }
                {
                    (props.itemData.item.additionalAllergyInformation!="")?(
                        <InfoBox title={"Additional Allergen Info"} content={props.itemData.item.additionalAllergyInformation}/>
                        ):(
                        null
                    )
                }
                <Nutrition nutrionalData={props.itemData.item.nutrionalData[0]}/>
                <InfoBox title={"Ingredients"} content={parseArrayToString(props.itemData.item.ingredients)}/>
                <InfoBox title={"Description"} content={props.itemData.item.description}/>
                <Size netContent={props.itemData.item.netContent} portionSize={props.itemData.item.portionSize}/>
            </ScrollView>
        </View>
      </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      flexDirection: "column",
    },
    InteractionFound: {
      height: 287,
      width: 316,
      marginTop:20,
      marginBottom:20,
    },
    exit:{
        alignItems: 'flex-end',
        paddingRight:10,
        paddingTop:10,
    },
    exitIcon:{
        color:"#000",
        fontSize: 40,
    }
  });

export default ScanFound