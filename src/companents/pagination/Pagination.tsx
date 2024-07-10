import { Component, ReactNode } from 'react';
import { PaginationType } from '../../types/data';
import './Pagination.css';

type PropsPagination = {
  getData: (pageNumber: number, searchTerm: string) => void;
  totalPages: number;
  searchTerm: string;
};

class Pagination extends Component<PropsPagination> {
  constructor(props: PropsPagination) {
    super(props);
  }

  state: PaginationType = {
    pageNumber: 0,
  };

  handlePage = (type: string) => {
    const { getData, totalPages, searchTerm } = this.props;
    this.setState(
      () => {
        switch (type) {
          case 'INC':
            return {
              pageNumber:
                this.state.pageNumber + 1 < totalPages
                  ? this.state.pageNumber + 1
                  : this.state.pageNumber,
            };
          case 'DEC':
            return {
              pageNumber:
                this.state.pageNumber - 1 > 0 ? this.state.pageNumber - 1 : 0,
            };
          default:
            return {
              pageNumber: this.state.pageNumber,
            };
        }
      },
      () => {
        getData(this.state.pageNumber, searchTerm);
      }
    );
  };

  render(): ReactNode {
    const { totalPages } = this.props;
    return (
      <div className="pagination">
        <button onClick={() => this.handlePage('DEC')}>Prev</button>
        <p>
          {this.state.pageNumber + 1}/{totalPages}
        </p>
        <button onClick={() => this.handlePage('INC')}>Next</button>
      </div>
    );
  }
}

export default Pagination;
