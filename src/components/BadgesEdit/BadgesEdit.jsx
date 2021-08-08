import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouvhableOpacity,
    Image,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import Colors from '../../res/Colors'
import Http from '../../libs/http'

//Class that will allow us to edit the badges
class BadgesEdit extends react.Component{
    //Default state of the properties
    state={
        loading : false,
        badge:{},
        form:{},
    };
    componentDidMount(){
        this.getBadge();
    }
    //Get information from the badge
    getBadge = () => {
        const {item} = this.props.route.params;
        this.setState({badge: item});
        this.props.navigation.setOptions({title: `Edit ${item.name}`});
    };
    //Here we can submit the changes on a badge
    handleSubmit = async () => {
        await Http.instance.put(
            this.state.badge._id, 
            this.state.form);
        this.props.navigation.replace('Badges')
    }
    render(){
        const {badge, loading} = this.state;
        //If it is still rendering, display the loader
        if(loading===true){
            return(
                <View style={[styles.container, styles.horizontal]}>               
                    <ActivityIndicator
                        style={styles.loader}
                        color="#E3198F80"
                        size="large"
                    />
                </View>
            );
        }
    }
    //Render the screen
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text>{badge.name}</Text>
                    <TextInput style={styles.input} placeholder="This is an input" />
                </View>
            </ScrollView>
        );
    }
}

//Stylesheet of the screen
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.charade,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    content:{
        flex:1,
        margin: 20,
        width:'90%',
        height: '90%',
        backgroundColor: Colors.white,
        borderRadius: 25,
    },
    input:{
        paddingVertical:5,
        paddingHorizontal:12,
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.zircon,
    },
});

export default BadgesEdit;