import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { View } from "../../components/Themed";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button, Dimensions } from "react-native";
import Highlight from "./Highlight";
import ScrollContainer from "../../components/ScrollContainer";

const {width:WIDTH} = Dimensions.get('window')

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
};

const TheaterPresenter: React.FC<TheaterPresenterProps> = (props) => {
  const {
    videoId,
    playing,
    onStateChange,
    togglePlaying,
    highlights,
  } = props;

  const youtubePlayer = useRef();
  const youtubeSeekTo = (second:number) => () => {
    if( youtubePlayer?.current )
      youtubePlayer.current.seekTo(second);
  }


  return (
    <Container>
      <YoutubePlayer
        ref={youtubePlayer}
        height={WIDTH*9/16}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
      <ScrollContainer>
        <HighlightContainer>
          {highlights &&
            highlights.map((highlight, i) => (
              <Highlight key={i} {...{ ...highlight, youtubeSeekTo }} />
            ))}
        </HighlightContainer>
      </ScrollContainer>
    </Container>
  );
};

export default TheaterPresenter;
