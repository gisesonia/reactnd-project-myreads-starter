import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

    render() {
        //const { livros } = this.props;
        console.log(this.props)
        let filteredBooks = this.props.books.filter(book => book.shelf === this.props.value);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.titulo}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {filteredBooks.map(book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    changeShelf={this.props.changeShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>)
    }
}

export default BookShelf
