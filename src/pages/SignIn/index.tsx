import React, {useState} from 'react';
import {View, TextInput,Text, StatusBar, TouchableOpacity} from 'react-native';
import {useAuth} from '../../contexts/auth';

import {styles} from './styles';

const SignIn: React.FC = () => {
    const {signIn} = useAuth();
    const [userIn, setUser] = useState('');
    const [passIn, setPass] = useState('');

    async function handleSignIn(){
        await signIn(userIn, passIn);
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
            <View style={styles.loginContainer}>
                <View style={styles.loginTitleContainer}>
                    <Text style={styles.loginTitle}>Login</Text>
                </View>
                <TextInput onChangeText={text => setUser(text)} placeholder='Email' style={styles.textInput}></TextInput>
                <TextInput onChangeText={text => setPass(text)} secureTextEntry={true} placeholder='Senha' style={styles.textInput}></TextInput>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export default SignIn;