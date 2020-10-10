import React from "react";
import styled from "styled-components/native";
import { View } from "../../components/Themed";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button } from "react-native";

const Container = styled(View)`
  display: flex;
  width: 100%;
  height: 100%;
`;

type TheaterPresenterProps = {
  videoId: string;
  playing: boolean;
  onStateChange: (state: String) => void;
  togglePlaying: () => void;
};

const TheaterPresenter: React.FC<TheaterPresenterProps> = (props) => {
  const { videoId, playing, onStateChange, togglePlaying } = props;
  return (
    <Container>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </Container>
  );
};

export default TheaterPresenter;
