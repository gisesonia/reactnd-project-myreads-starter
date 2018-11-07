import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
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
              <BookShelf/>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
    
      </div>  
    )}
}

export default BooksApp
