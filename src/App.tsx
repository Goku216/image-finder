import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchBar } from "./components/SearchBar";
import { ImageGrid } from "./components/ImageGrid";
import { useImageSearch } from "./hooks/useImageSearch";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
};

const AppContent: React.FC = () => {
  const { images, searchImages, loadMoreImages, isLoading, searchQuery } =
    useImageSearch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-8xl text-blue-500 text-center font-bold mb-4">
        Image Finder
      </h1>

      <SearchBar onSearch={searchImages} />

      {searchQuery && (
        <div>
          <h2 className="text-xl mb-4">Search Results for "{searchQuery}"</h2>

          <ImageGrid
            images={images}
            onLoadMore={loadMoreImages}
            isLoading={isLoading}
          />
        </div>
      )}

      {!searchQuery && (
        <div className="text-center text-gray-500">
          Enter a search term to find images
        </div>
      )}
    </div>
  );
};

export default App;
