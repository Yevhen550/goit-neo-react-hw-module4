import axios from "axios";
const BASE_URL = "https://api.unsplash.com/photos/";
const API_KEY = "rfCwbckgtQUDD3T8K91eUHDr_Jp80VlSu_SODn54lno";

const fetchPhotoCard = async (query, page = 1) => {
  const params = {
    query: query.trim(),
    page,
    per_page: 15,
    client_id: API_KEY,
  };

  const { data } = await axios.get(`${BASE_URL}`, { params });

  return data;
};
export default fetchPhotoCard;
