import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        this.setState(() => ({
          books
        }))
      })
    }

  render() {
    return (
      <div className="app">
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf 
       		  	books={this.state.books}
       		  />
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
    
      </div>  
    )}
}

export default BooksApp
