import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
    const {signOut} = useAuth();
    
    async function handleSignOut(){
        signOut();
    }
    return (
        <View style={{justifyContent: 'center', flex: 1}}>
            <Button title="Sign out" onPress={handleSignOut}/>
        </View>
    )
}

export default Dashboard;