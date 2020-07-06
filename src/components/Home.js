import React, { Component } from "react";

class Home extends Component {
  handleClick = e => {
    console.log("test");
    return this.props.updateState(this.state);
  };
  render() {
    return (
      <div>
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
            {this.props.data.map(book => {
              return (
                <tr key={book.id}>
                  <td>{book.kind}</td>
                  <td>{book.id}</td>
                  <td>{book.etag}</td>
                  <td>{book.selfLink}</td>
                  <td>
                    <div
                      className="addfavoritebutton"
                      onClick={() => this.props.updateState(book.id)}
                    >
                      &hearts;
                    </div>
                  </td>
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

export default Home;
