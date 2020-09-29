import React, { useState, useCallback, useRef } from "react";
import { Button, Alert } from "react-native";
import YoutubePlayer, {
  InitialPlayerParams,
} from "react-native-youtube-iframe";

import styled from "styled-components/native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const Container = styled(View)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default function TabOneScreen() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: String) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev: boolean) => !prev);
  }, []);

  return (
    <Container>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"lotCMV_HeVg"}
        onChangeState={onStateChange}
      ></YoutubePlayer>
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </Container>
  );
}
