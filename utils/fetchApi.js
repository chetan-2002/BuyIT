import axios from "axios";

export const baseUrl = "bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    // console.log(url);
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": baseUrl,
      "x-rapidapi-key": "18dc6f02ecmsh3ad9875ceada942p1ed788jsn104e2427ee33",
    },
  });
   return data;
};
