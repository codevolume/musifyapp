import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Player } from "./contexts/PlayerContext";
import Item from "./components/Item";

const Test = ({ item }) => {
    const { currentTrack, setCurrentTrack } = useContext(Player);
    const isCurrentTrack = currentTrack && currentTrack.title == item?.title;

    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const sum = [];
        sum.push(item?.filter((shelf) => shelf.title === "Songs")[0]?.data);
        setSongs(item?.filter((shelf) => shelf.title === "Songs")[0]?.data);
        sum.push(item?.filter((shelf) => shelf.title === "Artists")[0]?.data);
        setArtists(item?.filter((shelf) => shelf.title === "Artists")[0]?.data);

        setSearchResult(sum);
    }, [item]);

    const renderItem = ({ item }) => {
        return <Item item={item} />;
    };

    return (
        <View>
{/*             {searchResult ? (
                <>
                    <Text style={{ color: "white" }}>All</Text>
                    <FlatList data={searchResult} keyExtractor={(item, index) => index.toString()} renderItem={renderItem} />
                </>
            ) : null} */}
            {artists ? (
                <>
                    <Text style={{ color: "white" }}>Artists</Text>
                    <FlatList data={artists} keyExtractor={(item, index) => index.toString()} renderItem={renderItem} />
                </>
            ) : null}
            {songs ? (
                <>
                    <Text style={{ color: "white" }}>Songs</Text>
                    <FlatList data={songs} renderItem={renderItem} />
                </>
            ) : null}
        </View>
    );
};

export default Test;
