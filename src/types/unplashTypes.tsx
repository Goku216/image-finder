// src/types/unsplashTypes.ts
export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    html: string;
  };
  user: {
    name: string;
    portfolio_url: string;
    profile_image: {
      small: string;
    };
  };
  likes: number;
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

export interface ImageSearchParams {
  query: string;
  page?: number;
  per_page?: number;
}
