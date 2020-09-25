import React from 'react';
import { Books, BookDetails } from '../types';
import { connect } from 'react-redux'
import { addBook } from '../store/action';

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
      <label htmlFor="id">
        <input id="id" value={this.state.book.id} onChange={this.changeHandler} placeholder="Book Id" />
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
        <button id="submit" onClick={this.submitHandler}>Submit</button>
      </label>
    </div>
  }
};

export default connect(
  null,
  {addBook}
)(Add);
