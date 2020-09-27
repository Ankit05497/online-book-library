import React from 'react';
import { Books, BookDetails } from '../types';
import { connect } from 'react-redux';
import { editBook } from '../store/action';
import { store } from '../store/store';
import styles from '../../styles/add.module.css';

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
      if(bookToEdit.length > 0) {
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
      } else {
        window.alert('No books with this Id in Library');
      }
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
      <div className={styles.field_container}>
        <label htmlFor="id">
          Book Id:
          <input id="id" value={this.state.bookId} onChange={this.changeHandler} readOnly disabled placeholder="Book Id" />
        </label>
      </div>
      <div className={styles.field_container}>
        <label htmlFor="name">
          Book Name:
          <input id="name" value={this.state.book.name} onChange={this.changeHandler} placeholder="Book Name" />
        </label>
      </div>
      <div className={styles.field_container}>
        <label htmlFor="authorName">
          Author Name:
          <input id="authorName" value={this.state.book.authorName} onChange={this.changeHandler} placeholder="Author Name" />
        </label>
      </div>
      <div className={styles.field_container}>
        <label htmlFor="bookDescription">
          Book Description:
          <input id="bookDescription" value={this.state.book.bookDescription} onChange={this.changeHandler} placeholder="Description of Book" />
        </label>
      </div>
      <div className={styles.field_container}>
        <label htmlFor="bookGenre">
          Book Genre:
          <input id="bookGenre" value={this.state.book.bookGenre} onChange={this.changeHandler} placeholder="Book Genre" />
        </label>
      </div>
      <div className={styles.field_container}>
        <label htmlFor="price">
          Price:
          <input id="price" value={this.state.book.price} onChange={this.changeHandler} placeholder="Price" />
        </label>
      </div>
      <div className={styles.field_container}>
        <label htmlFor="numberOfBooks">
          No. of Books:
          <input id="numberOfBooks" value={this.state.count} onChange={this.changeCountHandler} placeholder="Number of Books" />
        </label>
      </div>
      <div className={styles.button_container}>
        <label htmlFor="submit">
          <button id="submit" onClick={this.submitEditHandler}>Submit</button>
        </label>
      </div>
    </div>}
  </div>
  }
};

export default connect(
  null,
  {editBook}
)(EditPage);
