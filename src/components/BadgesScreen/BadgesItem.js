import React from 'react';
//import certain classes from the react-native library
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import Colors from '../../res/Colors';

//Singular badges for each user
class BadgesItem extends React.Component {
    render() {
        //Constant of the item prop
        const {item} = this.props;
        return (
            <View style={styles.container}>
                {/* On press down, the opacity of the wrapped view is decreased, dimming it. */}
                <TouchableOpacity onPress={this.props.onPress}>
                    {/* Ordered in a row */}
                    <View style={styles.row}>
                        {/* We have a part of the image */}
                        <Image
                            //The style of the image is defined
                            style={styles.profile}
                            //Its source depends from user to user
                            source={{uri: `${item.profile_picture_url}`}}
                        />
                        {/* And in other column has the user data */}
                        <View style={styles.userData}>
                            {/* With the user's name */}
                            <Text style={styles.nameText}> {item.name}</Text>
                            {/* and city */}
                            <Text style={styles.cityText}> {item.city}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* View for the edit and delete options */}
                <View style={styles.icons}>
                    {this.props.onEdit ? (
                        <Pressable onPress={this.props.onEdit}>
                            <Image
                                style={styles.editIcon}
                                source={require('../../assets/edit_icon.png')} />
                        </Pressable>
                    ) : null}
                    {this.props.onDelete ? (
                        <Pressable onPress={this.props.onDelete}>
                            <Image
                                style={styles.deleteIcon}
                                source={require('../../assets/delete_icon.png')} />
                        </Pressable>
                    ) : null}
                    
                </View>
            </View>
        );
    }
}

//Style sheet of the screen
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1,
    },
    row: {
        flexDirection: 'row',
    },
    profile: {
        width: 55,
        height: 55,
        borderRadius: 50,
        resizeMode: 'cover',
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
        color: Colors.white,
    },
    cityText: {
        fontWeight: '100',
        paddingLeft: 20,
        color: Colors.white,
    },
    icons:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    editIcon:{
        marginTop: 15,
        height:22,
        width:22,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    deleteIcon:{
        height: 22,
        width: 22,
        resizeMode: 'cover',
        justifyContent: 'center'
    }
});

export default BadgesItem;