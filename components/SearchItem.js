import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SearchItem = ({ item }) => {
    const theme = { mode: "dark" };
    let activeColors = Colors[theme.mode];
    return (
        <View style={{ flexDirection: "row", gap: 11, justifyContent: "space-between", alignItems: "center", paddingVertical: 6, width: "100%" }}>
            <View style={{ flexDirection: "row", gap: 16 }}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
                    <Circle cx="11" cy="11" r="7" stroke={activeColors.hue11} stroke-width="2" />
                    <Path d="M20 20L17 17" stroke={activeColors.hue11} stroke-width="2" stroke-linecap="round" />
                </Svg>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "500", color: activeColors.hue12, width: 180 }} numberOfLines={1}>
                        {item}
                    </Text>
                </View>
            </View>
            <View>
                <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
                    <Path d="M9 6L15 12L9 18" stroke={activeColors.hue11} stroke-width="2" />
                </Svg>
            </View>
        </View>
    );
};

export default SearchItem;
