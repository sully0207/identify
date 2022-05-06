import React,{useContext,useEffect,useState} from 'react'

//Navigation Packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';

//import pre authscreens
import WelcomePage from './preAuthenticated/screens/WelcomePage'
import Login from './preAuthenticated/screens/Login'
import Signup from './preAuthenticated/screens/Signup'
import ForgotPassword from './preAuthenticated/screens/ForgotPassword';

//import auth screens
import ScanPage from './authenticated/screens/ScanPage';
import History from './authenticated/screens/History';
import Preferences from './authenticated/screens/Preferences';
import Settings from './authenticated/screens/Settings';


//importing cotexts
import {JWTContext} from '../AppContext'
//Create stack
const Stack = createNativeStackNavigator();
const AuthTab = createBottomTabNavigator();
export default function AppStart() {
    const JWT = useContext(JWTContext);
    const [validJWT,setvalidJWT] = useState(false);
    useEffect(() => {
        if(JWT){
            setvalidJWT(true);
        }else{
            setvalidJWT(false);
        }
    }, [JWT])
    
    
    return(
        <NavigationContainer>
                {
                    (validJWT)?(
                            <AuthTab.Navigator>
                                <AuthTab.Screen
                                name="Scan"
                                component={ScanPage}
                                options={{
                                    headerShown:false,
                                    tabBarIcon:({color,size})=>(
                                        <Ionicon name="scan-outline" color={color} size={size}/>
                                    )
                                }}
                                />
                                <AuthTab.Screen
                                name="Scan History"
                                component={History}
                                options={{
                                    tabBarIcon:({color,size})=>(
                                        <Ionicon name="receipt-outline" color={color} size={size}/>
                                    )
                                }}
                                />
                                <AuthTab.Screen
                                name="Preferences"
                                component={Preferences}
                                options={{
                                    tabBarIcon:({color,size})=>(
                                        <Ionicon name="person-circle-outline" color={color} size={size}/>
                                    )
                                }}
                                />
                                <AuthTab.Screen
                                name="Settings"
                                component={Settings}
                                options={{
                                    headerShown:false,
                                    tabBarIcon:({color,size})=>(
                                        <Ionicon name="settings-outline" color={color} size={size}/>
                                    )
                                }}
                                />
                            </AuthTab.Navigator>
                    ):(
                        <Stack.Navigator>
                            <Stack.Screen
                            name="Welcome Page"
                            component={WelcomePage}
                            options={{
                                headerShown:false,
                            }}
                            />
                            <Stack.Screen
                            name="Login"
                            component={Login}
                            />
                            <Stack.Screen
                            name="Signup"
                            component={Signup}
                            />
                            <Stack.Screen
                            name="Forgot Password"
                            component={ForgotPassword}
                            />
                        </Stack.Navigator>

                    )
                }
        </NavigationContainer>
    )

}
