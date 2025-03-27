// src/services/unsplashService.ts
import axios from "axios";
import {
  UnsplashSearchResponse,
  ImageSearchParams,
} from "../types/unplashTypes";
import { UnsplashImage } from "../types/unplashTypes";

const UNSPLASH_BASE_URL = "https://api.unsplash.com";
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;

export const unsplashService = {
  searchImages: async ({
    query,
    page = 1,
    per_page = 12,
  }: ImageSearchParams) => {
    try {
      const response = await axios.get<UnsplashSearchResponse>(
        `${UNSPLASH_BASE_URL}/search/photos`,
        {
          params: { query, page, per_page },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error searching images:", error);
      throw error;
    }
  },

  // Optional: Method to get random images
  getRandomImages: async (count = 12) => {
    try {
      const response = await axios.get<UnsplashImage[]>(
        `${UNSPLASH_BASE_URL}/photos/random`,
        {
          params: { count },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching random images:", error);
      throw error;
    }
  },
};
