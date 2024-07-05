import { Component, ReactNode } from 'react';
import { PropsBook } from '../../types/data';

class CardItem extends Component<PropsBook> {
  constructor(props: PropsBook) {
    super(props);
  }
  render(): ReactNode {
    const {
      title,
      numberOfPages,
      publishedDay,
      publishedMonth,
      publishedYear,
    } = this.props.book;
    const publishedDate = `${publishedDay.toString().padStart(2, '0')}.${publishedMonth.toString().padStart(2, '0')}.${publishedYear}`;

    return (
      <li className="card-item">
        <h3 className="card-item-header">{title}</h3>
        <p>
          <span className="card-item-text">Page number:</span> {numberOfPages}
        </p>
        <p>
          <span className="card-item-text">Published Date:</span>{' '}
          {publishedDate}
        </p>
      </li>
    );
  }
}

export default CardItem;
