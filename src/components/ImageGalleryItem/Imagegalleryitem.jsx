import { Component } from 'react';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.largeImageURL);
  };

  render() {
    const { id, webformatURL } = this.props;

    return (
      <li className="ImageGalleryItem" key={id} onClick={this.handleClick}>
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>
    );
  }
}

export default ImageGalleryItem;