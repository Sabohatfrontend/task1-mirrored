import './App.css';

import { Component, ReactNode } from 'react';
import MainPage from './pages/MainPage';
import { DataType } from './types/data';
import { Header } from './companents';
import ErrorBoundary from './companents/errorBoundry/ErrorBoundry';

const initialValue: DataType = {
  data: null,
  loading: false,
  error: false,
  total: 0,
};

class App extends Component {
  state = initialValue;

  handleState(newState: DataType) {
    this.setState((prevState) => {
      return {
        ...prevState,
        ...newState
      };
    });
  }

  componentDidMount(): void {
    this.getData('https://stapi.co/api/v1/rest/book/search');
  }

  getData(url: string) {
    this.handleState({
      loading: true,
    });
    console.log(this.state);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.handleState({
          data: data,
          loading: false,
          error: false,
          total: data.page.totalElements,
        });
      })
      .catch(() => {
        this.handleState({
          loading: false,
          error: true,
        });
      });
  }

  render(): ReactNode {
    return (
      <ErrorBoundary>
        <Header getData={() => this.getData} />
        <main className="main-content">
          <MainPage value={this.state} />
        </main>
      </ErrorBoundary>
    );


  }
}

export default App;
