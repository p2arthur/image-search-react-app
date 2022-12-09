import axios from "axios";
import { API_ENDPOINT, ACCESS_KEY } from "./config";

//Function to fetch data using axios (URL, {Options: headers, params})
const searchImages = async (searchTerm) => {
  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      params: { query: searchTerm },
    });

    const { results } = response.data;
    return results;
  } catch (error) {}
};

export default searchImages;
