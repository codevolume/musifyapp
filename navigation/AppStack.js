import React, { useState } from "react";
import Navigation from "./TabNavigator";
import { PlayerContext } from "../contexts/PlayerContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { StatusBar } from "expo-status-bar";
import { SettingsContext } from "../contexts/SettingsContext";

const AppStack = () => {
    const [theme, setTheme] = useState({ mode: "light" });

    const updateTheme = (newTheme) => {
        let mode;
        if (!newTheme) {
            mode = theme.mode === "dark" ? "light" : "dark";
            newTheme = { mode };
        }
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            <SettingsContext>
                <PlayerContext>
                    <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />
                    <Navigation />
                </PlayerContext>
            </SettingsContext>
        </ThemeContext.Provider>
    );
};

export default AppStack;
