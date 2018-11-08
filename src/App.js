import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        //console.log(books)
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    const bookshelf = [
      {
        value: 'currentlyReading',
        title: 'Currently Reading',
        id: 1
      },
      {
        value: 'wantToRead',
        title: 'Want to Read',
        id: 2
      },
      {
        value: 'read',
        title: 'Read',
        id: 3
      }
    ]
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {bookshelf.map(shelf =>
              <BookShelf key={shelf.id}
                titulo={shelf.title}
                value={shelf.value}
                livros={this.state.books} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp

