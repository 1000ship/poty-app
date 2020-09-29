import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

const ThumbnailLink = styled(View)`
  color: unset;
  font-size: 13px;
  &:hover {
    color: unset;
    text-decoration: unset;
  }
`;

const Container = styled(View)`
  width: 100%;
  margin: 5px 0px;
`;

const ThumbnailImage = styled(Image)`
  width: 100%;
`;

const TitleText = styled(View)``;
const ChannelText = styled(View)`
  color: lightgrey;
  font-weight: 300;
  font-size: smaller;
`;
const ChannelImage = styled(Image)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;

export default ({ id, thumbnailSrc, title, channelId, channelTitle }) => (
  <Container>
    <ThumbnailLink to={`/video/${id}`}>
      <ThumbnailImage src={thumbnailSrc} />
      <TitleText>{title}</TitleText>
      <ChannelText>{channelTitle}</ChannelText>
    </ThumbnailLink>
  </Container>
);
