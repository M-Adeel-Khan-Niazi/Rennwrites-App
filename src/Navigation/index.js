import React, {useRef} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import TabStack from './tab/TabStack';
import AuthStack from './Auth/AuthStack';
import { navigationRef } from './NavigationService';
import TabStack from './TabStack/TabStack';
import MainStack from './MainStack/MainStack';
// import AppStack from './app/AppStack';
// import DrawerStack from './drawer/DrawerStack';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="AuthStack">
      <RootStack.Screen
        options={{headerShown: false}}
        name="AuthStack"
        component={AuthStack}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name="MainStack"
        component={MainStack}
      />
    </RootStack.Navigator>
  );
};
const navTheme = DefaultTheme;
navTheme.colors.background = '#141414';
navTheme.colors.text = '#ffffff'
const Routes = () => {
  const routeNameRef = useRef();
  return (
    <NavigationContainer
    theme={navTheme}
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Routes;