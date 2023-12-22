import React, { useRef } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import PrimaryBtn from "../../components/primaryBtn";

const OnboardingScreen = ({ navigation }) => {
    const slides = [
        {
            key: 1,
            title: "Streameld kedvenc zenéidet",
            text: "Ismerd meg a különböző zenei műfajokat, fedezz fel új előadókat, és hozz létre saját lejátszási listát. Kapcsolódj más zene szerelmeseivel.",
            image: require("../../assets/onboard-illustration.png"),
        },
        {
            key: 2,
            title: "Hozz létre lejátszási listát",
            text: "Ismerd meg a különböző zenei műfajokat, fedezz fel új előadókat, és hozz létre saját lejátszási listát. Kapcsolódj más zene szerelmeseivel.",
            image: require("../../assets/onboard-illustration.png"),
        },
    ];

    renderSlide = ({ item }) => {
        return (
            <View style={{ flex: 1, backgroundColor: "#101010" }}>
                <SafeAreaView>
                    <View style={{ paddingHorizontal: 25 }}>
                        <Image source={item.image} style={{ maxWidth: "100%", height: 340, marginTop: 100 }} resizeMode="contain" />
                        <View style={{}}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>{item.title}</Text>
                            <Text style={{ color: "white", marginTop: 20, marginBottom: 64, fontWeight: "regular", fontSize: 16 }}>{item.text}</Text>
                            {/* <PrimaryBtn handlePress={() => navigation.navigate("Login")} text={"Folytatás"} /> */}
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        );
    };

    _renderDoneButton = () => {
        return (
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "white", fontSize: 16, }}>Bejelentkezés</Text>
            </View>
        )
    }

    return (
        <AppIntroSlider renderItem={this.renderSlide} data={slides} renderDoneButton={this._renderDoneButton} onDone={() => navigation.navigate("Login")} />
        /* <View style={{ flex: 1, backgroundColor: "#101010" }}>
            <SafeAreaView>
                <View style={{ paddingHorizontal: 25 }}>
                    <Image source={require("../../assets/onboard-illustration.png")} style={{ maxWidth: "100%", height: 340, marginTop: 100, }} resizeMode="contain" />
                    <View style={{}}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>Streameld kedvenc zenéidet</Text>
                        <Text style={{ color: "white", marginTop: 20, marginBottom: 64, fontWeight: "regular", fontSize: 16 }}>Ismerd meg a különböző zenei műfajokat, fedezz fel új előadókat, és hozz létre saját lejátszási listát. Kapcsolódj más zene szerelmeseivel.</Text>
                        <PrimaryBtn handlePress={() => navigation.navigate("Login")} text={"Folytatás"}/>
                    </View>
                </View>
            </SafeAreaView>
        </View> */
    );
};

export default OnboardingScreen;
