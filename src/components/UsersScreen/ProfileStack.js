import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Profile from "./Profile"
import Colors from "../../res/Colors"

const Stack = createStackNavigator()
//Stack of the User parts
const UserStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowColor: Colors.blackPearl
                },
                headerTintColor: Colors.white
        }}>
            <Stack.Screen 
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default UserStack