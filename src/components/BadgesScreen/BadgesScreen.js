import React from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList, StatusBar, Text, Alert,} from 'react-native'
import BadgesItem from './BadgesItem';
import Loader from '../../Generics/Loader';
import Colors from '../../res/Colors'
import Http from '../../libs/http'
import { TapGestureHandler } from 'react-native-gesture-handler';
import BadgesSearch from './BadgesSearch';

class BadgesScreen extends React.Component {
    //Default state of the badges
    state = {
        loading: false,
        badges: undefined,
        badgeCopy: undefined,
    };
    //Actions called immediately after a component is mounted.
    componentDidMount() {
        this.fetchdata();
        this.focusEvent();
        this.blurEvent();
    }
    //Set the interval
    focusEvent = () => {
        this.focusListener = this.props.navigation.addListener('focus', () =>{
            this.setFetchInterval();
        });
        
    }
    //Clear the interval
    blurEvent = () => {
        this.blurListener = this.props.navigation.addListener('blur', () =>{
            clearInterval(this.interval);
        });
    }
    //Interval of time that takes to fetch data
    setFetchInterval = () =>{
        this.interval = setInterval(this.fetchdata,3000);
    };
    //Get all data from the badges
    fetchdata = async () => {
        //Small message while the action is in procces
        console.log("Fetching data");
        //Start loading
        this.setState({loading: true});
        //Await for the response from http of the badges
        let response = await Http.instance.get_all();
        //Set the loadin and the badges
        this.setState({loading: false, badges: response, badgeCopy: response});
    };
    //If pressed it goes to the details of the user's badge
    handlePress = item =>{
        this.props.navigation.navigate('BadgesDetail', {item});
    };
    //Edit the badge
    handleEdit = item => {
        this.props.navigation.navigate('BadgesEdit', {item});
    }
    //part of the search bar that allows to pop up badges that coincide qith the value
    handleChange = () =>{
        const {badgesCopy} = this.state;
        //Get the badges filtered from the string of the search bar
        const badgesFiltered = badgesCopy.filter(badge => {
            return badge.name.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({badges: badgesFiltered});
        //If the query has any changes, clear and fetch
        if(query){
            clearInterval(this.interval);
        }else{
            this.setFetchInterval();
        }
    };
    //Delete a badge
    handleDelete = item => {
        //An alert appears asking if we are sure to do the operation
        Alert.alert('Are you sure?', `Do you really want to delete ${item.name}'s badge?\n\nThis process cannot be undone`,
            [
                {
                    //Button to cancel the operation
                    text:'Cancel',
                    style: 'cancel',
                },
                {
                    //Button to continue and delete the badge
                    text: 'Delete',
                    onPress: async () =>{
                        this.setState({loading:true, badges:undefined});
                        await Http.instance.remove(item._id);
                        this.fetchdata();
                    },
                    style:'destructive',
                },
            ],
            {
                cancelable: true,
            },
        );
    }
    componentWillUnMount() {
        this.focusListener();
        this.blurListener();
    }
    //Render the screen
    render() {
        //Get the constant of the badges and the loading simbol
        const {badges, loading} = this.state;
        //If the screen is still loading and has not fetched any badges
        if(loading===true && !badges){
            <Loader />
        }
        return (
            <View style={[styles.container, styles.horizontal]}>
                {/* Status bar for the screen */}
                <StatusBar backgroundColor="transparent" translucent={true} />
                {/* Search bar above the list */}
                <BadgesSearch onChange={this.handleChange}/>
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
                            //here it will allow to edit the badge
                            onEdit={() => this.handleEdit(item)}
                            //And here it will start the process to delete the badge
                            onDelete={() => this.handleDelete(item)}
                        />
                    )}
                    //Define the extraction of the key IDs
                    keyExtractor={(item, index) => index.toString()}
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