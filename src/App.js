import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[]
  }

static propTypes = {
    books: PropTypes.array.isRequired
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
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
