import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import ForgotPassword from "./src/screens/ForgotPassword";
import ItemResult from "./src/screens/ItemResult";
import ItemResult1 from "./src/screens/ItemResult1";
import Login from "./src/screens/Login";
import ScanPage from "./src/screens/ScanPage";
import Signup from "./src/screens/Signup";
import WelcomePage from "./src/screens/WelcomePage";

const DrawerNavigation = createDrawerNavigator({
  ForgotPassword: ForgotPassword,
  ItemResult: ItemResult,
  ItemResult1: ItemResult1,
  Login: Login,
  ScanPage: ScanPage,
  Signup: Signup,
  WelcomePage: WelcomePage
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    ForgotPassword: ForgotPassword,
    ItemResult: ItemResult,
    ItemResult1: ItemResult1,
    Login: Login,
    ScanPage: ScanPage,
    Signup: Signup,
    WelcomePage: WelcomePage
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "work-sans-700": require("./src/assets/fonts/work-sans-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
