import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import BadgeLanding from '../BadgesLanding/BadgesLanding';
import BadgesScreen from './BadgesScreen';
import BadgesDetail from '../BadgesDetail/BadgesDetail';
import BadgesEdit from '../BadgesEdit/BadgesEdit';
import Colors from '../../res/Colors';

const Stack = createStackNavigator();

//Componente where the Badges of different pages of the app are shown
const BadgesStack = () => {
    return(
        //The part where the characteristics of the main screen are defined
        <Stack.Navigator 
            screenOptions={{
                //In this case the header
                headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl,
                },
                headerTintColor: Colors.white,
        }}>
            {/* Here we have the the screen for the user's badges */}
            <Stack.Screen name="Badges" component={BadgesScreen}/>
            {/* Here we have the the screen for the user's details */}
            <Stack.Screen name="BadgesDetail" component={BadgesDetail}/>
            {/* Here we have the the screen for editing the user's information */}
            <Stack.Screen name="BadgesEdit" component={BadgesEdit}/>
        </Stack.Navigator>
    );
};

export default BadgesStack;
