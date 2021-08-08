import React from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList, StatusBar, Text, Alert,} from 'react-native'
import BadgesItem from './BadgesItem';
import Colors from '../../res/Colors'
import Http from '../../libs/http'

class BadgesScreen extends React.Component {
    //Default state of the badges
    state = {
        loading: false,
        badges: [],
    };
    //Actions called immediately after a component is mounted.
    componentDidMount() {
        this.fetchdata();
    }
    //Get all data from the badges
    fetchdata = async () => {
        //Start loading
        this.setState({loading: true});
        //Await for the response from http of the badges
        let response = await Http.instance.get_all();
        //Reverses the contntens of the badge
        response = response.reverse();
        //Set the loadin and the badges
        this.setState({loading: false, badges: response});
    };

    render() {
        //Get the constant of the badges and the loading simbol
        const {badges, loading} = this.state;
        return (
            <View style={[styles.container, styles.horizontal]}>
                {loading ? (
                    //While it is loading, Displays a circular loading indicator.
                    <ActivityIndicator
                        style={styles.loader}
                        color="43FF0D"
                        size="large"
                    />
                ) : null}
                <FlatList
                //Display the list of badges
                    style={styles.list} 
                    data={badges}
                    //Render each one of the user's badges
                    renderItem={({item}) => (
                        <BadgesItem 
                            key={item._id} 
                            item={item}
                            //When it is pressed, we will see the user's details
                            onPress={() => this.handlePress(item)}
                        />
                    )}
                />
            </View>
        );
    }
}

//Stylesheet of the screen
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.charade,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loader:{
        height:'100%',
        paddingHorizontal: 10,
    },
    list:{
        width: '100%',
        paddingHorizontal: 10
    },
});


export default BadgesScreen;