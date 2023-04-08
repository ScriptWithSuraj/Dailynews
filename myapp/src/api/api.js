import axios from "axios";
import { url } from "../constants/constant";
export const fetchnewsData = async () => {
  try {
    const response = await axios.get(url.wallStreet);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchTopNews = async () => {
  try {
    const response = await axios.get(url.topTechCrunch);
    return response;
  } catch (err) {
    console.log(err);
  }
};
