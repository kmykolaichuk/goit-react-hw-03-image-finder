import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  SearchbarHead,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled.jsx';

export class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  onInputChange = evt => {
    this.setState({ searchImage: evt.currentTarget.value.toLowerCase() });
  };

  onSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchImage.trim() === '') {
      toast.error('Please, enter your search query. ', {
        position: 'top-right',
      });
      this.setState({ searchImage: '' });
      return;
    }
    this.props.onSubmit(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <SearchbarHead>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineSearch size={18} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchItem}
            onChange={this.onInputChange}
          />
        </SearchForm>
      </SearchbarHead>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
