import React, { useContext } from 'react';
import { ReactComponent as HeartIconFav } from '../icons/heart-full.svg';
import { BookContext } from '../bookContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Favorites = () => {
  const { books, setBooks } = useContext(BookContext);
  const staredBooks = books.filter(book => book.isFav);

  const handleUnStar = id => {
    const filteredBooks = books.map(book =>
      book.id === id ? { ...book, isFav: false } : book
    );
    setBooks(filteredBooks);
  };

  return (
    <>
      <h2 className="title">My Collection</h2>
      {staredBooks.length ? (
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
              {staredBooks.map(book => (
                <motion.tr
                  key={book.id}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td>{book.category}</td>
                  <td>{book.author}</td>
                  <td>{book.title}</td>
                  <td>
                    <button
                      className="favbutton"
                      onClick={() => handleUnStar(book.id)}
                      aria-label="unlike this book"
                    >
                      <HeartIconFav />
                    </button>
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
        <p style={{ textAlign: 'center' }}>
          Your favorite books will appear here
        </p>
      )}
    </>
  );
};

export default Favorites;
