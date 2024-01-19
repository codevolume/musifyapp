import { View, Text, SafeAreaView, TextInput, FlatList, Keyboard, ActivityIndicator, TouchableOpacity } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import React, { useState, useEffect } from "react";
import { search, suggest, videoInfo } from "../ytAPI/index";
import SearchItem from "../components/SearchItem";
import ArtistItem from "../components/ArtistItem";
import Item from "../components/Item";
import Test from "../TestData";

// valami
const SearchScreen = () => {
    const theme = { mode: "dark" };
    let activeColors = Colors[theme.mode];

    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [searchText, setSearchText] = useState("");

    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const opened = Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(true));
        const closed = Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(false));

        return () => {
            opened.remove();
            closed.remove();
        };
    }, []);

    let searchSuggest = (text) => {
        suggest(text).then((suggestionArray) => {
            if (!text.trim()) {
                setSuggestions([]);
            } else setSuggestions(suggestionArray);
        });
        setSearchText(text);
    };

    let submitSearch = async () => {
        try {
            setIsLoading(true);
            const res = await search(searchText);

            setSearchResult(res);
        } catch (e) {
            setErrorMessage(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: activeColors.hue1 }}>
            <SafeAreaView>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 25, paddingVertical: 15, alignItems: "center", gap: 20 }}>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 14, flexDirection: "row", gap: 14, alignItems: "center", backgroundColor: activeColors.hue4, width: "80%", borderRadius: 50 }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <Circle cx="11" cy="11" r="7" stroke={activeColors.hue11} stroke-width="2" />
                            <Path d="M20 20L17 17" stroke={activeColors.hue11} stroke-width="2" stroke-linecap="round" />
                        </Svg>
                        <TextInput placeholder="Search for something..." onChangeText={searchSuggest} onSubmitEditing={submitSearch} style={{ fontSize: 16, color: activeColors.hue11 }} />
                        {/* <TextInput placeholder="Search for something..." onChangeText={(text) => {searchSuggest; setSearchText(text)}} onSubmitEditing={submitSearch} style={{ fontSize: 16, color: activeColors.hue11 }} /> */}
                    </View>

                    <View style={{ backgroundColor: "#0b3b2c", width: 48, height: 48, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1fd8a4" }}>Sz</Text>
                    </View>
                </View>
                <View style={{ height: "100%", backgroundColor: activeColors.hue1, paddingHorizontal: 10 }}>{keyboardStatus ? <FlatList data={suggestions} renderItem={({ item }) => <SearchItem item={item} />} /> : isLoading ? <ActivityIndicator size="large" style={{ paddingTop: 40 }} /> : errorMessage ? <Text style={{ color: "white" }}>{errorMessage}</Text> : <Test item={searchResult.shelves} />}</View>
            </SafeAreaView>
        </View>
    );
};

export default SearchScreen;
