import React, { useState, useCallback, useRef } from "react";
import { Alert } from "react-native";
import HomeScreenPresenter from "./HomeScreenPresenter";

const HomeScreenContainer = () => {
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
    <HomeScreenPresenter
      playing={playing}
      onStateChange={onStateChange}
      togglePlaying={togglePlaying}
    ></HomeScreenPresenter>
  );
};

export default HomeScreenContainer;
