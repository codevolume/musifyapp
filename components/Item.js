import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import React, { useContext, useState } from "react";
import { Player } from "../contexts/PlayerContext";

const Item = ({ item }) => {
    const theme = { mode: "dark" };
    let activeColors = Colors[theme.mode];
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const handlePress = () => {
        setCurrentTrack(item);
    };

    const isCurrentTrack = currentTrack && currentTrack.title == item.title;

    return (
        <TouchableNativeFeedback onPress={handlePress}>
            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: "row", gap: 11, alignItems: "center", paddingVertical: 6, width: "100%" }}>
                    {item.thumbnail ? (
                        <Image source={{ uri: item.thumbnail }} style={{width: 48, height: 48, borderRadius: 8}}/>
                    ) : (
                        <View style={{ backgroundColor: "#1e40af", width: 48, height: 48, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#60a5fa", fontSize: 20, fontWeight: "bold" }}>{/* {item.title.charAt(0)} */}S</Text>
                        </View>
                    )}
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", color: isCurrentTrack ? "green" : activeColors.hue12 }}>{item.title}</Text>
                        <Text style={{ fontSize: 12, color: activeColors.hue11 }}>{item.subtitle}</Text>
                    </View>
                    {isCurrentTrack ? <Image source={require("../assets/eq.gif")} style={{ height: 20, width: 20 }} /> : null}
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

export default Item;
