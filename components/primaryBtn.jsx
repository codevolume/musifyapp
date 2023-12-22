import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function PrimaryBtn ({text, handlePress}) {
    return (
        <TouchableOpacity style={{width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: "white", paddingVertical: 12,}} onPress={handlePress}>
            <Text style={{fontSize: 16, fontWeight: "500"}}>{text}</Text>
        </TouchableOpacity>
    );
};