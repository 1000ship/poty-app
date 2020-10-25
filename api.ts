import axios from "axios";
import testCase from "./testCase.json";
import testCase2 from "./testCase2.json";

const getRandomKey = () =>
  Math.random() < 0.3333
    ? Math.random() < 0.5
      ? process.env.REACT_NATIVE_YOUTUBE_API_KEY_KH
      : process.env.REACT_NATIVE_YOUTUBE_API_KEY_HW
    : process.env.REACT_NATIVE_YOUTUBE_API_KEY;

const youtubeAxios = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: getRandomKey(),
  },
});

const potyAxios = axios.create({
  baseURL: process.env.REACT_NATIVE_POTY_API_URL,
});

export const youtubeApi = {
  getVideos_Test: () => new Promise( (resolve, reject) => resolve({data:testCase2}) ),
  getVideos: ({
    maxResults,
    regionCode,
  }: {
    maxResults: number;
    regionCode?: string;
  }) =>
    youtubeAxios.get("videos", {
      params: {
        part: "id,snippet",
        chart: "mostPopular",
        maxResults,
        regionCode,
        key: getRandomKey(),
      },
    }),
  searchVideos: ({
    q,
    maxResults,
    pageToken,
    regionCode,
  }: {
    q: string;
    maxResults?: number;
    pageToken?: string;
    regionCode?: string;
  }) =>
    youtubeAxios.get("search", {
      params: {
        part: "id,snippet",
        type: "video",
        videoEmbeddable: "true",
        videoSyndicated: "true",
        q,
        maxResults,
        pageToken,
        regionCode,
        key: getRandomKey(),
      },
    }),
  getChannels: ({
    id,
    maxResults,
    pageToken,
  }: {
    id: string;
    maxResults: number;
    pageToken: string;
  }) =>
    youtubeAxios.get("channels", {
      params: {
        part: "id,snippet",
        id,
        maxResults,
        pageToken,
        key: getRandomKey(),
      },
    }),
};

export const highlightApi = {
  getHighlights: (videoId: string) => potyAxios.get(`/highlight/${videoId}`),
  getHighlights_Test: (videoId: string) => {
    return { data: testCase };
  },
};


export const debounce = ( func: Function, delay:number ) => {
  var timeoutId: NodeJS.Timeout | null = null;
  return function (...args : any) {
    if( timeoutId !== null )
      clearTimeout(timeoutId);
    timeoutId = setTimeout( () => {
      func(...args);
      timeoutId = null;
    }, delay);
  }
}