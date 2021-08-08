import React from 'react';
//Specific import from the react-native library
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Colors from '../../res/Colors';

//Image background constant that is connected to an url 
const imageBackground = {
    uri:'https://wallpapercave.com/wp/wp6699749.jpg'
};

//Badge that shows at the start of the app 
class BadgeLanding extends React.Component{
    //Screen to jump is "Badges"
    handlePress = () => {
        this.props.navigation.navigate('Badges');
    };

    render(){
        return(
        <View style={styles.container}>
            {/*State the background color as transparent */}
            <StatusBar backgroundColor="transparent" translucent={true} />
            {/* Image background with a specific style sheet */}
            <ImageBackground source={imageBackground} style={styles.image}>
                {/* View of the screen with a color filter */}
                <View style={styles.layerColor}>
                    {/* Welcome text to the App */}
                    <Text style={styles.title}>
                        Welcome {'\n'}to my {'\n'}App
                    </Text>
                    {/* Enter button */}
                    <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                        <Text style={styles.buttonText}>Welcome</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        );
    }
}

//Specific design specifications for the Badge
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    layerColor: {
        flex: 2,
        backgroundColor: '#f02323',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        margin: 30,
        fontSize: 80,
        fontWeight: 'bold',
        color: Colors.white,
    },
    button: {
        padding: 15,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: '#21212c',
        borderColor: Colors.white,
        borderWidth: 1,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 25,
        color: Colors.white,
    }
});

export default BadgeLanding;