import TrackPlayer from "react-native-track-player";
import MainContainer from "./navigation/MainContainer";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";
import { SettingsContext } from "./contexts/SettingsContext";
import { PlayerContext } from "./contexts/PlayerContext";


TrackPlayer.registerPlaybackService(() => require('./service'));

export default function App() {
    const [theme, setTheme] = useState({mode: "light"});

    const updateTheme = (newTheme: { mode: string }) => {
        let mode;
        if(!newTheme) {
            mode = theme.mode === "dark" ? "light" : "dark";
            newTheme = {mode};
        }
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{theme, updateTheme}}>
            <SettingsContext>
                <PlayerContext>
                    <MainContainer />
                </PlayerContext>
            </SettingsContext>
        </ThemeContext.Provider>

    );
}
