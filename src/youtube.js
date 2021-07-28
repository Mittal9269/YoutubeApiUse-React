import axios from "axios";
const KEY = "AIzaSyCqgO_mUFDa7ZbCdqs6-sLhs68AfGNif-Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});
