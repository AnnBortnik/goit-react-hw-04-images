import React from 'react';
import ImageGalleryItem from "components/ImageGalleryItem/Imagegalleryitem";
import { nanoid } from 'nanoid';

const ImageGallery = ({images, onSelect}) => {
    return (
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem key={nanoid()} {...image} onClick={onSelect} />
        ))}
      </ul>
    );
  }

export default ImageGallery;