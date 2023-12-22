import { NavigationContainer } from '@react-navigation/native';

import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const isAuthed = true;
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      {isAuthed ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}