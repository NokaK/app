import React, { useContext } from 'react';
import { ReactComponent as HeartIcon } from '../icons/heart.svg';

import { BookContext } from '../bookContext';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';

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
      <h2 className="title">Some Kinda Library </h2>
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
          {books
            .filter(book => !book.isFav)
            .map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                  <button
                    className="favbutton"
                    onClick={() => updateState(book.id)}
                    aria-label="like this book"
                  >
                    <HeartIcon />
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
    </>
  );
};

export default Home;
