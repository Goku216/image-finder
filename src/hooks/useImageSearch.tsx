// src/hooks/useImageSearch.ts
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { unsplashService } from "../services/unsplashServices";

export const useImageSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["images", searchQuery, page],
    queryFn: () =>
      unsplashService.searchImages({
        query: searchQuery,
        page,
      }),
    enabled: !!searchQuery,
    placeholderData: (prevData) => prevData || undefined,
  });

  const searchImages = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return {
    images: data?.results || [],
    totalImages: data?.total || 0,
    totalPages: data?.total_pages || 0,
    isLoading,
    isError,
    error,
    searchImages,
    loadMoreImages,
    searchQuery,
  };
};
