import React, { useContext } from 'react';
import { BookContext } from '../bookContext';

const Favorites = () => {
  const { books, setBooks } = useContext(BookContext);
  const staredBooks = books.filter(book => book.isFav);

  const handleUnStar = id => {
    const filteredBooks = staredBooks.map(book =>
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
              <th>kind</th>
              <th>Id</th>
              <th>etag</th>
              <th>selfLink</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {staredBooks.map(book => (
              <tr key={book.id}>
                <td>{book.kind}</td>
                <td>{book.id}</td>
                <td>{book.selfLink}</td>
                <td>
                  <button onClick={() => handleUnStar(book.id)}>
                    &hearts;
                  </button>
                </td>
                <td>readmore</td>
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
