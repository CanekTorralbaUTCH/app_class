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
        badge: {},
        form: {},
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
            this.state.form,
        );
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
                        color="#43FF0D"
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
                    {/* Here is the space where the header image's URL is placed, and you can also see it once you paste it */}
                    <Image 
                        style={styles.header}
                        source={{uri: `${badge.header_img_url}`}}
                    />
                    {/* The profile image's URL */}
                    <Image
                        style={styles.profileImage}
                        source={{uri: `${badge.profile_picture_url}`}}
                    />
                    {/* A form for the string values */}
                    <View style={styles.form}>
                        {/* A label and a text input for the name */}
                        <Text style={styles.inputText}>Name</Text>
                        <TextInput style={styles.input}
                            placeholder={`${badge.name}`} 
                            //once you enter the value, it will change to the new one
                            onChangeText={text => {
                                this.setState( prevState => {
                                    let form = Object.assign({}, prevState.form);
                                    form.name = text;
                                    return {form};
                                });
                            }}
                        />
                        {/* The same hapens with the age */}
                        <Text style={styles.inputText}>Age</Text>
                        <TextInput style={styles.input}
                        placeholder={`${badge.age}`} 
                        onChangeText={text => {
                            this.setState( prevState => {
                                let form = Object.assign({},prevState.form);
                                form.age = text;
                                return {form};
                            })
                        }}
                        />
                        {/* The city */}
                        <Text style={styles.inputText}>City</Text>
                        <TextInput style={styles.input}
                        placeholder={`${badge.city}`} 
                        onChangeText={text => {
                            this.setState( prevState => {
                                let form = Object.assign({},prevState.form);
                                form.city = text;
                                return {form};
                            })
                        }}
                        />
                        {/* The likes */}
                        <Text style={styles.inputText}>Likes</Text>
                        <TextInput style={styles.input}
                        placeholder={`${badge.likes}`} 
                        onChangeText={text => {
                            this.setState( prevState => {
                                let form = Object.assign({},prevState.form);
                                form.bets = text;
                                return {form};
                            })
                        }}
                        />
                        {/* And posts */}
                        <Text style={styles.inputText}>Posts</Text>
                        <TextInput style={styles.input}
                        placeholder={badge.post ? `${badge.post}` : '0'} 
                        onChangeText={text => {
                            this.setState( prevState => {
                                let form = Object.assign({},prevState.form);
                                form.state = text;
                                return {form};
                            })
                        }}
                        />
                        {/* Once done everything, you can push a button to submit the changes */}
                        <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
                            <Text style={styles.submitText}>Save</Text>
                        </TouchableOpacity>
                    </View>
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
    form: {
        paddingHorizontal: 20,
    },
    form: {
        paddingHorizontal: 20,
    },
    header:{
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    profileImage:{
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        borderWidth: 3,
        borderColor: Colors.zircon,
        position: 'absolute',
        top:25,
        left: '28%'
    },
    input:{
        paddingVertical:5,
        paddingHorizontal:12,
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.zircon,
    },
    inputText:{
        fontSize:18,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
    },
    submit:{
        marginVertical: 30,
        width: '30%',
        borderWidth: 1,
        borderColor: Colors.zircon,
        borderRadius: 10,
        backgroundColor: Colors.charade,
    },
    submitText:{
        fontSize: 16,
        margin: 5,
        color: Colors.white,
        textAlign: 'center',
    },
});

export default BadgesEdit;