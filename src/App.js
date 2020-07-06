import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

import { BookContext } from './bookContext';
import { mapBooks } from './utils/mapBooks';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const { data } = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?q=harry&fbclid=IwAR0GNT0p1cF3NPkf81hy-ZSfPcGFGRK6WdAXWoBORurTiwrACCpPUHUOSgE'
      );
      setBooks(mapBooks(data.items));
    }
    fetchBooks();
  }, []);

  return (
    <Router>
      <Navbar />

      <BookContext.Provider value={{ books, setBooks }}>
        <main className="main">
          <Switch>
            <Route path="/book/:id">
              <Details />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </BookContext.Provider>
    </Router>
  );
};

export default App;
