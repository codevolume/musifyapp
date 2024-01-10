import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Player } from "./contexts/PlayerContext";
import Item from "./components/Item";


const Test = ({ item }) => {
  const { currentTrack, setCurrentTrack } = useContext(Player);
  const isCurrentTrack = currentTrack && currentTrack.title == item?.title;

  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

<<<<<<< HEAD
    useEffect(() => {
        setSongs(item?.filter((shelf) => shelf?.title === "Songs")[0]?.data);
        setArtists(item?.filter((shelf) => shelf?.title === "Artists")[0]?.data);
    }, [item]);

    const renderItem = ({ item }) => {
        return (
          <Item item={item}/>
        );
    };
=======
  useEffect(() => {
    setSongs(item?.filter((shelf) => shelf.title === "Songs")[0]?.data);
    setArtists(item?.filter((shelf) => shelf.title === "Artists")[0]?.data);
  }, [item]);
>>>>>>> refs/remotes/origin/master

  const renderItem = ({ item }) => {
    return (
<<<<<<< HEAD
        <View>
          <Text style={{color: "white"}}>Artists</Text>
            <FlatList data={artists} keyExtractor={(item) => item.type === "Artist" ? item.browseId : item.videoId} renderItem={renderItem} />
          <Text style={{color: "white"}}>Songs</Text>
            <FlatList data={songs} keyExtractor={(item) => item.type === "Artist" ? item.browseId : item.videoId} renderItem={renderItem} />
        </View>
=======
      <Item item={item} />
>>>>>>> refs/remotes/origin/master
    );
  };

  return (
    <View>
      {artists ?
        <>
          <Text style={{ color: "white" }}>Artists</Text>
          <FlatList data={artists} keyExtractor={(item, index) => index.toString()} renderItem={renderItem} />
        </>
        : null}
      {artists ?
        <>
          <Text style={{ color: "white" }}>Songs</Text>
          <FlatList data={songs} keyExtractor={(item, index) => index.toString()} renderItem={renderItem} />

        </>
        : null}
    </View>
  );
};

export default Test;
