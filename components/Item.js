import { View, Text, Pressable, Linking } from "react-native";
import React, { useContext } from "react";
import { Player } from "../PlayerContext";

const Item = ({ item, onPress, isPlaying }) => {
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const handlePress =  () => {
        setCurrentTrack(item);
        console.log(item)
        onPress(item)
    }


    return (
        <Pressable onPress={handlePress}>
            <View style={{ flexDirection: "row", gap: 11, alignItems: "center", paddingVertical: 6, width: 260 }}>
                <View style={{ backgroundColor: "#1e40af", width: 48, height: 48, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#60a5fa", fontSize: 20, fontWeight: "bold" }}>{item.title.charAt(0)}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#202020", width: 180 }} numberOfLines={1}>{item.title}</Text>
                    <Text style={{ fontSize: 12, color: "#646464" }}>{item.singer}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Item;
