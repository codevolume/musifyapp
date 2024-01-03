import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";
import { View, Text, Pressable, Modal, Image, SafeAreaView, Platform, ImageBackground } from "react-native";
import Svg, { Path } from "react-native-svg";

const Player = createContext();

const PlayerContext = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [dominantColor, setDominantColor] = useState("#fff");

    return (
        <>
            {/* playercontext */}
            {currentTrack && (
                <>
                    <View style={{ position: "absolute", bottom: Platform.OS === "android" ? 60 : 90, left: 0, right: 0, zIndex: 1 }}>
                        <Pressable onPress={() => setModalVisible(true)}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#fff", paddingHorizontal: 25, paddingVertical: 12, borderRadius: 18, marginHorizontal: 5 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 11, flexShrink: 1 }}>
                                    <View style={{ backgroundColor: "#1e40af", width: 48, height: 48, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: "#60a5fa", fontSize: 20, fontWeight: "bold" }}>{currentTrack?.title.charAt(0)}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: "500", color: "#202020" }} numberOfLines={1}>
                                            {currentTrack?.title}
                                        </Text>
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
                            <View style={{ flex: 1, backgroundColor: "#000" }}>
                                <ImageBackground source={require("./assets/cover.jpg")} resizeMode="cover" blurRadius={50} imageStyle={{ opacity: 0.2 }}>
                                    <StatusBar style="light" />
                                    <SafeAreaView>
                                        <View style={{ paddingHorizontal: 25, paddingTop: 20 }}>
                                            <Pressable onPress={() => setModalVisible(false)}>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
                                                    <Path d="M6 9L12 15L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </Svg>
                                            </Pressable>
                                        </View>
                                        <View style={{ paddingHorizontal: 25, justifyContent: "center", height: "100%", paddingBottom: 200 }}>
                                            <Image source={require("./assets/cover.jpg")} style={{ width: "100%", borderRadius: 6, height: 360 }} resizeMode="contain" />
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

                                            <View style={{ paddingVertical: 20 }}>
                                                <View style={{ width: "100%", height: 8, backgroundColor: "#646464", borderRadius: 4 }}></View>
                                                <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", paddingTop: 20 }}>
                                                    <Text style={{ fontSize: 12, color: "#646464", fontWeight: "500" }}>0:00</Text>
                                                    <Text style={{ fontSize: 12, color: "#646464", fontWeight: "500" }}>2:39</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: "row", gap: 40, alignItems: "center", justifyContent: "center" }}>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <Path
                                                        d="M19.496 4.13599L7.49602 11.136C7.34495 11.224 7.2196 11.3501 7.13248 11.5017C7.04536 11.6533 6.99951 11.8251 6.99951 12C6.99951 12.1748 7.04536 12.3466 7.13248 12.4982C7.2196 12.6498 7.34495 12.776 7.49602 12.864L19.496 19.864C19.648 19.9527 19.8207 19.9997 19.9966 20.0003C20.1726 20.0009 20.3456 19.955 20.4981 19.8674C20.6507 19.7797 20.7775 19.6534 20.8656 19.5011C20.9537 19.3488 21.0001 19.1759 21 19V4.99999C21.0001 4.82404 20.9537 4.65118 20.8656 4.49889C20.7775 4.34659 20.6507 4.22024 20.4981 4.13259C20.3456 4.04494 20.1726 3.9991 19.9966 3.9997C19.8207 4.0003 19.648 4.04731 19.496 4.13599Z"
                                                        fill="white"
                                                    />
                                                    <Path
                                                        d="M4 3.99999C4.24493 4.00002 4.48134 4.08995 4.66437 4.25271C4.84741 4.41547 4.96434 4.63974 4.993 4.88299L5 4.99999V19C4.99972 19.2549 4.90212 19.5 4.72715 19.6854C4.55218 19.8707 4.31305 19.9822 4.05861 19.9972C3.80416 20.0121 3.55362 19.9293 3.35817 19.7657C3.16271 19.6021 3.0371 19.3701 3.007 19.117L3 19V4.99999C3 4.73478 3.10536 4.48042 3.29289 4.29289C3.48043 4.10535 3.73478 3.99999 4 3.99999Z"
                                                        fill="white"
                                                    />
                                                    <Path
                                                        d="M19.496 4.13599L7.49602 11.136C7.34495 11.224 7.2196 11.3501 7.13248 11.5017C7.04536 11.6533 6.99951 11.8251 6.99951 12C6.99951 12.1748 7.04536 12.3466 7.13248 12.4982C7.2196 12.6498 7.34495 12.776 7.49602 12.864L19.496 19.864C19.648 19.9527 19.8207 19.9997 19.9966 20.0003C20.1726 20.0009 20.3456 19.955 20.4981 19.8674C20.6507 19.7797 20.7775 19.6534 20.8656 19.5011C20.9537 19.3488 21.0001 19.1759 21 19V4.99999C21.0001 4.82404 20.9537 4.65118 20.8656 4.49889C20.7775 4.34659 20.6507 4.22024 20.4981 4.13259C20.3456 4.04494 20.1726 3.9991 19.9966 3.9997C19.8207 4.0003 19.648 4.04731 19.496 4.13599Z"
                                                        stroke="white"
                                                    />
                                                    <Path
                                                        d="M4 3.99999C4.24493 4.00002 4.48134 4.08995 4.66437 4.25271C4.84741 4.41547 4.96434 4.63974 4.993 4.88299L5 4.99999V19C4.99972 19.2549 4.90212 19.5 4.72715 19.6854C4.55218 19.8707 4.31305 19.9822 4.05861 19.9972C3.80416 20.0121 3.55362 19.9293 3.35817 19.7657C3.16271 19.6021 3.0371 19.3701 3.007 19.117L3 19V4.99999C3 4.73478 3.10536 4.48042 3.29289 4.29289C3.48043 4.10535 3.73478 3.99999 4 3.99999Z"
                                                        stroke="white"
                                                    />
                                                </Svg>
                                                <View style={{ padding: 16, borderRadius: 50, backgroundColor: "#DE0A26" }}>
                                                    <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                        <Path
                                                            d="M15 6.66667H11.6667C10.7826 6.66667 9.93478 7.01786 9.30965 7.64298C8.68453 8.2681 8.33334 9.11595 8.33334 10V30C8.33334 30.8841 8.68453 31.7319 9.30965 32.357C9.93478 32.9821 10.7826 33.3333 11.6667 33.3333H15C15.8841 33.3333 16.7319 32.9821 17.357 32.357C17.9822 31.7319 18.3333 30.8841 18.3333 30V10C18.3333 9.11595 17.9822 8.2681 17.357 7.64298C16.7319 7.01786 15.8841 6.66667 15 6.66667Z"
                                                            fill="white"
                                                        />
                                                        <Path
                                                            d="M28.3333 6.66667H25C24.116 6.66667 23.2681 7.01786 22.643 7.64298C22.0179 8.2681 21.6667 9.11595 21.6667 10V30C21.6667 30.8841 22.0179 31.7319 22.643 32.357C23.2681 32.9821 24.116 33.3333 25 33.3333H28.3333C29.2174 33.3333 30.0652 32.9821 30.6904 32.357C31.3155 31.7319 31.6667 30.8841 31.6667 30V10C31.6667 9.11595 31.3155 8.2681 30.6904 7.64298C30.0652 7.01786 29.2174 6.66667 28.3333 6.66667Z"
                                                            fill="white"
                                                        />
                                                        <Path
                                                            d="M15 6.66667H11.6667C10.7826 6.66667 9.93478 7.01786 9.30965 7.64298C8.68453 8.2681 8.33334 9.11595 8.33334 10V30C8.33334 30.8841 8.68453 31.7319 9.30965 32.357C9.93478 32.9821 10.7826 33.3333 11.6667 33.3333H15C15.8841 33.3333 16.7319 32.9821 17.357 32.357C17.9822 31.7319 18.3333 30.8841 18.3333 30V10C18.3333 9.11595 17.9822 8.2681 17.357 7.64298C16.7319 7.01786 15.8841 6.66667 15 6.66667Z"
                                                            stroke="white"
                                                        />
                                                        <Path
                                                            d="M28.3333 6.66667H25C24.116 6.66667 23.2681 7.01786 22.643 7.64298C22.0179 8.2681 21.6667 9.11595 21.6667 10V30C21.6667 30.8841 22.0179 31.7319 22.643 32.357C23.2681 32.9821 24.116 33.3333 25 33.3333H28.3333C29.2174 33.3333 30.0652 32.9821 30.6904 32.357C31.3155 31.7319 31.6667 30.8841 31.6667 30V10C31.6667 9.11595 31.3155 8.2681 30.6904 7.64298C30.0652 7.01786 29.2174 6.66667 28.3333 6.66667Z"
                                                            stroke="white"
                                                        />
                                                    </Svg>
                                                </View>
                                                <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <Path
                                                        d="M3 4.99999V19C2.99995 19.1759 3.04632 19.3488 3.13444 19.5011C3.22256 19.6534 3.3493 19.7797 3.50188 19.8674C3.65445 19.955 3.82744 20.0009 4.00339 20.0003C4.17935 19.9997 4.35203 19.9527 4.504 19.864L16.504 12.864C16.6551 12.776 16.7804 12.6498 16.8675 12.4982C16.9547 12.3466 17.0005 12.1748 17.0005 12C17.0005 11.8251 16.9547 11.6533 16.8675 11.5017C16.7804 11.3501 16.6551 11.224 16.504 11.136L4.504 4.13599C4.35203 4.04731 4.17935 4.0003 4.00339 3.9997C3.82744 3.9991 3.65445 4.04494 3.50188 4.13259C3.3493 4.22024 3.22256 4.34659 3.13444 4.49889C3.04632 4.65118 2.99995 4.82404 3 4.99999Z"
                                                        fill="white"
                                                    />
                                                    <Path
                                                        d="M20 3.99999C20.2449 4.00002 20.4813 4.08995 20.6644 4.25271C20.8474 4.41547 20.9643 4.63974 20.993 4.88299L21 4.99999V19C20.9997 19.2549 20.9021 19.5 20.7272 19.6854C20.5522 19.8707 20.313 19.9822 20.0586 19.9972C19.8042 20.0121 19.5536 19.9293 19.3582 19.7657C19.1627 19.6021 19.0371 19.3701 19.007 19.117L19 19V4.99999C19 4.73478 19.1054 4.48042 19.2929 4.29289C19.4804 4.10535 19.7348 3.99999 20 3.99999Z"
                                                        fill="white"
                                                    />
                                                    <Path
                                                        d="M3 4.99999V19C2.99995 19.1759 3.04632 19.3488 3.13444 19.5011C3.22256 19.6534 3.3493 19.7797 3.50188 19.8674C3.65445 19.955 3.82744 20.0009 4.00339 20.0003C4.17935 19.9997 4.35203 19.9527 4.504 19.864L16.504 12.864C16.6551 12.776 16.7804 12.6498 16.8675 12.4982C16.9547 12.3466 17.0005 12.1748 17.0005 12C17.0005 11.8251 16.9547 11.6533 16.8675 11.5017C16.7804 11.3501 16.6551 11.224 16.504 11.136L4.504 4.13599C4.35203 4.04731 4.17935 4.0003 4.00339 3.9997C3.82744 3.9991 3.65445 4.04494 3.50188 4.13259C3.3493 4.22024 3.22256 4.34659 3.13444 4.49889C3.04632 4.65118 2.99995 4.82404 3 4.99999Z"
                                                        stroke="white"
                                                    />
                                                    <Path
                                                        d="M20 3.99999C20.2449 4.00002 20.4813 4.08995 20.6644 4.25271C20.8474 4.41547 20.9643 4.63974 20.993 4.88299L21 4.99999V19C20.9997 19.2549 20.9021 19.5 20.7272 19.6854C20.5522 19.8707 20.313 19.9822 20.0586 19.9972C19.8042 20.0121 19.5536 19.9293 19.3582 19.7657C19.1627 19.6021 19.0371 19.3701 19.007 19.117L19 19V4.99999C19 4.73478 19.1054 4.48042 19.2929 4.29289C19.4804 4.10535 19.7348 3.99999 20 3.99999Z"
                                                        stroke="white"
                                                    />
                                                </Svg>
                                            </View>
                                        </View>
                                    </SafeAreaView>
                                </ImageBackground>
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
