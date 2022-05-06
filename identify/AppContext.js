import React from 'react';
import { useContext,useState,useEffect } from 'react';
import SInfo from 'react-native-sensitive-info';
/**
    # Contexts allow the use of functions and usestates in the whole application. 
 */

//contest and their exports for this context (all the things accessible to child components)

//context for the getting users token
export const JWTContext = React.createContext();
//context for setting users token
export const SetJWTTokenContext = React.createContext()
//context for deleting users token
export const DeleteJWTTokenContext = React.createContext()


export default AppContext = ({children}) =>{
    //JWT contains the user data and it tells the application if it is logged in.
    const [JWT,setJWT] = useState(null);
    //Is the JWT Valid
    useEffect(() => {
        setToken(JWT)
    }, [JWT])
    //When the application launches, check if the user has a JWT stored, if so set the JWT value  
    useEffect(() => {
        //will return the stored token and set to usestate
        const getToken = async () =>{
            //For not start app by deleting context
            console.log("token get")
            const token =  await SInfo.getItem(
                'JWT',
                {
                sharedPreferencesName: 'mySharedPrefs',
                keychainService: 'myKeychain'
                }
            );
            if(token!=null){//CHANGE THIS LATER
                setJWT(token);
            }else{
                console.log("not found")
            }
        }
        getToken();
  }, [])  

  const setToken = async (token) =>{
    console.log("token set");
    const response = await SInfo.setItem(
      'JWT',
      token,
      {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'
      }
    );
    console.log(response);
  }
  //will delete the token
  const deleteToken = async () =>{
    console.log("token delete")
    setJWT(null);
    const response = await SInfo.deleteItem(
      'JWT',
      {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'
      }
    );
  }

  return(
    <JWTContext.Provider value={JWT}>
        <SetJWTTokenContext.Provider value={setJWT}>
            <DeleteJWTTokenContext.Provider value={deleteToken}>
                {children}
            </DeleteJWTTokenContext.Provider>
        </SetJWTTokenContext.Provider>
    </JWTContext.Provider>
  );
}