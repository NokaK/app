import React from 'react';

const Home = props => {
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
          {props.data.map(book => (
            <tr key={book.id}>
              <td>{book.kind}</td>
              <td>{book.id}</td>
              <td>{book.etag}</td>
              <td>{book.selfLink}</td>
              <td>
                <button
                  className="addfavoritebutton"
                  onClick={() => props.updateState(book.id)}
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
