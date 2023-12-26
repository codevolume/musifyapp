import { View, Text } from "react-native";
import React from "react";

const CategoryItem = ({ item }) => {
    return (
        <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
            <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>item</Text>
        </View>
    );
};

export default CategoryItem;
