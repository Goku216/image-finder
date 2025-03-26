// src/components/ImageGrid.tsx
import React, { useState } from "react";
import { UnsplashImage } from "../types/unplashTypes";

interface ImageGridProps {
  images: UnsplashImage[];
  onLoadMore: () => void;
  isLoading: boolean;
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  onLoadMore,
  isLoading,
}) => {
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer hover:opacity-80"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.urls.small}
              alt={image.alt_description || "Unsplash image"}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-hidden">
            <img
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description || "Unsplash image"}
              className="max-w-full max-h-full object-contain"
            />
            <div className="bg-white p-4 mt-2 rounded-md">
              <p>By: {selectedImage.user.name}</p>
              <p>Likes: {selectedImage.likes}</p>
              <a
                href={selectedImage.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Unsplash
              </a>
            </div>
          </div>
        </div>
      )}

      {!isLoading && (
        <button
          onClick={onLoadMore}
          className="mt-10 w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Load More
        </button>
      )}

      {isLoading && (
        <div className="text-center mt-4">Loading more images...</div>
      )}
    </div>
  );
};
