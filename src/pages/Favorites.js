import React, { useContext } from 'react';
import { ReactComponent as HeartIconFav } from '../icons/heart-full.svg';
import { BookContext } from '../bookContext';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';

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
      <h2>My Books</h2>
      {staredBooks.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>title</th>
              <th></th>
              <th>author</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {staredBooks.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                  <button
                    className="favbutton"
                    onClick={() => handleUnStar(book.id)}
                  >
                    <HeartIconFav />
                  </button>
                </td>
                <td>{book.author}</td>
                <td style={{ maxWidth: 300 }}>
                  <TextTruncate
                    line={1}
                    element="span"
                    text={book.description}
                    textTruncateChild={
                      <Link to={`/book/${book.id}`}>read more</Link>
                    }
                  />
                </td>
              </tr>
            ))}
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
