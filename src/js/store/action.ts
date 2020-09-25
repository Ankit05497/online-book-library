import { ADD_BOOK , EDIT_BOOK, DELETE_BOOK } from './actionsType';
import { Books, BaseAction } from '../types';

export const addBook = (bookDetails: Books): BaseAction => ({
  type: ADD_BOOK,
  payload: {
    bookDetails
  }
});

export const editBook = (bookId: string, bookDetails: Books): BaseAction => ({
  type: EDIT_BOOK,
  payload: {
    bookId,
    bookDetails
  }
});

export const deleteBook = (bookId: string): BaseAction => ({
  type: DELETE_BOOK,
  payload: {
    bookId
  }
});
