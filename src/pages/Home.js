import React, { useContext } from 'react';
import { BookContext } from '../bookContext';

const Home = () => {
  const { books, setBooks } = useContext(BookContext);

  const updateState = id => {
    const filteredBooks = books.map(book =>
      book.id === id ? { ...book, isFav: !book.isFav } : book
    );
    setBooks(filteredBooks);
  };

  return (
    <>
      <h2>Some Kinda Library </h2>
      <table className="table">
        <thead>
          <tr>
            <th>kind</th>
            <th>Id</th>
            <th>etag</th>
            <th>selfLink</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books
            .filter(book => !book.isFav)
            .map(book => (
              <tr key={book.id}>
                <td>{book.kind}</td>
                <td>{book.id}</td>
                <td>{book.etag}</td>
                <td>{book.selfLink}</td>
                <td>
                  <button
                    className="addfavoritebutton"
                    onClick={() => updateState(book.id)}
                  >
                    &hearts;
                  </button>
                </td>
                <td>readmore</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
