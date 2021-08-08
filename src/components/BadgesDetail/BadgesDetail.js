import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Colors from '../../res/Colors'

//Class whwre it is shown the details of the user's acount
class BadgesDetail extends React.Component{
    //Default state of the class
    state = {
        badge:{},
        isFavorite: false,
    };

    componentDidMount (){
        this.getBadge();
    }
    //Here we get the badges
    getBadge = () => {
        //We search the specific badge
        const {item} = this.props.route.params;
        //We set its contents
        this.setState({badge: item}, () => {
            this.getFavorite();
        });
        this.props.navigation.setOptions({title: item.name})
    };
    //Show favorite badges
    getFavorite = async () => {
        try{
            const key = `favorite-${this.state.badge._id}`;
            const favoriteStr = await Storage.instance.get(key);
            //The badge is show if it is marked as such
            if(favoriteStr!=null){
                this.setState({isFavorite: true});
            }
        }catch(err){
            console.log('Get favorite error', err);

        }
    }
    //This function toogle if a badge is favorite or not
    toogleFavorite = () => {
        if (this.state.isFavorite) {
            this.removeFavorite();
        }else {
            this.addFavorite();
        }
    }
    //Add a favorite badge
    addFavorite = async () =>{
        const badge = JSON.stringify(this.state.badge);
        const key = `favorite-${this.state.badge._id}`;

        const stored = await Storage.instance.store(key, badge);

        if(stored){
            this.setState({isFavorite: true});
        }
    }
    //Remove a favorite badge
    removeFavorite = async () => {
        //We just remove the mark that makes it favourite
        const key = `favorite-${this.state.badge._id}`;
        await Storage.instance.remove(key);
        this.setState({isFavorite: false});
    }
    //Render the screen with the user's details
    render(){
        const {badge} = this.state;
        return(
            //Conatiner of the screen
            <View style={styles.container}>
                {/* Badge where the informations is saved */}
                <View style={styles.badge}>
                    {/* Header with a picture */}
                    <Image style={styles.header} source={{uri: `${badge.header_img_url}`}}/>
                    <Image style={styles.profileImage} source={{uri: `${badge.profile_picture_url}`}} />
                    {/* Main information of the user */}
                    <View style={styles.userInfo}>
                        {/* Its name */}
                        <Text style={styles.name}>{badge.name}</Text>
                        {/* and age */}
                        <Text style={styles.age}>{badge.age}</Text>
                    </View>
                    {/* User's city */}
                    <Text style={styles.city}>{badge.city}</Text>
                    {/* User's secondary data */}
                    <View style={styles.data}>
                        {/* User's Likes in one column */}
                        <View style={styles.dataColumns}>
                            <Text style={styles.dataInfo}>{badge.likes || "0K"} </Text>
                            <Text style={styles.smallText}>Likes</Text>
                        </View>
                        {/* User's posts in another one */}
                        <View style={styles.dataColumns}>
                            <Text style={styles.dataInfo}>{badge.post || "None"} </Text>
                            <Text style={styles.smallText}>Posts</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

//Style sheet of the screen
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.charade,
    },
    badge:{
        flex:1,
        margin: 20,
        marginTop:54,
        width:'90%',
        height: '90%',
        backgroundColor: Colors.white,
        borderRadius: 25,
    },
    header:{
        width:'100%',
        height:'40%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    profileImage:{
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius:100,
        borderWidth:5,
        borderColor:Colors.zircon,
        position:'absolute',
        top:130,
        left:'22%'
    },
    favorite:{
        position: 'absolute',
        top: 290,
        right: 40,
    },
    userInfo:{
        flexDirection:'row',
        marginTop:110,
        justifyContent:'center',
    },
    name:{
        fontSize:28,
        fontWeight:'bold',
        color:Colors.blackPearl,
    },
    age:{
        fontSize:28,
        marginLeft: 20,
        color: Colors.zircon,
    },
    city:{
        marginTop:10,
        fontSize:18,
        textAlign:'center',
        color: Colors.zircon,
    },
    data:{
        padding:20,
        marginTop:50,
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopColor: 1,
        borderColor: Colors.zircon,    
    },
    dataColumns:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataInfo:{
        marginTop:20,
        fontSize:28,
        fontWeight:'bold',
        marginHorizontal: 25,
        color: Colors.charade,
    },
    smallText:{
        color:Colors.zircon,
    },
})

export default BadgesDetail;