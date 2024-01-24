import React, { createContext, useState } from "react";

const Settings = createContext();

const SettingsContext = ({ children }) => {
    const [settingsModal, setSettingsModal] = useState(false);

    return <Settings.Provider value={{ settingsModal, setSettingsModal }}>{children}</Settings.Provider>;
};

export { SettingsContext, Settings };
