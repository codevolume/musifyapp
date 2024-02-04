import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { Player } from "../contexts/PlayerContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Svg, { Circle, Path } from "react-native-svg";

const Item = ({ item }) => {
    const { theme } = useContext(ThemeContext);
    let activeColors = Colors[theme.mode];
    const { currentTrack, setCurrentTrack } = useContext(Player);

    const handlePress = () => {
        item.type === "Artist" ? null : setCurrentTrack(item);
    };

    const isCurrentTrack = item?.videoId === currentTrack?.videoId;

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{ alignItems: "center", paddingHorizontal: 15, borderRadius: 4, justifyContent: "space-between", flexDirection: "row", width: 300 }}>
                <View style={{ flexDirection: "row", gap: 11, alignItems: "center", paddingVertical: 6, width: "100%" }}>
                    {item.thumbnail ? (
                        <Image source={{ uri: item.thumbnail }} style={{ width: 48, height: 48, borderRadius: item.type === "Artist" ? 50 : 8 }} />
                    ) : (
                        <View style={{ backgroundColor: "#1e40af", width: 48, height: 48, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#60a5fa", fontSize: 20, fontWeight: "bold" }}>{item.title.charAt(0)}</Text>
                        </View>
                    )}
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500", color: isCurrentTrack ? "green"  : activeColors.hue12 }}>{item.title}</Text>
                        <Text style={{ fontSize: 12, color: activeColors.hue11 }}>{item.subtitle}</Text>
                    </View>
                    {isCurrentTrack ? <Image source={require("../assets/eq.gif")} style={{ height: 20, width: 20 }} /> : null}
                </View>
                <View>
                    {item.type === "Song" ? (
                        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="12" cy="12" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                            <Circle cx="6" cy="12" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                            <Circle cx="18" cy="12" r="1" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
                        </Svg>
                    ) : (
                        <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <Path d="M9 6L15 12L9 18" stroke="#33363F" stroke-width="2" />
                        </Svg>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Item;
