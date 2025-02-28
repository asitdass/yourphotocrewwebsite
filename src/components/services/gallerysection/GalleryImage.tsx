
import React from "react";

interface GalleryImageProps {
  src: string;
  className?: string;
}

export const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  className = "",
}) => {
  return (
    <img
      loading="lazy"
      src={src}
      className={`object-contain ${className}`}
      alt="Gallery"
    />
  );
};
