import React, { useState } from "react";
import { TextInput } from "react-native";

import styled from "styled-components/native";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import ScrollContainer from "../../components/ScrollContainer";
import { View } from "../../components/Themed";
import VideoThumbnail from "../../components/VideoThumbnail";

const Container = styled(View)`
  display: flex;
  height: 100%;
`;

const SearchTextInput = styled(TextInput)`
  border-color: #888;
  border-width: 1px;
  border-radius: 10px;
  margin: 5px 10px;
  padding: 3px 10px;
  flex: 0 0 40px;
`;

const SearchContents = styled(View)`
  flex: 1 1 100px;
`;

const VideosContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export type SearchPresenterProps = {
  videos: Object[];
  loading: boolean;
  error: Object | null;
  selectVideo: (videoId: number) => () => void;
  searchVideo: (keyword: string) => void;
};

const SearchPresenter = (props: SearchPresenterProps) => {
  const [keyword, setKeyword] = useState("");
  const { videos, loading, error, selectVideo, searchVideo } = props;
  const onChangeText = (text: string) => {
    setKeyword(text);
    searchVideo(text);
  };

  return <Container>
    <SearchTextInput
      onChangeText={onChangeText}
      value={keyword}
      placeholder="Search here"
    ></SearchTextInput>
    <SearchContents>
      {loading ? (
        <Loading />
      ) : (
        <ScrollContainer>
          <VideosContainer>
            {error && <Error error={error} />}
            {videos &&
              videos.length > 0 &&
              videos.map((video: Object, i: number) => {
                const {
                  id: { videoId },
                  snippet: { thumbnails, title, channelId, channelTitle },
                } = video as any;
                return (
                  <VideoThumbnail
                    key={i}
                    id={videoId}
                    thumbnailSrc={thumbnails.medium.url}
                    title={title}
                    channelId={channelId}
                    channelTitle={channelTitle}
                    onPress={selectVideo(videoId)}
                  ></VideoThumbnail>
                );
              })}
          </VideosContainer>
        </ScrollContainer>
      )}
    </SearchContents>
  </Container>;
};

export default SearchPresenter;
