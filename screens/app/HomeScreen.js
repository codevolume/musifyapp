import { SafeAreaView, View, Text, FlatList } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import Svg, { Path } from "react-native-svg";
import React, { useContext } from "react";
import Item from "../../components/Item";
import { Player } from "../../PlayerContext";

const HomeScreen = () => {
    const Data = require("../../testData.json");
    const { currentTrack, setCurrentTrack } = useContext(Player);

    const play = () => {
        console.log("playing...");
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <SafeAreaView>
                {/* Header */}
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center", paddingTop: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: "#202020" }}>Good Afternoon!</Text>
                    <View style={{ backgroundColor: "#0b3b2c", width: 48, height: 48, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1fd8a4" }}>Sz</Text>
                    </View>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentInset={{ left: 25, right: 25, top: 0, bottom: 0 }} style={{ paddingTop: 25, gap: 16 }}>
                    <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>Romance</Text>
                    </View>
                    <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>Feel Good</Text>
                    </View>
                    <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>Podcasts</Text>
                    </View>
                    <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>Party</Text>
                    </View>
                    <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>Feel Good</Text>
                    </View>
                    <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>Feel Good</Text>
                    </View>
                    <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>Feel Good</Text>
                    </View>
                    <View style={{ backgroundColor: "#e8e8e8", paddingHorizontal: 18, paddingVertical: 10, borderRadius: 9, marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: "#646464", fontWeight: "300" }}>Feel Good</Text>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={{ paddingTop: 35, paddingHorizontal: 25 }}>
                        <View style={{ paddingBottom: 18 }}>
                            <Text style={{ fontSize: 20, color: "#202020", fontWeight: "bold" }}>Quick Play</Text>
                        </View>

                        <FlatList numColumns={2} showsHorizontalScrollIndicator={false} data={Data} renderItem={({ item }) => <Item item={item} onPress={play} isPlaying={item === currentTrack} />} />
                    </View>

                    <View style={{ paddingTop: 35, paddingHorizontal: 25 }}>
                        <View style={{ paddingBottom: 18 }}>
                            <Text style={{ fontSize: 20, color: "#202020", fontWeight: "bold" }}>For You</Text>
                        </View>
                        <View></View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default HomeScreen;
