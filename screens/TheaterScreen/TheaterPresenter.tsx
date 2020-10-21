import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Text, View } from "../../components/Themed";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button, Dimensions } from "react-native";
import Highlight from "./Highlight";
import ScrollContainer from "../../components/ScrollContainer";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const { width: WIDTH } = Dimensions.get("window");

const Container = styled(View)`
  display: flex;
  width: 100%;
  height: 100%;
`;

const HighlightContainer = styled(View)``;

type TheaterPresenterProps = {
  videoId: string;
  playing: boolean;
  onStateChange: (state: String) => void;
  togglePlaying: () => void;
  highlights: any[];
  loading: boolean;
  error: string;
};

const TheaterPresenter: React.FC<TheaterPresenterProps> = (props) => {
  const {
    videoId,
    playing,
    onStateChange,
    togglePlaying,
    highlights,
    loading,
    error,
  } = props;

  const youtubePlayer = useRef();
  const youtubeSeekTo = (second: number) => () => {
    if (youtubePlayer?.current) youtubePlayer.current.seekTo(second);
  };

  return (
    <Container>
      <YoutubePlayer
        ref={youtubePlayer}
        height={(WIDTH * 9) / 16}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
      <ScrollContainer>
        <HighlightContainer>
          {loading && <Loading />}
          {error && <Error error={error} />}
          {!loading && !error && highlights &&
            (highlights.length === 0 ? (
              <Text>Highlights is yet. It needs more comments.</Text>
            ) : (
              highlights.map((highlight, i) => (
                <Highlight key={i} {...{ ...highlight, youtubeSeekTo }} />
              ))
            ))}
        </HighlightContainer>
      </ScrollContainer>
    </Container>
  );
};

export default TheaterPresenter;
