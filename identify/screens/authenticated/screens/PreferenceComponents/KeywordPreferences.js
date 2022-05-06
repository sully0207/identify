import { View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import KeywordItem from './subComponents/KeywordItem';
import { JWTContext } from '../../../../AppContext';
import Loading from '../components/Loading';
import { API_URL } from '../../../../global';
import MaterialStackedLabelTextbox2 from '../../../preAuthenticated/screens/components/MaterialStackedLabelTextbox2';
import Ionicon from 'react-native-vector-icons/Ionicons';
export default KeywordPreferences = () => {
    const JWT = useContext(JWTContext);
    const [customKeywords,setCustomKeywords] = useState(null);
    const [input,setInput] = useState(null) 

    useEffect(() => {
        fetchCustomKeywords();
    }, [])


    const fetchCustomKeywords = async () =>{
        const response = await fetch(`${API_URL}/api/user/getUserData?data=customKeywords`,{
            headers:{
            'auth-token':JWT,
            }
        });
        const data = await response.json();
        console.log(data);
        setCustomKeywords(data.customKeywords);
    }
    const handeInput = (text) =>{
        setInput(text);
    }
    const handleDelete = async (name) =>{
        let tempKeywords = [...customKeywords];
        tempKeywords = tempKeywords.filter(e => e !== name);
        const response = await fetch(`${API_URL}/api/user/editCustomKeywords`,{
            method:"PUT",
            headers:{
              'Content-Type': 'application/json',
              'auth-token':JWT,
            },
            body:JSON.stringify({
                customKeywords:tempKeywords,
            }),
          });
        const data = await response.json();
        setCustomKeywords(data);
    }
    const addKeyword = async () => {
        if(input!=null && input!=""){
            let tempKeywords = [...customKeywords];
            tempKeywords.push(input);
            const response = await fetch(`${API_URL}/api/user/editCustomKeywords`,{
                method:"PUT",
                headers:{
                  'Content-Type': 'application/json',
                  'auth-token':JWT,
                },
                body:JSON.stringify({
                    customKeywords:tempKeywords,
                }),
              });
            const data = await response.json();
            setCustomKeywords(data);
        }
    }
    return (
        <>
        {
        (customKeywords==null)?(
            <Loading/>
            ):(
            <View style={styles.container}>
                <View style={styles.rect3}>
                    <Text style={styles.header}>Custom Keywords</Text>
                    <View style={styles.inputContainer}>
                        <MaterialStackedLabelTextbox2
                            handleChange={handeInput}
                            label="Enter Custom Keyword"
                            style={styles.input}
                            />
                    <TouchableOpacity onPress={addKeyword}>
                        <Ionicon name="add-outline" style={styles.addIcon}/>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.listContainer}>
                        {
                        customKeywords.map((keyword,index)=>(
                            <KeywordItem name={keyword} key={index} delete={handleDelete}/>
                            ))
                        }
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
        margin:20,
    },
    rect3: {
      backgroundColor: "#E6E6E6",
      padding:10,
    },
    header: {
      fontFamily: "roboto-700",
      color: "rgba(0,0,0,1)",
      fontSize: 24,
      fontWeight:"bold",
    },
    subHeader: {
        fontFamily: "roboto-700",
        color: "rgba(0,0,0,1)",
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
    },
    input:{
        height: 60,
        width: 290,
    },
    listContainer:{
        marginTop:15,
    },
    addIcon:{
        fontSize:24,
        color:"black",
        marginTop:30,
    },
    inputContainer:{
        flexDirection: 'row'
    },
  });