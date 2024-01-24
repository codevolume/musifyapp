import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const CategoryItem = ({ item }) => {
    const { theme } = useContext(ThemeContext);
    let activeColors = Colors[theme.mode];

    return (
        <View style={{ backgroundColor: activeColors.hue4, paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
            <Text style={{ fontSize: 12, color: activeColors.hue11, fontWeight: "300" }}>{item.title}</Text>
        </View>
    );
};

export default CategoryItem;
