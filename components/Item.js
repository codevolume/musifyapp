import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { Player } from "../PlayerContext";

const Item = ({ title, singer }) => {
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const handlePress = () => {
      setCurrentTrack(title);
    }
  
    return (
        <Pressable onPress={handlePress}>
            <View style={{ flexDirection: "row", gap: 11, alignItems: "center", paddingVertical: 6, width: 260 }}>
                <View style={{ backgroundColor: "#1e40af", width: 48, height: 48, borderRadius: 8, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#60a5fa", fontSize: 20, fontWeight: "bold" }}>{title.charAt(0)}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#202020" }}>{title}</Text>
                    <Text style={{ fontSize: 12, color: "#646464" }}>{singer}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Item;
