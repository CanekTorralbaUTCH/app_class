import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/components/AppNavigator/AppStack';

const App = () => {
  return <NavigationContainer>
    {/* This will allow us to travel between screens, DO NOT FORGET TO ADD */}
    <AppStack />
  </NavigationContainer>
};

export default App;
