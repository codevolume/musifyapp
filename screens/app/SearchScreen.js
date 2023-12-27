import { View, Text, SafeAreaView, TextInput } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import React from "react";
import {search, suggest} from "../../ytAPI/index"

const SearchScreen = () => {
    let searchSuggest = (text) => {
        suggest(text).then((suggestionArray) => {
            //string array, search suggestions (kinda works)
            console.log(suggestionArray);
        });
        
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <SafeAreaView>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center", paddingTop: 20, gap: 20}}>
                    
                    <View style={{paddingHorizontal: 20, paddingVertical: 14, flexDirection: "row", gap: 14, alignItems: "center", backgroundColor: "#e8e8e8", width: "80%", borderRadius: 50, }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <Circle cx="11" cy="11" r="7" stroke="#646464" stroke-width="2" />
                            <Path d="M20 20L17 17" stroke="#646464" stroke-width="2" stroke-linecap="round" />
                        </Svg>

                        <TextInput placeholder="Search for something..." onChangeText={searchSuggest}  style={{fontSize: 14, color: "#646464"}}/>

                    </View>

                    <View style={{ backgroundColor: "#0b3b2c", width: 48, height: 48, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1fd8a4" }}>Sz</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SearchScreen;
