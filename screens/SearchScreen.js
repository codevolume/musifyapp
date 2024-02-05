import React, { useState, useEffect, useContext } from "react";
import { View, Text, SafeAreaView, TextInput, FlatList, Keyboard, ActivityIndicator, TouchableOpacity } from "react-native";
import { search, suggest } from "../ytAPI/index";
import { ThemeContext } from "../contexts/ThemeContext";
import Svg, { Path, Circle } from "react-native-svg";
import SearchItem from "../components/SearchItem";
import Test from "../TestData";
import Profile from "../components/Profile";
import Icons from "../constans/Icons";

const SearchScreen = () => {
    const { theme } = useContext(ThemeContext);
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
        <View style={{ flex: 1, backgroundColor: activeColors.primary }}>
            <SafeAreaView>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 25, paddingVertical: 15, alignItems: "center", gap: 20 }}>
                    <View style={{ paddingHorizontal: 20, height: 48, flexDirection: "row", gap: 14, alignItems: "center", backgroundColor: activeColors.secondary, width: "80%", borderRadius: 50 }}>
                        <Icons name={"search"} size={20} color={activeColors.tertiary}/>
                        <TextInput placeholder="Search for something..." onChangeText={searchSuggest} onSubmitEditing={submitSearch} style={{ fontSize: 16, color: activeColors.tint }} placeholderTextColor={activeColors.tertiary}/>
                    </View>

                    <Profile />
                </View>
                <View style={{ height: "100%", paddingHorizontal: 10 }}>{ keyboardStatus ? <FlatList data={suggestions} renderItem={({ item }) => <SearchItem item={item} />} /> : isLoading ? <ActivityIndicator size="large" style={{ paddingTop: 40 }} /> : errorMessage ? <Text style={{ color: activeColors.hue12 }}>{errorMessage}</Text> : <Test item={searchResult.shelves} />}</View>
            </SafeAreaView>
        </View>
    );
};

export default SearchScreen;
