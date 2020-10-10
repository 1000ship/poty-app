import React, { useState, useCallback, useRef } from "react";
import { Alert } from "react-native";
import TheaterPresenter from "./TheaterPresenter";

const TheaterContainer:React.FC = ( {route:{params}} : any ) => {

  const {videoId = "lotCMV_HeVg"} = params as any;

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: String) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev: boolean) => !prev);
  }, []);

  return (
    <TheaterPresenter
      videoId={videoId}
      playing={playing}
      onStateChange={onStateChange}
      togglePlaying={togglePlaying}
    ></TheaterPresenter>
  );
};

export default TheaterContainer;
