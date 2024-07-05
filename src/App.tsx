import './App.css';

import { Component, ReactNode } from 'react';
import { Cards, Header } from './companents';

class App extends Component {
  state = [
    {
      uid: '1',
      title: 'aaa',
      publishedDay: 1,
      publishedMonth: 12,
      publishedYear: 1990,
      numberOfPages: 234,
    },
    {
      uid: '1',
      title: 'aaa',
      publishedDay: 1,
      publishedMonth: 2,
      publishedYear: 1990,
      numberOfPages: 234,
    },
    {
      uid: '1',
      title: 'aaa',
      publishedDay: 1,
      publishedMonth: 2,
      publishedYear: 1990,
      numberOfPages: 234,
    },
  ];
  render(): ReactNode {
    return (
      <>
        <Header />
        <Cards books={this.state} />
      </>
    );
  }
}

export default App;
