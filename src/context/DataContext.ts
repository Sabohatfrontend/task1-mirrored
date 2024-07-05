import React from 'react';
import { Props } from '../types/data';

const initialValue: Props = {
  books: [],
};

const DataContext = React.createContext(initialValue);

export default DataContext;
