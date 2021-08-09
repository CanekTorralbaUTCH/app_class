import AsyncStorage from "@react-native-async-storage/async-storage";
//database inside the phone to store favorite badges
class Storage {
    static instance = new Storage()

    //Store a badge
    store = async(key, value) =>{
        try{
            await AsyncStorage.setItem(key, value)
            return true
        }catch(err){
            console.log('Storage store err', err)
            return false
        }
    }
    //Get a badge
    get = async key =>{
        try{
            return await AsyncStorage.getItem(key)
        }catch(err){
            console.log('Storage get err', err)
            throw Error(err)
        }
    }
    //Get multiple badges
    multiGet = async keys =>{
        try{
            return await AsyncStorage.multiGet(keys)
        }catch(err){
            console.log('Storage multiget err', err)
            throw Error(err)
        }
    }
    //Remove multiple badges
    multiRemove = async keys => { // Deletes all elements in an array of keys
        try{
            await AsyncStorage.multiRemove(keys)
            return true
        }catch(err){
            console.log('Multi remore err', err)
            return false
        }
    }
    //Get all IDs from the badges
    getAllKeys = async () =>{
        try{
            return await AsyncStorage.getAllKeys()
        }catch(err){
            console.log('Storage get all keys', err)
            throw Error(err)
        }
    } 
    //remove a badge
    remove = async key => {
        try{
            await AsyncStorage.removeItem(key)
            return true
        }catch(err){
            console.log('Storage delete err', err)
        }
    }

}

export default Storage