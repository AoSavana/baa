import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashsc from './Splashsc';
import Login from './Login';
import LoginOTP from './LoginOTP';
import SplashTwo from './SplashTwo'; 
import Splash3 from './Splash3';
import Splash4 from './Splash4';
import Splash5 from './Splash5';





const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          initialRouteName: "Splashsc",
          cardStyle: { backgroundColor: 'white' },
          headerShown: false 
        }}
      >
        <Stack.Screen name="Splashsc" component={Splashsc} />
        <Stack.Screen name='SplashTwo' component={SplashTwo} />
        <Stack.Screen name='Splash3' component={Splash3} />
        <Stack.Screen name='Splash4' component={Splash4} />
        <Stack.Screen name='Splash5' component={Splash5} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='LoginOTP' component={LoginOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
