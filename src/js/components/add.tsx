import React from 'react';
import { Books, BookDetails } from '../types';
import { connect } from 'react-redux'
import { addBook } from '../store/action';
import styles from '../../styles/add.module.css';
interface State {
  book: BookDetails;
  count: number;
}

class Add extends React.Component<any> {

  state: State = {
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

  submitHandler = () => {
    const bookDetail: Books = {
      book: this.state.book,
      count: this.state.count
    };
    this.props.addBook(bookDetail);
    this.setState({
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
      <div className={styles.field_container}>
        <label htmlFor="id">
          Book Id:
        <input id="id" value={this.state.book.id} onChange={this.changeHandler} placeholder="Book Id" />
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
          Book Price:
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
          <button id="submit" onClick={this.submitHandler}>Submit</button>
        </label>
      </div>
    </div>
  }
};

export default connect(
  null,
  {addBook}
)(Add);
