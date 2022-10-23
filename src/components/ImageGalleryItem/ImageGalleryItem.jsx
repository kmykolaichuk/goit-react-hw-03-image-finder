import PropTypes from 'prop-types';

import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  id,
  onClickImage,
}) => {
  return (
    <Item key={id} onClick={() => onClickImage(largeImageURL)}>
      <Image src={webformatURL} alt='' />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};
