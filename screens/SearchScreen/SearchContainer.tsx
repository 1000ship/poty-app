import React, { useState } from "react";
import { debounce, youtubeApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = ({ navigation }: any) => {
  const [state, setState] = useState({
    videos: [],
    loading: false,
    error: null,
  });

  const selectVideo = (videoId: number) => () => {
    navigation.navigate("Theater", { videoId });
  };

  const searchVideo = debounce(async (keyword: string) => {
    setState((state) => ({
      ...state,
      loading: true,
    }));
    const searchData = await youtubeApi.searchVideos({
      q: keyword,
      maxResults: 10,
    });
    console.log('data', searchData.data.items)
    setState((state) => ({
      ...state,
      loading: false,
      videos: searchData.data.items,
    }));
  }, 1000);

  return (
    <SearchPresenter
      {...state}
      selectVideo={selectVideo}
      searchVideo={searchVideo}
    />
  );
};

export default SearchContainer;
