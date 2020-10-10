import React, { useState, useCallback, useRef } from "react";
import { Alert } from "react-native";
import TheaterScreenPresenter from "./TheaterScreenPresenter";

const TheaterScreenContainer:React.FC = ( {route:{params}} : any ) => {

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
    <TheaterScreenPresenter
      videoId={videoId}
      playing={playing}
      onStateChange={onStateChange}
      togglePlaying={togglePlaying}
    ></TheaterScreenPresenter>
  );
};

export default TheaterScreenContainer;
