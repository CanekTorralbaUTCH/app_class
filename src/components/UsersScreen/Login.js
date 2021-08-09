import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    StatusBar,
    TextInput
} from 'react-native';
import Colors from '../../res/Colors';
import styles from './styles';
//Class for the login screen
class Login extends React.Component{
    //default state of the screen
    state = {
        loading: false,
        error:null,
        user: undefined,
        isPasswordVisible: true,
        from: {},
    }
    render(){
        const {isPasswordVisible, loading, error} = this.state;
        return(
            <view style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true}/>
                <ImageBackground source={ImageBackground} style={styles.image}>
                    <View style={styles.layerColor}>
                        <View style={styles.from}>
                            <Text style={styles.title}>Login</Text>
                            {error ? (
                                <View style={styles.errorContainer}>
                                    <text style={styles.errorMsg}>
                                        {'Invalid Username or Password. Please try again.'}
                                    </text>
                                </View>
                            ) : null}
                            <View style={styles.formgroup}>
                                <Text style={styles.inputText}>Username</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'username'}
                                    keyboardAppearance="dark"
                                    onChangeText={text => {
                                        this.setState(prevState => {
                                            let form = Object.assign({}, prevState.form);
                                            form.username = text;
                                            return {form};
                                        });
                                    }}
                                />
                                <Text style={styles.inputText}>Password</Text>
                                <View style={styles.password}>
                                    <TextInput
                                        style={styles.inputPassword}
                                        secureTextEntry={isPasswordVisible}
                                        placeholder={'Password'}
                                        keyboardAppearance="dark"
                                        onChangeText={text => {
                                            this.setState(prevState => {
                                                let form = Object.assign({}, prevState.form);
                                                form.password = text;
                                                return {form};
                                            });
                                        }}
                                    />
                                    <TouchableOpacity onPress={this.ToogleisPasswordVisible}>
                                        <Image
                                        style={{marginRight: 10}}
                                        source={
                                            isPasswordVisible
                                                ? require('../../assets/show.png')
                                                : require('../../assets/hide.png')
                                        }
                                    />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.submit}
                                onPress={this.handleSubmit}>
                                <Text style={styles.submitText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.signUpTouchable}
                                onPress={this.handleSignup}>
                                <Text>{"You don't have an account? "}</Text>
                                <Text style={styles.signUpBoldText}>Sign Up.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </view>
        );
    }
}
export default Login;