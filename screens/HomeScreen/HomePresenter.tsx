import React from "react";
import styled from "styled-components/native";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { View } from "../../components/Themed";

const Container = styled(View)``;
const VideosContainer = styled(View)``;

type HomePresenterProps = {
  videos: [];
  loading: boolean;
  error: Object;
}

const HomePresenter = (props) => {
  const { videos, loading, error } = props;
  return loading ? (
    <Loading />
  ) : (
    <Container>
      <VideosContainer>
        {error && <Error error={error} />}
        {videos &&
          videos.length > 0 &&
          videos.map((video, i) => {
            const {
              id,
              snippet: { thumbnails, localized, channelId, channelTitle },
            } = video;
            return (
              <View key={i}>
                <VideoThumbnail
                  id={id}
                  thumbnailSrc={thumbnails.medium.url}
                  title={localized.title}
                  channelId={channelId}
                  channelTitle={channelTitle}
                ></VideoThumbnail>
              </View>
            );
          })}
      </VideosContainer>
    </Container>
  );;
};

export default HomePresenter;
