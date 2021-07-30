import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import BadgeLanding from '../BadgesLanding/BadgesLanding';

const Stack = createStackNavigator();

const BadgesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={BadgeLanding} />
        </Stack.Navigator>
    );
};

export default BadgesStack;
