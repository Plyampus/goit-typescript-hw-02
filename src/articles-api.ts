import axios from "axios";

const baseURL = "https://api.unsplash.com/";
const API_KEY = "nAkoceIY0l7aVwVNqN9mILLiO0CjiFKOkUjftZ-t7zs";

export type ImageResult = {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

type ApiResponse = {
  results: ImageResult[];
  total: number;
  total_pages: number;
};

type Params = {
  query: string;
  client_id: string;
  page: number;
};

export const fetchArticlesWithTopic = async (topic, page) => {
  try {
    const response = await axios.get(`${baseURL}/search/photos`, {
      params: {
        query: topic,
        client_id: API_KEY,
        page,
      },
    });

    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
