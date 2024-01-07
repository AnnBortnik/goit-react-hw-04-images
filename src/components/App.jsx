import React from 'react';
import Searchbar from './SearchBar/Searchbar';
import ImageGallery from './ImageGallery/Imagegallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import axios from "axios";
import './styles.css';

class App extends React.Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    query: '',
    largeImageURL: null,
    totalHits: 0, 
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true });
    
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

    this.setState(state => ({
      images: [...state.images, ...data.hits],
      loading: false,
      totalHits: data.totalHits, 
    }));
  };

  handleSearch = query => {
     if (!query.trim()) return;
    this.setState({ images: [], query, page: 1 });
  };

  loadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  openModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, loading, largeImageURL, totalHits } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        {loading && <Loader />}
        <ImageGallery images={images} onSelect={this.openModal} />
        {images.length > 0 && images.length < totalHits && !loading && <Button onClick={this.loadMore} />} 
        {largeImageURL && <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;