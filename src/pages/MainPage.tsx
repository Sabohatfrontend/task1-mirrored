import './MainPage.css';

import { Component, ReactNode } from 'react';
import { Cards, Header } from '../companents';
import DataContext from '../context/DataContext';

class MainPage extends Component {
  render(): ReactNode {
    return (
      <DataContext.Consumer>
        {(context) => (
          <>
            <Header />
            <Cards books={context.books} />
          </>
        )}
      </DataContext.Consumer>
    );
  }
}

export default MainPage;
