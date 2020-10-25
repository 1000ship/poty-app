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

export type HomePresenterProps = {
  videos: Object[];
  loading: boolean;
  error: Object | null;
  selectVideo: (videoId: number) => () => void;
};

const HomePresenter = (props: HomePresenterProps) => {
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
            } = video as any;
            return (
              <VideoThumbnail
                key={i}
                id={id}
                thumbnailSrc={thumbnails.medium.url}
                title={localized.title}
                channelId={channelId}
                channelTitle={channelTitle}
                onPress={selectVideo(id, localized.title)}
              ></VideoThumbnail>
            );
          })}
      </VideosContainer>
    </ScrollContainer>
  );
};

export default HomePresenter;
