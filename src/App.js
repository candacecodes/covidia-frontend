import React, { Component } from "react";
import "./App.css";
import Cards from "./Cards";
import Deck from "./Deck";

class App extends Component {
  state = {
    cards: [],
    deck: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((cards) => {
        this.setState({ cards });
        // console.log(cards);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://innovativegenomics.org/wp-content/uploads/2020/04/Abstract-SARS-CoV-2-in-red-with-RNA.png" />
          <p>COVIDIA</p>
        </header>
        <Cards cards={this.state.cards} />
        <Deck />
      </div>
    );
  }
}

export default App;
