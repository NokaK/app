import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const { data } = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?q=harry&fbclid=IwAR0GNT0p1cF3NPkf81hy-ZSfPcGFGRK6WdAXWoBORurTiwrACCpPUHUOSgE'
      );
      setBooks(data.items.map(item => ({ ...item, isFav: false })));
    }
    fetchBooks();
  }, []);

  const updateState = id => {
    const filteredBooks = books.map(book =>
      book.id === id ? { ...book, isFav: !book.isFav } : book
    );
    setBooks(filteredBooks);
  };

  return (
    <Router>
      <Navbar />

      <main>
        <Route
          exact
          path="/"
          component={props => (
            <Home
              {...props}
              data={books.filter(b => !b.isFav)}
              updateState={updateState}
            />
          )}
        />
        <Route path="/Details" component={Details} />
        <Route
          path="/Favorites"
          component={() => <Favorites data={books.filter(b => b.isFav)} />}
        />
      </main>
    </Router>
  );
};

export default App;
