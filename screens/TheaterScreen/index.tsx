import React, { useState } from "react";
import { Button } from "react-native";
import { Text } from "../../components/Themed";
import TheaterContainer from "./TheaterContainer";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { likeApi } from "../../api";

export default TheaterContainer;

export const TheaterHeader = ({ navigation, route: { params } }: any) => {
  const { videoId, title } = params;
  const { isLike } = params;

  // Initial isLike loading
  if( isLike === undefined ) likeApi.isLikedVideo(videoId).then((isLike) => {
    navigation.setParams({ ...params, isLike })
  })
  
  const toggleLike = async () => {
    if (isLike) await likeApi.unlikeVideo(videoId);
    else await likeApi.likeVideo(videoId);
    navigation.setParams({ ...params, isLike: !isLike });
  };

  return {
    headerTitle: <Text>{title ? title : "Theater"}</Text>,
    headerRight: isLike === undefined ? null : () => (
      <TouchableOpacity onPress={toggleLike}>
        {isLike ? (
          <AntDesign
            name="heart"
            size={24}
            color="hotpink"
            style={{ paddingRight: 10 }}
          />
        ) : (
          <AntDesign
            name="hearto"
            size={24}
            color="pink"
            style={{ paddingRight: 10 }}
          />
        )}
      </TouchableOpacity>
    ),
  };
};
