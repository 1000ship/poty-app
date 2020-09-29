import axios from "axios";
import testCase from "./testCase.json";

const getRandomKey = () =>
  Math.random() < 0.333
    ? Math.random() < 0.5
      ? process.env.REACT_APP_YOUTUBE_API_KEY
      : process.env.REACT_APP_YOUTUBE_API_KEY_HW
    : process.env.REACT_APP_YOUTUBE_API_KEY_KH;

const youtubeAxios = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: getRandomKey(),
  },
});

console.log("apikey", process.env.REACT_APP_YOUTUBE_API_KEY_KH);

const potyAxios = axios.create({
  baseURL: `${process.env.REACT_APP_POTY_API_URL}`,
});

export const youtubeApi = {
  getVideos: ({
    maxResults,
    regionCode,
  }: {
    maxResults: number;
    regionCode: string;
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
    maxResults: number;
    pageToken: string;
    regionCode: string;
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
