import React from 'react'
import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native'
import Colors from '../res/Colors';

//A original loader
const Loader = () => {
    return(
        //Conatiner with the loader
        <View style={[styles.container, styles.horizontal]}>
            {/* Loader in use */}
            <StatusBar backgroundColor="transparent" translucent={true}/>
            <ActivityIndicator
                style={styles.loader}
                color={Colors.green}
                size="large"
            />
        </View>
    )
};

//Its style sheet
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.charade,
    },
    horizontal:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loader:{
        height: '100%',
        alignSelf: 'center'
    },

});

export default Loader;