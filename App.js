import { NavigationContainer } from '@react-navigation/native';

import AppStack from './navigation/AppStack';
import { StatusBar } from 'expo-status-bar';
import TrackPlayer from "react-native-track-player";

TrackPlayer.registerPlaybackService(() => require('./service'));

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}