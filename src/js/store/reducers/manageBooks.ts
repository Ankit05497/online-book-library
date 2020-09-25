import { ADD_BOOK , EDIT_BOOK, DELETE_BOOK } from '../actionsType';
import { BaseAction, Books } from '../../types';

const booksCollection: Books[] = [];
const initialState = {
    books: booksCollection,
  };

export default function(state = initialState, action: BaseAction) {
  switch(action.type) {
    case ADD_BOOK: {
      const { bookDetails } = action.payload;
      state.books.push(bookDetails as Books);
      return {
        books: state.books
      }
    };
    case EDIT_BOOK: {
      const { bookId, bookDetails } = action.payload;
      let bookToEditIndex = 0;
      for(let i=0; i<state.books.length ; i++) {
        if(state.books[i].book.id === bookId) {
          bookToEditIndex = i;
        }
      };
      let tempBooks= state.books;
      tempBooks[bookToEditIndex] = bookDetails;
      return {
        ...state,
        books: tempBooks
      }
    };
    case DELETE_BOOK: {
      const { bookId } = action.payload;
      let bookToDeleteIndex = 0;
      for(let i=0; i<state.books.length ; i++) {
        if(state.books[i].book.id === bookId) {
          bookToDeleteIndex = i;
        }
      };
      state.books.splice(bookToDeleteIndex,1);
      return {
        ...state,
        books: state.books
      }
    };
    default: 
      return state;
  }
};
