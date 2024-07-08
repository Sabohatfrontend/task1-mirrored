type BookType = {
  uid: string;
  title: string;
  publishedYear: number;
  publishedMonth: number;
  publishedDay: number;
  numberOfPages: number;
  stardateFrom?: number;
  stardateTo?: number;
  yearFrom?: number;
  yearTo?: number;
  novel?: true;
  referenceBook?: true;
  biographyBook?: true;
  rolePlayingBook?: true;
  ebook?: true;
  anthology?: true;
  novelization?: true;
  unauthorizedPublication?: true;
  audiobook?: true;
  audiobookAbridged?: true;
  audiobookPublishedYear?: number;
  audiobookPublishedMonth?: number;
  audiobookPublishedDay?: number;
  audiobookRunTime?: number;
  productionNumber?: string;
  bookSeries?: [[]];
  authors?: [[]];
  artists?: [[]];
  editors?: [[]];
  audiobookNarrators?: [[]];
  publishers?: [[]];
  audiobookPublishers?: [[]];
  characters?: [[]];
  references?: [[]];
  audiobookReferences?: [[]];
  bookCollections?: [[]];
};

export type BooksType = {
  books: BookType[];
}

export type PropsBook = {
  book: BookType;
};

export type DataType = {
  data?: BooksType | null;
  loading?: boolean;
  error?: boolean;
  total?: number;
};

export type PropsType = {
  value: DataType;
};

export interface GetDataType {
  getData: (url: string) => void;
}



