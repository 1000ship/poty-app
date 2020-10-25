import React, { useEffect, useState } from "react";
import { View, Image, GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Text } from "./Themed";
import { AntDesign } from "@expo/vector-icons";
import { likeApi } from "../api";

const Container = styled(View)`
  flex: 1 1 150px;
  margin: 5px;
`;

const ThumbnailLink = styled(View)``;

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 150px;
`;

const TitleText = styled(Text)``;
const ChannelText = styled(Text)`
  font-weight: 300;
  font-size: 12px;
`;
const ChannelImage = styled(Image)``;
const Heart = styled(View)`
  position: absolute;
  right: 10px;
  top: 10px;
`;

type VideoThumbnailProps = {
  id: string;
  thumbnailSrc: string;
  title: string;
  channelId: string;
  channelTitle: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default ({
  id,
  thumbnailSrc,
  title,
  channelId,
  channelTitle,
  onPress,
}: VideoThumbnailProps) => {
  const [isLiked, setLiked] = useState(false);
  useEffect(() => {
    likeApi.isLikedVideo(id).then((value) => setLiked(value));
  }, []);
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <ThumbnailImage source={{ uri: thumbnailSrc }} />
        {isLiked && (
          <Heart>
            <AntDesign name="heart" size={16} color="hotpink" />
          </Heart>
        )}
        <TitleText>{title}</TitleText>
        <ChannelText>{channelTitle}</ChannelText>
      </TouchableOpacity>
    </Container>
  );
};
