import React, { Component } from "react";

class Book extends Component {
  updateShelf = event => this.props.newShelf(this.props.book, event.target.value);

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div
          className="book-top"
          style={{
            width: 128,
            height: 193,
            background: `url(${book.imageLinks ? book.imageLinks.thumbnail : "#cccccc"})`
          }}
        >
          <div className="book-shelf-changer">
            <select value={book.shelf}  onChange={this.updateShelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}
export default Book;
