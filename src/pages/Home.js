import React, { useContext } from 'react';
import { ReactComponent as HeartIcon } from '../icons/heart.svg';

import { BookContext } from '../bookContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const { books, setBooks } = useContext(BookContext);

  const updateState = id => {
    const filteredBooks = books.map(book =>
      book.id === id ? { ...book, isFav: !book.isFav } : book
    );
    setBooks(filteredBooks);
  };

  const currentBooks = books.filter(book => !book.isFav);

  return (
    <>
      <h2 className="title">Some Kinda Library </h2>
      {currentBooks.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>genre</th>
              <th>author</th>
              <th>title</th>
              <th></th>
              <th>description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {currentBooks.map(book => (
                <motion.tr
                  key={book.id}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td>{book.category}</td>
                  <td>{book.author}</td>
                  <td>{book.title}</td>
                  <td>
                    {book.isFav ? (
                      <button
                        className="favbutton"
                        onClick={() => updateState(book.id)}
                        aria-label="like this book"
                      >
                        <HeartIcon />
                      </button>
                    ) : (
                      <button
                        className="favbutton"
                        onClick={() => updateState(book.id)}
                        aria-label="like this book"
                      >
                        <HeartIcon />
                      </button>
                    )}
                  </td>
                  <td style={{ maxWidth: 300 }}>{book.description}</td>
                  <td>
                    <Link to={`/book/${book.id}`}>read more</Link>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      ) : (
        <p>wow, such empty</p>
      )}
    </>
  );
};

export default Home;
