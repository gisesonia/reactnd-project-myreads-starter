import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./components/BookShelf";
import SearchBar from "./components/SearchBar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateQuery = event => {
      this.setState({ query: event.target.value });
      this.searchBook(event.target.value);
    };
  }
  state = {
    books: [],
    foundBooks: [],
    query: ""
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
      
    });

    this.searchBook = query => {
      BooksAPI.search(query, 20).then(response => {
        if (response.error) {
          this.setState({
            foundBooks: []
          });
        } else {
          this.setState({ foundBooks: response });
        }        
      });
      this.foundBooksupdate(this.state.books, this.state.books.shelf); 
    };
  }

  foundBooksupdate = (books, shelf) => {
    const verifiedBooks = books.map(book => {      
      if(this.state.foundBooks.length > 0){
      this.state.foundBooks.forEach(bookShelf => {
        if (book.id === bookShelf.id) {
          book.shelf = bookShelf.shelf;
        }else if(book.shelf === undefined) {
          book.shelf = "none"; 
          bookShelf.shelf = "none"
        }
      });     
    }
    return book;
    });
    this.setState({
      foundBooks: verifiedBooks
    });
  };



  newShelf = (newBook, shelf) => {
    BooksAPI.update(newBook, shelf).then(response => {      
      newBook.shelf = shelf;
      
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== newBook.id)
          .concat(newBook)
      }));
     
    });
    
  };

  render() {
    //console.log(this.props.booksOnShelf)
    const bookshelf = [
      {
        value: "currentlyReading",
        title: "Currently Reading",
        id: 1
      },
      {
        value: "wantToRead",
        title: "Want to Read",
        id: 2
      },
      {
        value: "read",
        title: "Read",
        id: 3
      }
    ];
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div className="list-books-content">
                    {bookshelf.map(shelf => (
                      <BookShelf
                        key={shelf.id}
                        titulo={shelf.title}
                        value={shelf.value}
                        books={this.state.books}
                        newShelf={this.newShelf}
                      />
                    ))}
                  </div>
                )}
              />
              <Route
                exact
                path="/search"
                render={() => (
                  <SearchBar
                    foundBooks={this.state.foundBooks}
                    booksShelf={this.state.books}
                    query={this.state.query}
                    onUpdateQuery={this.updateQuery}
                    newShelf={this.newShelf}
                  />
                )}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

