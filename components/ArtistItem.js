import { View, Text, Image } from "react-native";
import React from "react";

const ArtistItem = ({ item }) => {
    const theme = { mode: "dark" };
    let activeColors = Colors[theme.mode];
    console.log("Item: " + item);
    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 11, alignItems: "center", paddingVertical: 6, width: "100%" }}>
                <Image source={{uri: item.thumbnail}} style={{width: 48, height: 48, borderRadius: 24}}/>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "500", color: activeColors.hue12 }}>{item.title}</Text>
                    <Text style={{ fontSize: 12, color: activeColors.hue11 }}>{item.type}</Text>
                </View>
            </View>
        </View>
    );
};

export default ArtistItem;
