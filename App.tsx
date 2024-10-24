/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import Routes from './src/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MenuProvider } from 'react-native-popup-menu';


function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MenuProvider>
        <Routes />
      </MenuProvider>
    </GestureHandlerRootView>
  );
}

export default App;
