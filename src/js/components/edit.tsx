import React from 'react';
import { Books, BookDetails } from '../types';
import { connect } from 'react-redux';
import { editBook } from '../store/action';
import { store } from '../store/store';

interface State {
  bookId: string; 
  book: BookDetails;
  count: number;
  bookToEdit: Books[];
}

class EditPage extends React.Component<any> {
  
  state: State = {
    bookId: '',
    book: {
      id: '',
      name: '',
      authorName: '',
      bookDescription: '',
      bookGenre: '',
      price: '',
      reviews: []
    },
    count: 0,
    bookToEdit: [],
  }

  changeBookIdHandler = (event: any) => {
    this.setState({
      bookId: event.target.value
    });
  }

  changeHandler = (event: any) => {
    this.setState({
      book: {
        ...this.state.book,
        [event.target.id]: event.target.value
      }
    });
  }

  changeCountHandler = (event: any) => {
    this.setState({
      count: event.target.value as number
    });
  }

  handleBookSearchById = () => {
    const allBooksInStore = store.getState().manageBooks.books;
    const bookToEdit = allBooksInStore.filter((book) => {
      return book.book.id === this.state.bookId;
    });
    this.setState({
      bookToEdit: bookToEdit,
    },() => {
      this.setState({
        book: {
          id: bookToEdit[0].book.id,
          name: bookToEdit[0].book.name,
          authorName: bookToEdit[0].book.authorName,
          bookDescription: bookToEdit[0].book.bookDescription,
          bookGenre: bookToEdit[0].book.bookGenre,
          price: bookToEdit[0].book.price,
          reviews: bookToEdit[0].book.reviews
        },
        count: bookToEdit[0].count,
      })
    });
  }

  submitEditHandler = () => {
    const bookDetail: Books = {
      book: this.state.book,
      count: this.state.count
    };
    this.props.editBook(this.state.bookId, bookDetail);
    this.setState({
      bookToEdit: [],
      book: {
        id: '',
        name: '',
        authorName: '',
        bookDescription: '',
        bookGenre: '',
        price: '',
        reviews: []
      },
      count: 0
    });
  }

  render() {
    return <div>
    <label htmlFor="idToSearch">
      <input id="idToSearch" value={this.state.bookId} onChange={this.changeBookIdHandler} placeholder="Enter Book Id to edit details" />
    </label>
    <button onClick={this.handleBookSearchById}>
      FetchBook
    </button>
    {this.state.bookToEdit.length > 0 && <div>
      <p>Edit Book</p>
      <label htmlFor="id">
        <input id="id" value={this.state.bookId} onChange={this.changeHandler} readOnly disabled placeholder="Book Id" />
      </label>
      <label htmlFor="name">
        <input id="name" value={this.state.book.name} onChange={this.changeHandler} placeholder="Book Name" />
      </label>
      <label htmlFor="authorName">
        <input id="authorName" value={this.state.book.authorName} onChange={this.changeHandler} placeholder="Author Name" />
      </label>
      <label htmlFor="bookDescription">
        <input id="bookDescription" value={this.state.book.bookDescription} onChange={this.changeHandler} placeholder="Description of Book" />
      </label>
      <label htmlFor="bookGenre">
        <input id="bookGenre" value={this.state.book.bookGenre} onChange={this.changeHandler} placeholder="Book Genre" />
      </label>
      <label htmlFor="price">
        <input id="price" value={this.state.book.price} onChange={this.changeHandler} placeholder="Price" />
      </label>
      <label htmlFor="numberOfBooks">
        <input id="numberOfBooks" value={this.state.count} onChange={this.changeCountHandler} placeholder="Number of Books" />
      </label>
      <label htmlFor="submit">
        <button id="submit" onClick={this.submitEditHandler}>Submit</button>
      </label>
    </div>}
  </div>
  }
};

export default connect(
  null,
  {editBook}
)(EditPage);
