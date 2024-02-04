import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeContext } from "../contexts/ThemeContext";

// Screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LibaryScreen from "../screens/LibaryScreen";
import Icons from "../constans/Icons";

// Screen names
const homeName = "Home";
const searchName = "Search";
const libaryName = "Libary";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    const { theme } = useContext(ThemeContext);
    let activeColors = Colors[theme.mode];

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = "home" ;
                        } else if (rn === searchName) {
                            iconName = "explore";
                        } else if (rn === libaryName) {
                            iconName = "libary";
                        }

                        return <Icons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: activeColors.hue12,
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarStyle: {
                        height: 60
                    }
                })}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={searchName} component={SearchScreen} />
                <Tab.Screen name={libaryName} component={LibaryScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
