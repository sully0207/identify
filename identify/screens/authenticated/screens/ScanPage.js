import React, {useState,useEffect,useContext,useCallback} from "react";
import NfcManager,{NfcTech,Ndef,NfcEvents} from 'react-native-nfc-manager';//import nfc packages
import { Modal } from "react-native";
import Logo from "./components/Logo";
import ReadyToScan from "./ScanPageComponents/ReadyToScan";
import ScanFound from "./ScanPageComponents/ScanFound";
import Loading from "./components/Loading";
import { API_URL } from "../../../global";
import { JWTContext } from "../../../AppContext";
import { useFocusEffect } from '@react-navigation/native';

export default function ScanPage(props) {
  const JWT = useContext(JWTContext)
  const [itemOpen,setItemOpen] = useState(false);
  const [itemData,setItemData] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);
  //Start of NFC Methods
  //Start listening for NFC tags
  StartListening = async () => {
    console.log("Listening...");
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      parseTag(tag);
    });//Whenever a tag is discovered parse it so it can be set to a use state
    try {
      await NfcManager.registerTagEvent();//try register events
    } catch (ex) {
      console.warn('ex', ex);
    }
  }
  //Parse the first text record and try to fetch from API
  const parseTag = (tag) =>{
    const message = Ndef.text.decodePayload(tag.ndefMessage[0].payload);
    console.log(message);
    //fetch the item. but first make sure there isnt anything currently loading and that the popup isnt open
    if(!isLoading){
      fetchItem(message); 
    }
  }
  //Once compoment mounts. start listening
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused/mount
      StartListening()
    }, [])
  );
  
  //End of NFC Methods
  //Start of fetch methods and item data handling
  const fetchItem = async (id) =>{
    setIsLoading(true);
    const response = await fetch(`${API_URL}/api/scanItem`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'auth-token':JWT,
      },
      body:JSON.stringify({
        itemID:id,
      }),
    });
    const data = await response.json();
    if(data.error){
      setError(data.error[0].message);
    }else{
      setError(null);
      setItemData(data);
    }
    setIsLoading(false);
  }
  //If the item data is null, modal stays closed, if it has a value, the modal opens
  useEffect(() => {
    console.log("ITEM DATA CHANGES");
    if(itemData!==null){
      setItemOpen(true);
    }
  }, [itemData])
  //When modal closes flush the itemdata usestate to null
  const closeModal = () =>{
    setItemOpen(false);
  }
  //End of fetch methods
  return (
    <>
    <Modal visible={itemOpen}>
      {
        (itemData==null)?(
          <Loading/>
        ):(
          <ScanFound closeModal={closeModal} itemData={itemData}/>
        )
      }
    </Modal>
    {
      isLoading?(
        <Loading/>
      ):(
        <ReadyToScan error={error}/>
      )
    }
    </>
  );
}

