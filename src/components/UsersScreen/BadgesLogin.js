import React from 'react';
import Colors from '../../res/Colors';
import {
    Text,
    View,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
import UserSession from '../../libs/sessions'
import Loader from '../../Generics/Loader'
//Image background constant that is connected to an url 
const imageBackground = {
    uri:'https://wallpapercave.com/wp/wp6699749.jpg'
};

class Login extends React.Component {
    //Default state of the screen
    state = {
        loading: false,
        error: null,
        user: undefined,
        isPasswordVisible: true,
        form: {},
    }
    //Called immediately after a component is mounted
    componentDidMount = () =>{
        this.deleteTokens()
    }
    //Delete certain parts
    deleteTokens = async () =>{
        await UserSession.instance.logout()
    }
    //Submit posssible outcomes
    handleSubmit = async () => {
        try {
            this.setState({ loading: true, error: null, user: undefined })
            let response = await UserSession.instance.login(this.state.form)
            if (typeof response === 'object') {
                if (response['405']) {
                    var message = "Account is not verified"
                } else {
                    var message = "Invalid Username or password. Please try again"
                }
                this.setState({ loading: false, error: message, user: undefined })
            } else {
                this.setState({ loading: false, error: null, user: response })
            }
        } catch (err) {
        this.setState({ loading: false, error: err })
        }
        if (this.state.user) {
            this.props.navigation.replace('BadgesTabNavigator')
        }
    }

    handlePress = () => {
        this.props.navigation.navigate('BadgesSignup')
    };

    toggleIsPasswordVisible = () => {
        // Chage between true and false regarding the password
        if (this.state.isPasswordVisible) {
            this.setState({ isPasswordVisible: false })
        } else {
            this.setState({ isPasswordVisible: true })
        }
    }

    render() {
        const { isPasswordVisible, loading, error } = this.state
        // Shows loader if screen is not ready to be shown
        if (loading == true) {
        return <Loader />
        }

        return (
            <ScrollView>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <ImageBackground source={imageBackground} style={styles.image}>
                <View style={styles.container}>

                    <Text style={styles.title, styles.lightTitle}> Login !</Text>

                    <View style={styles.formContainer}>

                    {/* If the login is incorrect : */}
                    {error ? (
                        <View style={styles.errorContainer}>
                        <Text style={styles.errorMsg}>{error}</Text>
                        </View>
                    ) : null}

                    {/* username */}
                    <TextInput
                        placeholder={"Username"}
                        style={styles.formContent}
                        onChangeText={text => {
                        this.setState(prevState => {
                            let form = Object.assign({}, prevState.form)
                            form.username = text
                            return { form }
                        })
                        }}
                    />

                    {/* Password */}
                    <View style={styles.formContent}>
                        <TextInput
                        placeholder={"Password"}
                        secureTextEntry={isPasswordVisible}
                        onChangeText={text => {
                            this.setState(prevState => {
                            let form = Object.assign({}, prevState.form)
                            form.password = text
                            return { form }
                            })
                        }}
                        />
                        <TouchableOpacity onPress={this.toggleIsPasswordVisible}>
                        <Image
                            source={
                            isPasswordVisible
                                ? require("../../assets/show.png")
                                : require("../../assets/hide.png")
                            }
                        />
                        </TouchableOpacity>
                    </View>

                    </View>

                    <TouchableOpacity style={styles.darkButton}>
                    <Text style={{ color: Colors.white, fontSize: 25 }} onPress={this.handleSubmit}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.lightButton}
                    onPress={this.handlePress}
                    >
                    <Text style={{ color: Colors.black, fontSize: 10 }}>SIGNUP</Text>
                    </TouchableOpacity>

                </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default Login;