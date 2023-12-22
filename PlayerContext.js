import { createContext, useState } from "react";

const Player = createContext();

const PlayerContext = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);
    console.log(currentTrack)

    return <Player.Provider value={{ currentTrack, setCurrentTrack }}>{children}</Player.Provider>;
};

export { PlayerContext, Player };
