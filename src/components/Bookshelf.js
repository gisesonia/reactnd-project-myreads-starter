import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
     render() {
      console.log(this.props)
      const { books } = this.props;
      
        return (          
       <div className="bookshelf">
      {books.map((book) => (
        <div key={book.id}>
          <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book shelf={this.props.books} />
                        </li>
                    </ol>
          </div>
         </div>
          ))}</div>)
	}
}
          
export default BookShelf
