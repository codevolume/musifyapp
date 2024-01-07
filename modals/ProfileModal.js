import { View, Text } from "react-native";
import React from "react";

const ProfileModal = ({settingModal, setSettingModal}) => {
    return (
        <View>
            <Modal visible={settingModal} onRequestClose={() => setSettingModal(false)} animationType="slide" presentationStyle="fullScreen">
                <View style={{ flex: 1, backgroundColor: activeColors.hue3 }}>
                    <SafeAreaView>
                        <View style={{ alignItems: "flex-end", paddingHorizontal: 25, paddingTop: 20 }}>
                            <Pressable onPress={() => setSettingModal(false)}>
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
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: activeColors.hue12 }}>Általános</Text>
                                <View style={{ gap: 18 }}>
                                    <Pressable>
                                        <View style={{ backgroundColor: "white", width: "100%", paddingVertical: 16, paddingHorizontal: 16, borderRadius: 6, flexDirection: "row", alignItems: "center", gap: 16 }}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <Path
                                                    d="M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066"
                                                    stroke="red"
                                                    stroke-width="2"
                                                />
                                                <Path
                                                    d="M16 12L16.7809 11.3753L17.2806 12L16.7809 12.6247L16 12ZM4 13C3.44771 13 3 12.5523 3 12C3 11.4477 3.44771 11 4 11V13ZM12.7809 6.3753L16.7809 11.3753L15.2191 12.6247L11.2191 7.6247L12.7809 6.3753ZM16.7809 12.6247L12.7809 17.6247L11.2191 16.3753L15.2191 11.3753L16.7809 12.6247ZM16 13H4V11H16V13Z"
                                                    fill="red"
                                                />
                                            </Svg>
                                            <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>Kijelentkezés</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable>
                                        <View style={{ backgroundColor: "white", width: "100%", paddingVertical: 16, paddingHorizontal: 16, borderRadius: 6, flexDirection: "row", alignItems: "center", gap: 16 }}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <Path
                                                    d="M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066"
                                                    stroke="red"
                                                    stroke-width="2"
                                                />
                                                <Path
                                                    d="M16 12L16.7809 11.3753L17.2806 12L16.7809 12.6247L16 12ZM4 13C3.44771 13 3 12.5523 3 12C3 11.4477 3.44771 11 4 11V13ZM12.7809 6.3753L16.7809 11.3753L15.2191 12.6247L11.2191 7.6247L12.7809 6.3753ZM16.7809 12.6247L12.7809 17.6247L11.2191 16.3753L15.2191 11.3753L16.7809 12.6247ZM16 13H4V11H16V13Z"
                                                    fill="red"
                                                />
                                            </Svg>
                                            <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>Kijelentkezés</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={{ gap: 18 }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: activeColors.hue12 }}>Biztonság</Text>
                                <View style={{ gap: 18 }}>
                                    <Pressable>
                                        <View style={{ backgroundColor: "white", width: "100%", paddingVertical: 16, paddingHorizontal: 16, borderRadius: 6, flexDirection: "row", alignItems: "center", gap: 16 }}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <Path
                                                    d="M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066"
                                                    stroke="red"
                                                    stroke-width="2"
                                                />
                                                <Path
                                                    d="M16 12L16.7809 11.3753L17.2806 12L16.7809 12.6247L16 12ZM4 13C3.44771 13 3 12.5523 3 12C3 11.4477 3.44771 11 4 11V13ZM12.7809 6.3753L16.7809 11.3753L15.2191 12.6247L11.2191 7.6247L12.7809 6.3753ZM16.7809 12.6247L12.7809 17.6247L11.2191 16.3753L15.2191 11.3753L16.7809 12.6247ZM16 13H4V11H16V13Z"
                                                    fill="red"
                                                />
                                            </Svg>
                                            <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>Kijelentkezés</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable>
                                        <View style={{ backgroundColor: "white", width: "100%", paddingVertical: 16, paddingHorizontal: 16, borderRadius: 6, flexDirection: "row", alignItems: "center", gap: 16 }}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <Path
                                                    d="M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066"
                                                    stroke="red"
                                                    stroke-width="2"
                                                />
                                                <Path
                                                    d="M16 12L16.7809 11.3753L17.2806 12L16.7809 12.6247L16 12ZM4 13C3.44771 13 3 12.5523 3 12C3 11.4477 3.44771 11 4 11V13ZM12.7809 6.3753L16.7809 11.3753L15.2191 12.6247L11.2191 7.6247L12.7809 6.3753ZM16.7809 12.6247L12.7809 17.6247L11.2191 16.3753L15.2191 11.3753L16.7809 12.6247ZM16 13H4V11H16V13Z"
                                                    fill="red"
                                                />
                                            </Svg>
                                            <Text style={{ fontSize: 16, fontWeight: "bold", color: "red" }}>Kijelentkezés</Text>
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
