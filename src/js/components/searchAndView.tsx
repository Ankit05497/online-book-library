import React from 'react';
import { Books, BookDetails } from '../types';
import { store } from '../store/store';
import styles from '../../styles/searchAndView.module.css';

interface State {
  books: Books[];
  inputSearch: string;
}

interface ViewProps {
  data: BookDetails;
}

const ViewData: React.FunctionComponent<ViewProps> = (props) => {
  const { data } = props;
  return <div className={styles.flex_container}>
    <div className={styles.book_id}>
      {data.id}
    </div>
    <div className={styles.book_name}>
      {data.name}
    </div>
    <div className={styles.book_description}>
      {data.bookDescription}
    </div>
    <div className={styles.author_name}>
      {data.authorName}
    </div>
    <div className={styles.book_price}>
      {data.price}
    </div>
  </div>
};

class SearchAndView extends React.Component<any> {

  state: State = {
    books: store.getState().manageBooks.books,
    inputSearch: ''
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        books: store.getState().manageBooks.books
      });
    });
  }

  render() {
    return <div>
      <h3 className={styles.all_books_heading}>All Books List</h3>
      {this.state.books.length === 0 &&
        <p className={styles.no_books_container}>
          No books in library
        </p>
      }
      {this.state.books.length > 0 &&
        <>
        <div className={styles.flex_container}>
          <div className={styles.book_id}>
            Book Id
          </div>
          <div className={styles.book_name}>
            Book Name
          </div>
          <div className={styles.book_description}>
            Book Description
          </div>
          <div className={styles.author_name}>
            AuthorName
          </div>
          <div className={styles.book_price}>
            Price (Rs)
          </div>
        </div>
        {this.state.books.map((book) => {
          return <ViewData data={book.book} key={book.book.id} />
        })}
        </>
      }
    </div>
  }
}

export default SearchAndView;
