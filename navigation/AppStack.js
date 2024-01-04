import React from "react";
import Navigation from "./TabNavigator";
import { PlayerContext } from "../contexts/PlayerContext";
import { StatusBar } from "expo-status-bar";

const AppStack = () => {
    const theme = { mode: "dark" };


    return (
        <>  
                <PlayerContext>
                    <StatusBar style={theme.mode === "dark" ? "light" : dark}/>
                    <Navigation />
                </PlayerContext>
        </>
    );
};

export default AppStack;
