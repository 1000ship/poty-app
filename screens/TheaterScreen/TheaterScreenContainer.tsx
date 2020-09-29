import React, { useState, useCallback, useRef } from "react";
import { Alert } from "react-native";
import TheaterScreenPresenter from "./TheaterScreenPresenter";

const TheaterScreenContainer = () => {
  const [playing, setPlaying] = useState(true);

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
      playing={playing}
      onStateChange={onStateChange}
      togglePlaying={togglePlaying}
    ></TheaterScreenPresenter>
  );
};

export default TheaterScreenContainer;