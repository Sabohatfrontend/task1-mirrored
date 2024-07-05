export type BookType = {
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

export type Props = {
  books: BookType[];
};

export type PropsBook = {
  book: BookType;
};
