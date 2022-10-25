import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async () => {
  const response = await axios.get(
    `/?q=${newSearch}&page=${nextPage}&key=29822518-04e2ef9290d818246b595cdf4&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

export const imageList = response.data.hits.map(
  ({ id, webformatURL, largeImageURL }) => {
    return { id, webformatURL, largeImageURL };
  }
);
