import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class SearchBar extends Component {

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.query}
              onChange={this.props.onUpdateQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div>
              {this.props.foundBooks.length > 0 ? (
                this.props.foundBooks.map(book => (
                  <li key={book.id}>
                    <Book book={book} newShelf={this.props.newShelf} />
                  </li>
                ))
              ) : (
                <div>Nenhum livro encontrado...</div>
              )}
            </div>
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBar;
