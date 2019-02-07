import React from 'react'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import SearchBar from './components/SearchBar'
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
  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== changedBook.id)
          .concat(changedBook)
      }));
    });
  };

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
        <Router>
        <Route exact path='/' render={() => (
        <div className="list-books-content">
        {
                  bookshelf.map(shelf =>
                    <BookShelf key={shelf.id}
                      titulo={shelf.title}
                      value={shelf.value}
                      books={this.state.books}
                      changeShelf={this.changeShelf}
                    />)}
        </div>
        )} />
        </Router>
        <Router>
        <Route path='/create' component={SearchBar} />      
      </Router>
      </div>
      </div>
    )
  }
}

export default BooksApp