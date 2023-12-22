import { View, Text } from "react-native";
import React from "react";
import Navigation from "./TabNavigator";
import { PlayerContext } from "../PlayerContext";

const AppStack = () => {
    return (
        <>
            <PlayerContext>
                <Navigation />
            </PlayerContext>
        </>
    );
};

export default AppStack;
