import React, {createContext, useState, useEffect, useContext} from 'react'
import * as auth from '../services/auth';
import {AsyncStorage} from 'react-native';

interface User{
    name: string;
    email: string;
}
interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(user: string, pass: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
       async function loadStorageData() {
        const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
        const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
        if(storagedToken && storagedUser){
            setUser(JSON.parse(storagedUser));
            }
        } 
       loadStorageData().then(()=>setLoading(false));
    }, [])

    async function signIn(user : string, pass: string){
        const response = await auth.signIn(user, pass) ;
        setUser(response.user);
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
        
    }
    function signOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null);
        })
    }
    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export default AuthContext;