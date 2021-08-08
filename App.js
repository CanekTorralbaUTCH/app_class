import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BadgesStack from './src/components/BadgesScreen/BadgesStack';

const App = () => {
  return <NavigationContainer>
    {/* This will allow us to travel between screens, DO NOT FORGET TO ADD */}
    <BadgesStack />
  </NavigationContainer>
};

export default App;
