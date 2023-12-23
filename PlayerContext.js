import { createContext, useState } from "react";
import { View, Text, Pressable } from "react-native";
import Svg, { Path } from "react-native-svg";

const Player = createContext();

const PlayerContext = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    return (
        <>
            {/* playercontext */}
            {currentTrack && (
                <View style={{ position: "absolute", bottom: 90, left: 0, right: 0, zIndex: 1 }}>
                    <Pressable onPress={() => setModalVisible(true)}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#F9F9F9", paddingHorizontal: 25, paddingVertical: 12, borderRadius: 18, marginHorizontal: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 11 }}>
                                <View style={{ backgroundColor: "#1e40af", width: 48, height: 48, borderRadius: "50%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#60a5fa", fontSize: 20, fontWeight: "bold" }}>{currentTrack?.title.charAt(0)}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#202020" }}>{currentTrack?.title}</Text>
                                    <Text style={{ fontSize: 12, color: "#646464" }}>{currentTrack?.singer}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
                                    <Path d="M21.82 10L13.164 14.9977V10.541H11V21.361H13.164V16.9042L21.82 21.902V10Z" fill="#202020" />
                                </Svg>

                                <Svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 34 34" fill="none">
                                    <Path d="M0 17C0 7.61116 7.61116 0 17 0V0C26.3888 0 34 7.61116 34 17V17C34 26.3888 26.3888 34 17 34V34C7.61116 34 0 26.3888 0 17V17Z" fill="#202020" />
                                    <Path d="M12.7697 23.3748L23.8112 16.9998L12.7697 10.6248V23.3748Z" fill="#F9F9F9" />
                                </Svg>

                                <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
                                    <Path d="M19.656 10.5365V14.9565L11 10V21.8036L19.656 16.8472V21.2671H21.82V10.5365H19.656Z" fill="#202020" />
                                </Svg>
                            </View>
                        </View>
                    </Pressable>
                </View>
            )}
            <Player.Provider value={{ currentTrack, setCurrentTrack }}>{children}</Player.Provider>
        </>
    );
};

export { PlayerContext, Player };
