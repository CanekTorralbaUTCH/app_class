import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BadgesStack from './BadgesStack'
import Colors from '../../res/Colors'
import FavoriteStack from '../Favorites/FavoritesStack'

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
            {/* Tab to the screen where the favorite badges are */}
            <Tabs.Screen 
            name='Favorites'
            component={FavoriteStack}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Image style={{tintColor: color, width:size, height: size}}
                    source={require('../../assets/notFavorite.png')} />
                )
            }}
            />
        </Tabs.Navigator>
    );
};

export default BadgesTabNavigator;