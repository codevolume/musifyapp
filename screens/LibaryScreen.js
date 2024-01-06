import { View, SafeAreaView, Text } from "react-native";
import React from "react";

const LibaryScreen = () => {
    const theme = { mode: "dark" };
    let activeColors = Colors[theme.mode];
    return (
        <SafeAreaView>
            <View>
                <Text>LibaryScreen</Text>
            </View>
        </SafeAreaView>
    );
};

export default LibaryScreen;
