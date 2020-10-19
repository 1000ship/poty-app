import React, { useEffect } from "react";
import { youtubeApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = (props: any) => {

  useEffect(function(){
    (async ()=>{
      const data = await youtubeApi.searchVideos({q:"among us"});
      console.log(data.data)
    })();
  }, [])

  return <SearchPresenter />;
};

export default SearchContainer;
