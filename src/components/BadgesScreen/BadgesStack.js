import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import BadgeLanding from '../BadgesLanding/BadgesLanding';
import Colors from '../../res/Colors';

const Stack = createStackNavigator();

//Componente where the Badges of different pages of the app are shown
const BadgesStack = () => {
    return(
        //The part where the characteristics of the main screen are defined
        <Stack.Navigator screenOptions={{
            //In this case the header
            headerStyle: {
                backgroundColor: Colors.blackPearl,
                shadowColor: Colors.blackPearl,
            },
            headerTintColor: Colors.white,
        }}>
            //Here we have the badge of the Landing page
            <Stack.Screen name="Landing" component={BadgeLanding} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default BadgesStack;
