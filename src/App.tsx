import './App.css';

import { Component, ReactNode } from 'react';
import MainPage from './pages/MainPage';
import { DataType } from './types/data';
import { Header } from './companents';
import ErrorBoundary from './companents/errorBoundry/ErrorBoundry';
import { fetchData } from './companents/services/fetchData';
import { PreviousSearchTerm } from './companents/constants';

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
    this.getData(0)
  }

  getData = async (pageNumber: number = 0, searchTerm: string = '') => {
    this.handleState({
      loading: true,
    });
    await fetchData(pageNumber, searchTerm)
      .then((data) => {
        this.handleState({
          data: data,
          loading: false,
          error: false,
          total: data.page.totalElements,
        });

        localStorage.setItem(PreviousSearchTerm, searchTerm);
      })
      .catch(() => {
        this.handleState({
          loading: false,
          error: true,
        })
      });
  }

  render(): ReactNode {
    return (
      <ErrorBoundary>
        <Header getData={this.getData} />
        <main className="main-content">
          <MainPage value={this.state} />
        </main>
      </ErrorBoundary >
    );


  }
}

export default App;
