import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";
import { Text } from "./Themed";


const Container = styled(View)`
  flex: 1 1 150px;
  margin: 5px;
`;

const ThumbnailLink = styled(View)`
`;

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 150px;
`;

const TitleText = styled(Text)``;
const ChannelText = styled(Text)`
`;
const ChannelImage = styled(Image)`
`;

export default ({ id, thumbnailSrc, title, channelId, channelTitle }) => (
  <Container>
    <ThumbnailImage source={{uri:thumbnailSrc}} />
    <TitleText>{title}</TitleText>
    <ChannelText>{channelTitle}</ChannelText>
    {/* <ThumbnailLink to={`/video/${id}`}> */}
    {/* </ThumbnailLink> */}
  </Container>
);
