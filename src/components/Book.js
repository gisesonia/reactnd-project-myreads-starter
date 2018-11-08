import React, { Component } from 'react';

class Book extends Component {
  
    render() {  
       console.log(this.props)
       
        return (
            <div>
            {this.props.books.map((book) => (
                    <div key={book.id} className='book'>
                        <div
                            className='book-top'
                            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                        >
                            <div className="book-shelf-changer">
                                <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">To Kill a Mockingbird</div>
                        <div className="book-authors">Harper Lee</div>
                    </div>
                ))
            }
            </div>
        )
    }
}
export default Book
