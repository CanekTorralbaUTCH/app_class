import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BadgesStack from './BadgesStack'
import Colors from '../../res/Colors'

//Type of Tab that is going to be, this time it will be located on top of the screen
const Tabs = createMaterialTopTabNavigator();
//Badges screens
const BadgesTabNavigator = () =>{
    return(
        //Navigation bar
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: true,
                tintColor: Colors.white,
                activeTintColor: '#43FF0D',
                style:{
                    backgroundColor: Colors.zircon,
                    paddingTop: 30,
                },
            }}>
            {/* Tab to the screen where the badges are */}
            <Tabs.Screen 
                name='Badges'
                component={BadgesStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image style={{tintColor: color, width:size, height: size}}
                        source={require('../../assets/home.png')} />
                    )
                }}
            />
            {/* Example of tab 2 */}
            <Tabs.Screen 
                name='Badges2'
                component={BadgesStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image style={{tintColor: color, width:size, height: size}}
                        source={require('../../assets/edit_icon.png')} />
                    )
                }}
            />
            {/* Example of tab 3 */}
            <Tabs.Screen 
                name='Badges3'
                component={BadgesStack}
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Image style={{tintColor: color, width:size, height: size}}
                        source={require('../../assets/delete_icon.png')} />
                    )
                }}
            />
        </Tabs.Navigator>
    );
};

export default BadgesTabNavigator;