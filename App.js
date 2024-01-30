import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppStack from './navigation/AppStack';
import { StatusBar } from 'expo-status-bar';
import TrackPlayer from "react-native-track-player";

TrackPlayer.registerPlaybackService(() => require('./service'));

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
