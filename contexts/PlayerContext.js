import { createContext, useState } from "react";
import MinimalizedModal from "../components/MinimalizedModal";

const Player = createContext();

const PlayerContext = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);

    return (
        <>
            {/* playercontext */}
            {currentTrack && <MinimalizedModal item={currentTrack} />}
            <Player.Provider value={{ currentTrack, setCurrentTrack }}>{children}</Player.Provider>
        </>
    );
};

export { PlayerContext, Player };
