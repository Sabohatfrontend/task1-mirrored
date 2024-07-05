import './App.css';

import { Component, ReactNode } from 'react';
import DataContext from './context/DataContext';
import MainPage from './pages/MainPage';
import { DataType } from './types/data';

const initialValue: DataType = {
  data: null,
  loading: false,
  error: false,
};

class App extends Component {
  state = initialValue;

  componentDidMount(): void {
    this.getData('http://stapi.co/api/v1/rest/book/search');
  }

  getData(url: string) {
    this.setState({
      data: null,
      loading: true,
      error: false,
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          data: null,
          loading: false,
          error: true,
        });
      });
  }

  render(): ReactNode {
    if (this.state.loading) return <div>Loading...</div>;

    if (this.state.error) return <div>Something went wrong!!!</div>;

    return this.state.data ? (
      <DataContext.Provider value={this.state.data}>
        <MainPage />
      </DataContext.Provider>
    ) : (
      <div>Nothing found!!!</div>
    );
  }
}

export default App;
