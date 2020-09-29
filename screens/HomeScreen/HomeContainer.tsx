import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";
import { youtubeApi } from "../../api";

const HomeContainer = () => {
  const [state, setState] = useState({
    videos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { items: videos },
        } = await youtubeApi.getVideos({
          maxResults: 12,
        });
        setState((state) => ({ ...state, videos }));
      } catch (error) {
        setState((state) => ({ ...state, error }));
      } finally {
        setState((state) => ({ ...state, loading: false }));
      }
    })();
  }, []);

  return <HomePresenter {...state}></HomePresenter>;
};

export default HomeContainer;
