import { View, SafeAreaView, Text, Switch } from "react-native";
import React, { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../contexts/ThemeContext";

const LibaryScreen = () => {
    const theme = { mode: "dark" };
    let activeColors = Colors[theme.mode];
    const [value, setValue] = useState(false);

    const toggleSwitch = async () => {
        updateTheme();
        try {
            await AsyncStorage.setItem("colormode", value ? "light" : "dark");
            console.log(await AsyncStorage.getItem("colormode"));
        } catch (err) {
            console.log(err);
        }

        setValue((prevState) => !prevState);
    };

    return (
        <View style={{ paddingHorizontal: 25, backgroundColor: activeColors.hue2, flex: 1 }}>
            <SafeAreaView>
                <Text>LibaryScreen</Text>
            </SafeAreaView>
        </View>
    );
};

export default LibaryScreen;
