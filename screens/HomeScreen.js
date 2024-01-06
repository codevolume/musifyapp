import { SafeAreaView, View, Text, FlatList, Platform, Pressable, Modal } from "react-native";
import React, { useContext, useState } from "react";
import { ScrollView } from "react-native-virtualized-view";
import Item from "../components/Item";
import CategoryItem from "../components/CategoryItem";
import { Player } from "../contexts/PlayerContext";
import Colors from "../constans/Colors";

const HomeScreen = () => {
    const theme = { mode: "dark" };
    let activeColors = Colors[theme.mode];

    const Data = require("../testDatas/testData.json");
    const category = require("../testDatas/categoryData.json");
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const [settingModal, setSettingModal] = useState(false);

    const play = () => {};

    return (
        <>
            <View style={{ flex: 1, backgroundColor: activeColors.hue1 }}>
                <SafeAreaView>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center", paddingVertical: 15, paddingTop: Platform.OS === "android" ? 35 : null }}>
                        <Text style={{ fontSize: 24, fontWeight: "bold", color: activeColors.hue12 }}>Good Afternoon!</Text>
                        <Pressable onPress={() => setSettingModal(true)}>
                            <View style={{ backgroundColor: "#0b3b2c", width: 48, height: 48, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1fd8a4" }}>Sz</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View style={{ height: "100%", backgroundColor: activeColors.hue1 }}>
                        <ScrollView style={{ flex: 1, marginBottom: currentTrack ? 275 : 200 }} showsVerticalScrollIndicator={false}>
                            <View style={{ paddingTop: 25, gap: 16 }}>
                                <FlatList contentContainerStyle={{ paddingHorizontal: 25 }} horizontal={true} showsHorizontalScrollIndicator={false} data={category} renderItem={({ item }) => <CategoryItem item={item} />} />
                            </View>
                            <View style={{ paddingTop: 35, paddingHorizontal: 25 }}>
                                <View style={{ paddingBottom: 18 }}>
                                    <Text style={{ fontSize: 20, color: activeColors.hue12, fontWeight: "bold" }}>Quick Play</Text>
                                </View>

                                <FlatList showsHorizontalScrollIndicator={false} data={Data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <Item item={item} isPlaying={item === currentTrack} />} />
                            </View>
                            <View style={{ paddingTop: 35, paddingHorizontal: 25 }}>
                                <View style={{ paddingBottom: 18 }}>
                                    <Text style={{ fontSize: 20, color: activeColors.hue12, fontWeight: "bold" }}>For You</Text>
                                </View>
                                <FlatList showsHorizontalScrollIndicator={false} data={Data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <Item item={item} onPress={play} isPlaying={item === currentTrack} />} />
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
};

export default HomeScreen;
