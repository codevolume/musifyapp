import { SafeAreaView, View, Text, ScrollView, FlatList } from "react-native";
import Svg, { Path } from "react-native-svg";
import React, { useContext } from "react";
import Item from "../../components/Item";
import { Player } from "../../PlayerContext";

const HomeScreen = () => {
    const Data = require("../../testData.json")
    const { currentTrack, setCurrentTrack } = useContext(Player);

    const play = () => {
        console.log("playing...")
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <SafeAreaView>
                {/* Header */}
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center", paddingTop: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: "#202020" }}>Good Morning!</Text>
                    <View style={{ backgroundColor: "#0b3b2c", width: 48, height: 48, borderRadius: "50%", alignItems: "center", justifyContent: "center" }}>
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
                    {/*  */}
                    <View style={{ paddingTop: 35, paddingHorizontal: 25 }}>
                        <View style={{ paddingBottom: 18 }}>
                            <Text style={{ fontSize: 20, color: "#202020", fontWeight: "bold" }}>Quick Play</Text>
                        </View>

                        <FlatList numColumns={2} showsHorizontalScrollIndicator={false} data={Data} renderItem={({ item }) => <Item item={item} onPress={play} isPlaying={item === currentTrack} />} />
                        {/*                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: "column" }}>
                                <Item title={"Pogi Hip-Hop"} singer={"Pogány Induló"} />
                                <Item title={"Motel"} singer={"Beton.Hofi"} />
                                <Item title={"10 Pink BB"} singer={"gyuris, Grasa"} />
                                <Item title={"Dealer"} singer={"KKevin"} />
                            </View>

                            <View style={{ flexDirection: "column", gap: 0 }}>
                                <Item title={"MELTDOWN (feat. Drake)"} singer={"Travis Scott"} />
                                <Item title={"Elég!"} singer={"Tirpa"} />
                                <Item title={"Smack That"} singer={"Akon, Eminem"} />
                                <Item title={"No Role Modelz"} singer={"J. Cole"} />
                            </View>
                        </ScrollView> */}
                    </View>
                    {/*  */}

                    <View style={{ paddingTop: 35, paddingHorizontal: 25 }}>
                        <View style={{ paddingBottom: 18 }}>
                            <Text style={{ fontSize: 20, color: "#202020", fontWeight: "bold" }}>For You</Text>
                        </View>
                        <View></View>
                    </View>
                </ScrollView>

                {/* playercontext */}
                {currentTrack && (
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#F9F9F9", paddingHorizontal: 25, paddingVertical: 12, borderRadius: 18, marginHorizontal: 5 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 11 }}>
                            <View style={{ backgroundColor: "#1e40af", width: 48, height: 48, borderRadius: "50%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "#60a5fa", fontSize: 20, fontWeight: "bold" }}>{currentTrack?.title.charAt(0)}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: "500", color: "#202020" }}>{currentTrack?.title}</Text>
                                <Text style={{ fontSize: 12, color: "#646464" }}>{currentTrack?.singer}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
                                <Path d="M21.82 10L13.164 14.9977V10.541H11V21.361H13.164V16.9042L21.82 21.902V10Z" fill="#202020" />
                            </Svg>

                            <Svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 34 34" fill="none">
                                <Path d="M0 17C0 7.61116 7.61116 0 17 0V0C26.3888 0 34 7.61116 34 17V17C34 26.3888 26.3888 34 17 34V34C7.61116 34 0 26.3888 0 17V17Z" fill="#202020" />
                                <Path d="M12.7697 23.3748L23.8112 16.9998L12.7697 10.6248V23.3748Z" fill="#F9F9F9" />
                            </Svg>

                            <Svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
                                <Path d="M19.656 10.5365V14.9565L11 10V21.8036L19.656 16.8472V21.2671H21.82V10.5365H19.656Z" fill="#202020" />
                            </Svg>
                        </View>
                    </View>
                )}
            </SafeAreaView>
        </View>
    );
};

export default HomeScreen;
