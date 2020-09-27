import React from 'react';
import { connect } from 'react-redux';
import { deleteBook } from '../store/action';

interface State {
  bookId: string;
}
class Delete extends React.Component<any> {
  state: State = {
    bookId: ''
  };

  changeHandler = (event: any) => {
    this.setState({
      bookId: event.target.value
    });
  }

  submitDeleteHandler = () => {
    this.props.deleteBook(this.state.bookId);
    this.setState({
      bookId: ''
    });
  }

  render() {
    return <div>
      <label htmlFor="id">
        <input id="id" value={this.state.bookId} onChange={this.changeHandler} placeholder="Enter bookId to delete" />
      </label>
      <label htmlFor="submit">
        <button id="submit" onClick={this.submitDeleteHandler}>Delete</button>
      </label>
    </div>
  }
}

export default connect(
  null,
  {deleteBook}
)(Delete);