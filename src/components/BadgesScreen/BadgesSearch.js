import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Colors from '../../res/Colors';

//The class that contains a searchbar for the badges
class BadgesSearch extends React.Component{
    //The default state of the query
    state = {
        query: "",
    };
    //A part of the bar that can be described as a mini search engine
    handleText = query => {
        this.setState({query});
        if(this.props.onChange) {
            this.props.onChange(query);
        }
    }
    //Render the search bar
    render(){
        const {query} = this.state;
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={this.handleText}
                    value={query}
                    placeholder="Search a badge"
                    placeholderTextColor={Colors.charade}
                />
            </View>
        );
    }
}
//Style sheet of the screen
const styles = StyleSheet.create({
    container:{
        width: '95%',
        marginTop: 45,
        color: Colors.white,
    },
    TextInput:{
        borderColor: Colors.blackPearl,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        color: Colors.charade,
    },
});

export default BadgesSearch;