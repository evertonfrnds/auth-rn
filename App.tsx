import 'react-native-gesture-handler'

import React from 'react';

import Routes from './src/routes'
import {AuthProvider} from './src/contexts/auth';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;
