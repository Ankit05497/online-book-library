import React from 'react';
import { Books, BookDetails } from '../types';
import { store } from '../store/store';

interface State {
  books: Books[];
  inputSearch: string;
}

interface ViewProps {
  data: BookDetails;
}

const ViewData: React.FunctionComponent<ViewProps> = (props) => {
  const { data } = props;
  return <div>
    <div>
      {data.id}
    </div>
    <div>
      {data.name}
    </div>
    <div>
      {data.bookDescription}
    </div>
    <div>
      {data.authorName}
    </div>
    <div>
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
    console.log(this.state.books);
    return <div>
      {this.state.books.length === 0 &&
        <p>
          No books in library
        </p>
      }
      {this.state.books.length > 0 &&
        <>
        {this.state.books.map((book) => {
          return <ViewData data={book.book} key={book.book.id} />
        })}
        </>
      }
    </div>
  }
}

export default SearchAndView;
