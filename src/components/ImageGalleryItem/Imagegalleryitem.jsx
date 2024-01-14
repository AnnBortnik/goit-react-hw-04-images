import React from 'react';

const ImageGalleryItem = ({id, webformatURL, onClick, largeImageURL}) => {
  const handleClick = () => onClick(largeImageURL)

    return (
      <li className="ImageGalleryItem" key={id} onClick={handleClick}>
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>
    );
}

export default ImageGalleryItem;