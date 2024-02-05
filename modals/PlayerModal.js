import { View, Text, TouchableOpacity, Modal, Image, SafeAreaView, ImageBackground, Animated } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import Svg, { Path } from "react-native-svg";
import GestureRecognizer from "react-native-swipe-gestures";
import { ThemeContext } from "../contexts/ThemeContext";
import Icons from "../constans/Icons";

const PlayerModal = ({ modalVisible, setModalVisible, songInfos }) => {
    const { theme } = useContext(ThemeContext);
    let activeColors = Colors[theme.mode];

    return (
        <GestureRecognizer style={{ flex: 1 }} onSwipeDown={() => setModalVisible(false)}>
            <Modal visible={modalVisible} animationType="slide" presentationStyle="fullScreen" statusBarTranslucent={true} style={{ flex: 1 }}>
                <Animated.View style={{ flex: 1, backgroundColor: activeColors.primary }}>
                    <StatusBar style="light" />
                    <SafeAreaView>
                        <View style={{ paddingHorizontal: 25, paddingTop: 20 }}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
                                    <Path d="M6 9L12 15L18 9" stroke={activeColors.tint} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </Svg>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingHorizontal: 25, justifyContent: "center", height: "100%", paddingBottom: 200 }}>
                            <Image source={{ uri: songInfos?.coverPhoto?.url }} style={{ width: "100%", borderRadius: 6, height: 360 }} resizeMode="cover" />
                            <View style={{ paddingTop: 20, gap: 10 }}>
                                <Text style={{ fontSize: 24, fontWeight: "bold", color: activeColors.tint }}>{songInfos?.title}</Text>
                                <Text style={{ fontSize: 16, color: activeColors.tertiary }}>{songInfos?.author}</Text>
                            </View>

                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", paddingTop: 20 }}>
                                <Icons name={"shuffle"} color={activeColors.tint} size={24} />
                                <Icons name={"repeat"} color={activeColors.tint} size={24} />
                                <Icons name={"like"} color={activeColors.tint} size={24} />
                            </View>

                            <View style={{ paddingVertical: 20 }}>
                                <View style={{ width: "100%", height: 8, backgroundColor: activeColors.secondary, borderRadius: 4 }}></View>
                                <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", paddingTop: 20 }}>
                                    <Text style={{ fontSize: 12, color: activeColors.tertiary, fontWeight: "500" }}>0:00</Text>
                                    <Text style={{ fontSize: 12, color: activeColors.tertiary, fontWeight: "500" }}>2:39</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", gap: 40, alignItems: "center", justifyContent: "center" }}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <Path d="M19.496 4.13599L7.49602 11.136C7.34495 11.224 7.2196 11.3501 7.13248 11.5017C7.04536 11.6533 6.99951 11.8251 6.99951 12C6.99951 12.1748 7.04536 12.3466 7.13248 12.4982C7.2196 12.6498 7.34495 12.776 7.49602 12.864L19.496 19.864C19.648 19.9527 19.8207 19.9997 19.9966 20.0003C20.1726 20.0009 20.3456 19.955 20.4981 19.8674C20.6507 19.7797 20.7775 19.6534 20.8656 19.5011C20.9537 19.3488 21.0001 19.1759 21 19V4.99999C21.0001 4.82404 20.9537 4.65118 20.8656 4.49889C20.7775 4.34659 20.6507 4.22024 20.4981 4.13259C20.3456 4.04494 20.1726 3.9991 19.9966 3.9997C19.8207 4.0003 19.648 4.04731 19.496 4.13599Z" fill={activeColors.tint} />
                                    <Path d="M4 3.99999C4.24493 4.00002 4.48134 4.08995 4.66437 4.25271C4.84741 4.41547 4.96434 4.63974 4.993 4.88299L5 4.99999V19C4.99972 19.2549 4.90212 19.5 4.72715 19.6854C4.55218 19.8707 4.31305 19.9822 4.05861 19.9972C3.80416 20.0121 3.55362 19.9293 3.35817 19.7657C3.16271 19.6021 3.0371 19.3701 3.007 19.117L3 19V4.99999C3 4.73478 3.10536 4.48042 3.29289 4.29289C3.48043 4.10535 3.73478 3.99999 4 3.99999Z" fill={activeColors.tint} />
                                    <Path d="M19.496 4.13599L7.49602 11.136C7.34495 11.224 7.2196 11.3501 7.13248 11.5017C7.04536 11.6533 6.99951 11.8251 6.99951 12C6.99951 12.1748 7.04536 12.3466 7.13248 12.4982C7.2196 12.6498 7.34495 12.776 7.49602 12.864L19.496 19.864C19.648 19.9527 19.8207 19.9997 19.9966 20.0003C20.1726 20.0009 20.3456 19.955 20.4981 19.8674C20.6507 19.7797 20.7775 19.6534 20.8656 19.5011C20.9537 19.3488 21.0001 19.1759 21 19V4.99999C21.0001 4.82404 20.9537 4.65118 20.8656 4.49889C20.7775 4.34659 20.6507 4.22024 20.4981 4.13259C20.3456 4.04494 20.1726 3.9991 19.9966 3.9997C19.8207 4.0003 19.648 4.04731 19.496 4.13599Z" stroke={activeColors.tint} />
                                    <Path d="M4 3.99999C4.24493 4.00002 4.48134 4.08995 4.66437 4.25271C4.84741 4.41547 4.96434 4.63974 4.993 4.88299L5 4.99999V19C4.99972 19.2549 4.90212 19.5 4.72715 19.6854C4.55218 19.8707 4.31305 19.9822 4.05861 19.9972C3.80416 20.0121 3.55362 19.9293 3.35817 19.7657C3.16271 19.6021 3.0371 19.3701 3.007 19.117L3 19V4.99999C3 4.73478 3.10536 4.48042 3.29289 4.29289C3.48043 4.10535 3.73478 3.99999 4 3.99999Z" stroke={activeColors.tint} />
                                </Svg>
                                <View style={{ padding: 16, borderRadius: 50, backgroundColor: activeColors.secondary }}>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <Path d="M15 6.66667H11.6667C10.7826 6.66667 9.93478 7.01786 9.30965 7.64298C8.68453 8.2681 8.33334 9.11595 8.33334 10V30C8.33334 30.8841 8.68453 31.7319 9.30965 32.357C9.93478 32.9821 10.7826 33.3333 11.6667 33.3333H15C15.8841 33.3333 16.7319 32.9821 17.357 32.357C17.9822 31.7319 18.3333 30.8841 18.3333 30V10C18.3333 9.11595 17.9822 8.2681 17.357 7.64298C16.7319 7.01786 15.8841 6.66667 15 6.66667Z" fill={activeColors.tint} />
                                        <Path d="M28.3333 6.66667H25C24.116 6.66667 23.2681 7.01786 22.643 7.64298C22.0179 8.2681 21.6667 9.11595 21.6667 10V30C21.6667 30.8841 22.0179 31.7319 22.643 32.357C23.2681 32.9821 24.116 33.3333 25 33.3333H28.3333C29.2174 33.3333 30.0652 32.9821 30.6904 32.357C31.3155 31.7319 31.6667 30.8841 31.6667 30V10C31.6667 9.11595 31.3155 8.2681 30.6904 7.64298C30.0652 7.01786 29.2174 6.66667 28.3333 6.66667Z" fill={activeColors.tint} />
                                        <Path d="M15 6.66667H11.6667C10.7826 6.66667 9.93478 7.01786 9.30965 7.64298C8.68453 8.2681 8.33334 9.11595 8.33334 10V30C8.33334 30.8841 8.68453 31.7319 9.30965 32.357C9.93478 32.9821 10.7826 33.3333 11.6667 33.3333H15C15.8841 33.3333 16.7319 32.9821 17.357 32.357C17.9822 31.7319 18.3333 30.8841 18.3333 30V10C18.3333 9.11595 17.9822 8.2681 17.357 7.64298C16.7319 7.01786 15.8841 6.66667 15 6.66667Z" stroke={activeColors.tint} />
                                        <Path d="M28.3333 6.66667H25C24.116 6.66667 23.2681 7.01786 22.643 7.64298C22.0179 8.2681 21.6667 9.11595 21.6667 10V30C21.6667 30.8841 22.0179 31.7319 22.643 32.357C23.2681 32.9821 24.116 33.3333 25 33.3333H28.3333C29.2174 33.3333 30.0652 32.9821 30.6904 32.357C31.3155 31.7319 31.6667 30.8841 31.6667 30V10C31.6667 9.11595 31.3155 8.2681 30.6904 7.64298C30.0652 7.01786 29.2174 6.66667 28.3333 6.66667Z" stroke={activeColors.tint} />
                                    </Svg>
                                </View>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <Path d="M3 4.99999V19C2.99995 19.1759 3.04632 19.3488 3.13444 19.5011C3.22256 19.6534 3.3493 19.7797 3.50188 19.8674C3.65445 19.955 3.82744 20.0009 4.00339 20.0003C4.17935 19.9997 4.35203 19.9527 4.504 19.864L16.504 12.864C16.6551 12.776 16.7804 12.6498 16.8675 12.4982C16.9547 12.3466 17.0005 12.1748 17.0005 12C17.0005 11.8251 16.9547 11.6533 16.8675 11.5017C16.7804 11.3501 16.6551 11.224 16.504 11.136L4.504 4.13599C4.35203 4.04731 4.17935 4.0003 4.00339 3.9997C3.82744 3.9991 3.65445 4.04494 3.50188 4.13259C3.3493 4.22024 3.22256 4.34659 3.13444 4.49889C3.04632 4.65118 2.99995 4.82404 3 4.99999Z" fill={activeColors.tint} />
                                    <Path d="M20 3.99999C20.2449 4.00002 20.4813 4.08995 20.6644 4.25271C20.8474 4.41547 20.9643 4.63974 20.993 4.88299L21 4.99999V19C20.9997 19.2549 20.9021 19.5 20.7272 19.6854C20.5522 19.8707 20.313 19.9822 20.0586 19.9972C19.8042 20.0121 19.5536 19.9293 19.3582 19.7657C19.1627 19.6021 19.0371 19.3701 19.007 19.117L19 19V4.99999C19 4.73478 19.1054 4.48042 19.2929 4.29289C19.4804 4.10535 19.7348 3.99999 20 3.99999Z" fill={activeColors.tint} />
                                    <Path d="M3 4.99999V19C2.99995 19.1759 3.04632 19.3488 3.13444 19.5011C3.22256 19.6534 3.3493 19.7797 3.50188 19.8674C3.65445 19.955 3.82744 20.0009 4.00339 20.0003C4.17935 19.9997 4.35203 19.9527 4.504 19.864L16.504 12.864C16.6551 12.776 16.7804 12.6498 16.8675 12.4982C16.9547 12.3466 17.0005 12.1748 17.0005 12C17.0005 11.8251 16.9547 11.6533 16.8675 11.5017C16.7804 11.3501 16.6551 11.224 16.504 11.136L4.504 4.13599C4.35203 4.04731 4.17935 4.0003 4.00339 3.9997C3.82744 3.9991 3.65445 4.04494 3.50188 4.13259C3.3493 4.22024 3.22256 4.34659 3.13444 4.49889C3.04632 4.65118 2.99995 4.82404 3 4.99999Z" stroke={activeColors.tint} />
                                    <Path d="M20 3.99999C20.2449 4.00002 20.4813 4.08995 20.6644 4.25271C20.8474 4.41547 20.9643 4.63974 20.993 4.88299L21 4.99999V19C20.9997 19.2549 20.9021 19.5 20.7272 19.6854C20.5522 19.8707 20.313 19.9822 20.0586 19.9972C19.8042 20.0121 19.5536 19.9293 19.3582 19.7657C19.1627 19.6021 19.0371 19.3701 19.007 19.117L19 19V4.99999C19 4.73478 19.1054 4.48042 19.2929 4.29289C19.4804 4.10535 19.7348 3.99999 20 3.99999Z" stroke={activeColors.tint} />
                                </Svg>
                            </View>
                        </View>
                    </SafeAreaView>
                </Animated.View>
            </Modal>
        </GestureRecognizer>
    );
};

export default PlayerModal;
