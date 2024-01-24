import React, { useContext } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Settings } from "../contexts/SettingsContext";
import ProfileModal from "../modals/ProfileModal";

const Profile = () => {
    const { settingsModal, setSettingsModal } = useContext(Settings);

    return (
        <View>
            <TouchableOpacity onPress={() => setSettingsModal(true)}>
                <View style={{ backgroundColor: "#0b3b2c", width: 48, height: 48, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1fd8a4" }}>Sz</Text>
                </View>
            </TouchableOpacity>
            <ProfileModal />
        </View>
    );
};

export default Profile;
