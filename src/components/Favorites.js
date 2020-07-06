import React, { Component } from "react";

class Favorites extends Component {
  render() {
    return (
      <div>
        <table className='table'>
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
            {this.props &&
              this.props.data &&
              this.props.data.map(book => {
                return (
                  <tr key={book.id}>
                    <td>{book.kind}</td>
                    <td>{book.id}</td>
                    <td>{book.etag}</td>
                    <td>{book.selfLink}</td>
                    <td>readmore</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Favorites;
