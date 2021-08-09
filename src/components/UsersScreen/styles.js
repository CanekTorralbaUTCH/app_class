import { StyleSheet } from "react-native"
import Colors from "../../res/Colors"
//An extense style sheet for the UsersSreen folder
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      },
    
      image: {
        paddingTop: 50,
        paddingBottom: 170,
      },
    
      title: {
        color: Colors.black,
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 40
      },

      lightTitle:{
        color: Colors.white,
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 20
      },
    
      formContainer: {
        backgroundColor: Colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        borderRadius: 20
      },
      
      errorContainer: {
        backgroundColor: Colors.red,
        borderRadius: 10,
        padding: 5
      },

      errorMsg: {
        color: Colors.white,
        fontSize: 15
      },
    
      formContent: {
        color: Colors.black,
        marginTop: 15,
        marginBottom: 15,
        borderColor: Colors.blue,
        borderBottomWidth: 1,
        borderRadius: 10,
        width: 200,
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
    
      darkButton: {
        backgroundColor: Colors.black,
        width: '50%',
        height: '15%',
        marginTop: 30,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },

      lightButton: {
        backgroundColor: Colors.white,
        width: '30%',
        height: '12%',
        marginTop: 30,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },

})

export default styles