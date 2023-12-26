import { createContext, useState } from "react";
import { View, Text, Pressable, Modal, Image, SafeAreaView, Platform } from "react-native";
import Svg, { Path } from "react-native-svg";

const Player = createContext();

const PlayerContext = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    return (
        <>
            {/* playercontext */}
            {currentTrack && (
                <>
                    <View style={{ position: "absolute", bottom: Platform.OS === "android" ? 60 : 90, left: 0, right: 0, zIndex: 1 }}>
                        <Pressable onPress={() => setModalVisible(true)}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff", paddingHorizontal: 25, paddingVertical: 12, borderRadius: 18, marginHorizontal: 5 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 11 }}>
                                    <View style={{ backgroundColor: "#1e40af", width: 48, height: 48, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
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
                    <View>
                        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} animationType="slide" presentationStyle="fullScreen">
                            <View style={{ flex: 1, backgroundColor: "gray" }}>
                                <SafeAreaView>
                                    <View style={{ paddingHorizontal: 25 }}>
                                        <Pressable onPress={() => setModalVisible(false)}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
                                                <Path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </Svg>
                                        </Pressable>
                                    </View>
                                    <View style={{ paddingHorizontal: 25, backgroundColor: "gray", justifyContent: "center", height: "100%" }}>
                                        <Image source={{ uri: "https://images.genius.com/f19cb112f2db0a2bfbc4d97f87aa927e.500x500x1.png" }} style={{ width: "100%", borderRadius: 6, height: 360 }} resizeMode="contain" />
                                        <View style={{ paddingTop: 20, gap: 10 }}>
                                            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>{currentTrack?.title}</Text>
                                            <Text style={{ fontSize: 16, color: "#b4b4b4" }}>{currentTrack?.singer}</Text>
                                        </View>

                                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", paddingTop: 20 }}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <Path
                                                    d="M18 4L21 7M21 7L18 10M21 7H16C14.6739 7 13.4021 7.52678 12.4645 8.46447C11.5268 9.40215 11 10.6739 11 12M18 20L21 17M21 17L18 14M21 17H16C14.6739 17 13.4021 16.4732 12.4645 15.5355C11.5268 14.5979 11 13.3261 11 12M3 7H6C7.32608 7 8.59785 7.52678 9.53553 8.46447C10.4732 9.40215 11 10.6739 11 12M11 12C11 13.3261 10.4732 14.5979 9.53553 15.5355C8.59785 16.4732 7.32608 17 6 17H3"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </Svg>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <Path
                                                    d="M4.66675 12V9C4.66675 8.20435 4.98282 7.44129 5.54543 6.87868C6.10804 6.31607 6.8711 6 7.66675 6H20.6667M20.6667 6L17.6667 3M20.6667 6L17.6667 9M20.6667 12V15C20.6667 15.7956 20.3507 16.5587 19.7881 17.1213C19.2255 17.6839 18.4624 18 17.6667 18H4.66675M4.66675 18L7.66675 21M4.66675 18L7.66675 15"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </Svg>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <Path
                                                    d="M19.8333 12.572L12.3333 20L4.83331 12.572C4.33861 12.0906 3.94895 11.512 3.68886 10.8726C3.42876 10.2333 3.30387 9.54694 3.32205 8.85693C3.34022 8.16691 3.50107 7.48813 3.79447 6.86333C4.08786 6.23853 4.50744 5.68125 5.0268 5.22657C5.54615 4.7719 6.15401 4.42968 6.81212 4.22147C7.47023 4.01327 8.16431 3.94358 8.85068 4.0168C9.53704 4.09001 10.2008 4.30455 10.8002 4.6469C11.3996 4.98925 11.9216 5.45199 12.3333 6.00599C12.7468 5.45602 13.2694 4.99731 13.8684 4.6586C14.4674 4.31988 15.1298 4.10844 15.8142 4.03751C16.4987 3.96658 17.1904 4.03769 17.8461 4.24639C18.5018 4.45508 19.1073 4.79687 19.6249 5.25036C20.1424 5.70385 20.5607 6.25928 20.8537 6.88189C21.1467 7.50449 21.3081 8.18088 21.3276 8.8687C21.3472 9.55653 21.2246 10.241 20.9674 10.8792C20.7103 11.5175 20.3242 12.0958 19.8333 12.578"
                                                    stroke="white"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </Svg>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <Path d="M4 6H20M7 12H20M10 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </Svg>
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </View>
                        </Modal>
                    </View>
                </>
            )}
            <Player.Provider value={{ currentTrack, setCurrentTrack }}>{children}</Player.Provider>
        </>
    );
};

export { PlayerContext, Player };
