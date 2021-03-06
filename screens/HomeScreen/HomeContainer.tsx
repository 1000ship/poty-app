import React, { useEffect, useState } from "react";
import HomePresenter, { HomePresenterProps } from "./HomePresenter";
import { youtubeApi } from "../../api";

const HomeContainer = ({ navigation } : any) => {
  const [state, setState] = useState({
    videos: [],
    loading: true,
    error: null,
  });

  const selectVideo = (videoId: number, title?: string) => () => {
    navigation.navigate("Theater", {videoId, title});
  };

  useEffect(() => {
    (async () => {
      try {
        // const {
        //   data: { items: videos },
        // } = await youtubeApi.getVideos_Test() as {data: {items: object[]}};
        const {
          data: { items: videos },
        } = await youtubeApi.getVideos({
          maxResults: 12,
        });
        setState((state: any) => ({ ...state, videos }));
      } catch (error) {
        setState((state) => ({ ...state, error }));
      } finally {
        setState((state) => ({ ...state, loading: false }));
      }
    })();
  }, []);

  return <HomePresenter { ...state } selectVideo={selectVideo}></HomePresenter>;
};

export default HomeContainer;
