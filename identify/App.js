/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//importing context
import AppContext from './AppContext';
//import main app screen
import AppStart from './screens/AppStart';

const App = () => {
  //render application with the app context so all components have access to context exports
  return(
    <AppContext>
      <AppStart/>
    </AppContext>
  )
};

export default App;
