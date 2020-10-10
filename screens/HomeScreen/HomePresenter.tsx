import React from "react";
import styled from "styled-components/native";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import ScrollContainer from "../../components/ScrollContainer";
import { Text, View } from "../../components/Themed";
import VideoThumbnail from "../../components/VideoThumbnail";

const VideosContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

type HomePresenterProps = {
  videos: [];
  loading: boolean;
  error: Object;
};

const HomePresenter = (props) => {
  const { videos, loading, error, selectVideo } = props;

  return loading ? (
    <Loading />
  ) : (
    <ScrollContainer>
      <VideosContainer>
        {error && <Error error={error} />}
        {videos &&
          videos.length > 0 &&
          videos.map((video: Object, i: number) => {
            const {
              id,
              snippet: { thumbnails, localized, channelId, channelTitle },
            } = video;
            return (
              <VideoThumbnail
                key={i}
                id={id}
                thumbnailSrc={thumbnails.medium.url}
                title={localized.title}
                channelId={channelId}
                channelTitle={channelTitle}
                onPress={selectVideo(id)}
              ></VideoThumbnail>
            );
          })}
      </VideosContainer>
    </ScrollContainer>
  );
};

export default HomePresenter;
