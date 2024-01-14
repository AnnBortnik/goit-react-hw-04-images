import React, { useState, useEffect } from 'react';
import Searchbar from './SearchBar/Searchbar';
import ImageGallery from './ImageGallery/Imagegallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import axios from "axios";
import './styles.css';

const  App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [largeImageURL, setLargeImageURL] = useState(null);
    const [totalHits, setTotalHits] = useState(0);

    useEffect(() => {
      if (!query) return;
  

  const fetchImages = async () => {
    setLoading(true);
    
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const API_KEY = '40486254-4681fff754f8735bda72aa19c'
    
    const settings = {
       params: {
         key: API_KEY,
         q: query,
         page,
         per_page: 12
       }
    }

    const data = await (await axios.get('', settings)).data

    setImages(images => ([...images, ...data.hits]))
      setTotalHits(data.totalHits);
      setLoading(false);
    }
    fetchImages()
  }, [query, page]);

  const handleSearch = newQuery => {
    if (!newQuery === query) return
    setImages([]);
    setQuery(newQuery);
    setPage(1);
    setTotalHits(0);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  };

  const openModal = largeImageURL => setLargeImageURL(largeImageURL);
  const closeModal = () => setLargeImageURL(null);

    return (
      <div className="App">
        <Searchbar onSubmit={handleSearch} />
        {loading && <Loader />}
        <ImageGallery images={images} onSelect={openModal} />
        {images.length > 0 && images.length < totalHits && !loading && <Button onClick={loadMore} />} 
        {largeImageURL && <Modal largeImageURL={largeImageURL} onClose={closeModal} />}
      </div>
    );
  }

export default App;
