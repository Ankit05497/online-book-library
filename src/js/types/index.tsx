export interface Reviews {
  reviewer: string;
  review: string;
}

export interface BookDetails {
  id: string;
  name: string;
  authorName: string;
  bookDescription: string;
  bookGenre: string;
  price: string;
  reviews?: Reviews[];
}

export interface Books {
  book: BookDetails;
  count: number;
}

export interface BaseAction {
  type: string;
  payload?: any;
}
