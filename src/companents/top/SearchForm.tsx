import { Component, ReactNode } from 'react';
import { PreviousSearchTerm } from '../constants';

class SearchForm extends Component {
  getPreviousSearchTerm() {
    return localStorage.getItem(PreviousSearchTerm);
  }

  render(): ReactNode {
    return (
      <form className="top-form">
        <input className="search-input" type="text" />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchForm;
