import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
   constructor(props) {
   super(props);

   this.state = {
     books: []
   };
 }
  
    render() {
      
      const { books } = this.props;
      
        return (
          
          <div className="bookshelf">
      {this.props.books.map((book) => (
           <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book />
                        </li>
                    </ol>
                </div>
            </div>
        ))}</div>
   )
          
            
               
        )
    }
}
export default BookShelf
