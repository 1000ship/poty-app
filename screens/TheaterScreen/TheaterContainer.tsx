import React, { useState, useCallback, useRef, useEffect } from "react";
import { Alert, AppState, DeviceEventEmitter } from "react-native";
import { highlightApi } from "../../api";
import TheaterPresenter from "./TheaterPresenter";

const TheaterContainer: React.FC = ({ route: { params } }: any) => {
  const { videoId = "lotCMV_HeVg" } = params as {videoId: string};

  const [playing, setPlaying] = useState(false);
  const [state, setState] = useState({
    highlights: [],
    loading: true,
    error: null,
  });

  const onChangeState = useCallback((state: String) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev: boolean) => !prev);
  }, []);

  const appStateChanged = useCallback((nextState) => {
    if (nextState === "inactive") {
      setPlaying(false);
    }
  }, []);

  useEffect(function () {
    const init = async () => {
      setState((state) => ({ ...state, loading: true }));
      try {
        const { data } = await highlightApi.getHighlights(videoId);
        setState((state) => ({
          ...state,
          highlights: data.highlights || [],
          loading: false,
        }));
      } catch (error) {
        setState((state) => ({ ...state, loading: false, error }));
      }
    };
    init();
    AppState.addEventListener("change", appStateChanged);

    return () => {
      AppState.removeEventListener("change", appStateChanged);
      DeviceEventEmitter.emit("popTheater");
    };
  }, []);

  return (
    <TheaterPresenter
      videoId={videoId}
      playing={playing}
      onChangeState={onChangeState}
      togglePlaying={togglePlaying}
      {...state}
    ></TheaterPresenter>
  );
};

export default TheaterContainer;
