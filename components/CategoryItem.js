import { View, Text } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const CategoryItem = ({ item }) => {
    const { theme } = useContext(ThemeContext);
    let activeColors = Colors[theme.mode];

    return (
        <View style={{ backgroundColor: activeColors.secondary, paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
            <Text style={{ fontSize: 12, color: activeColors.tint, fontWeight: "500" }}>{item.title}</Text>
        </View>
    );
};

export default CategoryItem;
