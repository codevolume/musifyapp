import React, { useContext, useState } from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { View, Text, Modal, SafeAreaView, Pressable, Switch } from "react-native";
import { Settings } from "../contexts/SettingsContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Colors from "../constans/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ProfileModal = () => {
    const { settingsModal, setSettingsModal } = useContext(Settings);

    const { theme, updateTheme } = useContext(ThemeContext);
    let activeColors = Colors[theme.mode];

    const [value, setValue] = useState(false);

    const toggleSwitch = async () => {
        updateTheme();
        try {
            await AsyncStorage.setItem("colormode", value ? "light" : "dark");
            console.log(await AsyncStorage.getItem("colormode"));
        } catch (err) {
            console.log(err);
        }

        setValue((prevState) => !prevState);
    };

    return (
        <View>
            <Modal visible={settingsModal} onRequestClose={() => setSettingsModal(false)} animationType="slide" presentationStyle="fullScreen">
                <View style={{ flex: 1, backgroundColor: activeColors.hue1 }}>
                    <SafeAreaView>
                        <View style={{ alignItems: "flex-end", paddingHorizontal: 25, paddingTop: 20 }}>
                            <Pressable onPress={() => setSettingsModal(false)}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <Path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </Svg>
                            </Pressable>
                        </View>
                        <View style={{ alignItems: "center", paddingTop: 40 }}>
                            <View style={{ backgroundColor: "#0b3b2c", width: 72, height: 72, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1fd8a4" }}>Sz</Text>
                            </View>
                            <Text style={{ fontSize: 24, fontWeight: "bold", color: activeColors.hue12, paddingTop: 20 }}>Szilveszter</Text>
                        </View>

                        <View style={{ paddingHorizontal: 25, paddingTop: 40, gap: 35 }}>
                            <View style={{ gap: 18 }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: activeColors.hue12 }}>Megjelenés</Text>
                                <View style={{ gap: 18 }}>
                                    <Pressable>
                                        <View style={{ backgroundColor: activeColors.hue2, width: "100%", paddingVertical: 16, paddingHorizontal: 16, borderRadius: 6, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                                                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <Circle cx="12" cy="12" r="9" stroke={activeColors.hue12} stroke-width="2" />
                                                    <Path d="M18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364L12 12L18.364 5.63604Z" fill={activeColors.hue12} />
                                                </Svg>
                                                <Text style={{ fontSize: 16, fontWeight: "bold", color: activeColors.hue12 }}>Sötétmód</Text>
                                            </View>
                                            <Switch value={value} onValueChange={toggleSwitch} />
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </Modal>
        </View>
    );
};

export default ProfileModal;
