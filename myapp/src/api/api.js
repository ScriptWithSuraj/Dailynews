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
