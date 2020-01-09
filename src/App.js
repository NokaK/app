import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Details from "../src/components/Details";
import Favorites from "../src/components/Favorites";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=harry&fbclid=IwAR0GNT0p1cF3NPkf81hy-ZSfPcGFGRK6WdAXWoBORurTiwrACCpPUHUOSgE"
      )
      .then(response => {
        this.setState({
          books: response.data.items.map(item => ({ ...item, isFav: false }))
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateState = id => {
    this.setState(prev => ({
      books: prev.books.map(b => (b.id === id ? { ...b, isFav: !b.isFav } : b))
    }));
  };

  render() {
    const { books } = this.state;

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route
            exact
            path="/"
            component={props => (
              <Home
                {...props}
                data={books.filter(b => !b.isFav)}
                updateState={this.updateState}
              />
            )}
          />
          <Route path="/Details" component={Details} />
          <Route
            path="/Favorites"
            component={props => (
              <Favorites {...props} data={books.filter(b => b.isFav)} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
