import React from 'react'
import {
    View,
    ActivityIndicator,
    StyleSheet,
    FlatList,
    StatusBar,
} from 'react-native'
import Colors from '../../res/Colors'
import Storage from '../../libs/storage'
import exampleStyles from '../../styles/example'
import BadgesItem from '../BadgesScreen/BadgesItem'

class Favorites extends React.Component{
    //Defaultb state of the screen
    state={
        loading: false,
        badges: undefined
    }
    //Properties called immediately after a component is mounted
    componentDidMount = () => {
        this.getFavorites();
        this.focusEvent();
    }
    //Get the badges that are marked as favorites
    getFavorites =  async ()  => {
        try{
            const allKeys = await Storage.instance.getAllKeys();
            const key = allKeys.filter( key => key.includes('favorite-'));
            const favs = await Storage.instance.multiGet(key);
            const favorites = favs. map( fav => JSON.parse(fav[1]))
            this.setState({badges: favorites});
        }catch(err){
            console.log('get favorites err', err);
        }
    }
    //See the deatails of the Badge
    handlePress = item =>{
        this.props.navigation.navigate('FavoritesDetails', {item});
    }
    //Start rendering the badges
    focusEvent = () => {
        this.focusListener = this.props.navigation.addListener ('focus', () => {
            this.getFavorites();
        })
    }
    //Called immediately before a component is destroyed
    componentWillUnmount= () => {
        this.focusListener();
    }

    render(){
        const{badges, loading} = this.state
        //If it is still loading and there are no badges, we see a status bar
        if(loading === true && !badges){
            <View style={[exampleStyles.container, exampleStyles.horizontal]}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <ActivityIndicator
                    style={exampleStyles.loader}
                    color="#43FF0D"
                    size="large" />
            </View>
        }
        //Once rendered, return the correct badges
        return(
            <View style={[exampleStyles.container, exampleStyles.horizontal]}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <FlatList
                    style={styles.list}
                    data={badges}
                    renderItem = { ({item}) => (
                        <BadgesItem item={item} onPress = {() => this.handlePress(item)} />
                    )}
                    keyExtractor={(item, index) => index.toString()}    
                />
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
        paddingHorizontal: 10,    
    },
})

export default Favorites;