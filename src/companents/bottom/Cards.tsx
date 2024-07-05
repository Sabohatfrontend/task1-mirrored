import { Component, ReactNode } from 'react';
import './Cards.css';
import { Props } from '../../types/data';
import CardItem from './CardItem';

class Cards extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render(): ReactNode {
    const booksLists = this.props.books.map((book) => {
      return <CardItem book={book} />;
    });
    return <ul className="cards-lists">{booksLists}</ul>;
  }
}

export default Cards;
