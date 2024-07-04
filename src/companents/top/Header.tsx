import { Component, ReactNode } from 'react';
import { PreviousSearchTerm } from '../constants';
import logo from '../../assets/search.svg';
import './Header.css';
import SearchForm from './SearchForm';

class Header extends Component {
    
  render(): ReactNode {
    return (
      <header className="header">
        <img src={logo} alt="Logo" />
        <SearchForm />
        <button></button>
      </header>
    );
  }
}

export default Header;
