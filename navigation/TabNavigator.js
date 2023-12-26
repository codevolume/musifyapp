import React from "react";
import Svg, { Path } from "react-native-svg";

import HomeScreen from "../screens/app/HomeScreen";
import SearchScreen from "../screens/app/SearchScreen";
import LibaryScreen from "../screens/app/LibaryScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
/*                     borderTopWidth: 0, */
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarActiveTintColor: "#202020",
                    tabBarInactiveTintColor: "#8d8d8d",
                    tabBarIcon: ({ color, size }) => (
                        <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                            <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.27446 10.1262C5 10.7229 5 11.4018 5 12.7595V16.9999C5 18.8856 5 19.8284 5.58579 20.4142C6.11733 20.9457 6.94285 20.9949 8.5 20.9995V16C8.5 14.8954 9.39543 14 10.5 14H13.5C14.6046 14 15.5 14.8954 15.5 16V20.9995C17.0572 20.9949 17.8827 20.9457 18.4142 20.4142C19 19.8284 19 18.8856 19 16.9999V12.7595C19 11.4018 19 10.7229 18.7255 10.1262C18.4511 9.52943 17.9356 9.08763 16.9047 8.20401L15.9047 7.34687C14.0414 5.74974 13.1098 4.95117 12 4.95117C10.8902 4.95117 9.95857 5.74974 8.09525 7.34687L7.09525 8.20401C6.06437 9.08763 5.54892 9.52943 5.27446 10.1262ZM13.5 20.9999V16H10.5V20.9999H13.5Z"
                                fill={color}
                            />
                        </Svg>
                    ),
                }}
            />
            <Tab.Screen
                name="search"
                component={SearchScreen}
                options={{
                    tabBarLabel: "Search",
                    headerShown: false,
                    tabBarActiveTintColor: "#202020",
                    tabBarInactiveTintColor: "#8d8d8d",
                    tabBarIcon: ({ color, size }) => (
                        <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                            <Path d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z" fill={color} />
                            <Path d="M20 20L18 18" stroke={color} stroke-width="2" stroke-linecap="round" />
                        </Svg>
                    ),
                }}
            />
            <Tab.Screen
                name="Libary"
                component={LibaryScreen}
                options={{
                    tabBarLabel: "Your Libary",
                    headerShown: true,
                    tabBarActiveTintColor: "#202020",
                    tabBarInactiveTintColor: "#8d8d8d",
                    tabBarIcon: ({ color, size }) => (
                        <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
                            <Path
                                d="M3 8H16.2C17.8802 8 18.7202 8 19.362 8.32698C19.9265 8.6146 20.3854 9.07354 20.673 9.63803C21 10.2798 21 11.1198 21 12.8V14.2C21 15.8802 21 16.7202 20.673 17.362C20.3854 17.9265 19.9265 18.3854 19.362 18.673C18.7202 19 17.8802 19 16.2 19H7.8C6.11984 19 5.27976 19 4.63803 18.673C4.07354 18.3854 3.6146 17.9265 3.32698 17.362C3 16.7202 3 15.8802 3 14.2V8Z"
                                fill={color}
                            />
                            <Path d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5H8.34315C9.16065 5 9.5694 5 9.93694 5.15224C10.3045 5.30448 10.5935 5.59351 11.1716 6.17157L13 8H3Z" fill={color} />
                        </Svg>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();
export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
