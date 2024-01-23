import React, { useState } from "react";
import Navigation from "./TabNavigator";
import { PlayerContext } from "../contexts/PlayerContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { StatusBar } from "expo-status-bar";

const AppStack = () => {
    const [theme, setTheme] = useState({mode: "dark"});
    
    const updateTheme = (newTheme) => {
        let mode;
        if(!newTheme) {
            mode = theme.mode === "dark" ? "light" : "dark";
            newTheme = {mode};
        }
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, updateTheme}}>  
                <PlayerContext>
                    <StatusBar style={theme.mode === "dark" ? "light" : "dark"}/>
                    <Navigation />
                </PlayerContext>
        </ThemeContext.Provider>
    );
};

export default AppStack;
