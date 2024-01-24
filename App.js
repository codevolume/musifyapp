import { NavigationContainer } from '@react-navigation/native';

import AppStack from './navigation/AppStack';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}