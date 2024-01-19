import React, { createContext, useState, useEffect } from "react";
import MinimalizedModal from "../components/MinimalizedModal";
import { videoInfo } from "../ytAPI";

const Player = createContext();

const PlayerContext = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState(null);

    const [songInfos, setSongInfos] = useState([]);

    useEffect(() => {
        videoInfo(currentTrack?.videoId).then((res) => setSongInfos(res));
    }, [currentTrack]);



    return (
        <>
            {currentTrack && <MinimalizedModal item={currentTrack} songInfos={songInfos} />}
            <Player.Provider value={{ currentTrack, setCurrentTrack }}>{children}</Player.Provider>
        </>
    );
};

export { PlayerContext, Player };
