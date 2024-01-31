import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppStack from './navigation/AppStack';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
