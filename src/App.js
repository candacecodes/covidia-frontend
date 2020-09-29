import React, { Component } from "react";
import "./App.css";
import Cards from "./Cards";
import Deck from "./Deck";
import CreateCard from "./CreateCard";

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

  // createCard = (description, imgsrc) => {
  //   console.log(description);
  //   console.log(imgsrc);
  // };

  createCard = (description, imgsrc) => {
    console.log(description);
    console.log(imgsrc);

    fetch(`http://localhost:3000/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        card: { description: description, imgsrc: imgsrc },
      }),
      // backend has strong params, and the strong params expect to receive a key of card; need send an object with a key of card
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          cards: [
            ...this.state.cards,
            {
              id: json.id,
              deck_id: 1,
              description: description,
              imgsrc: imgsrc,
            },
          ],
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://innovativegenomics.org/wp-content/uploads/2020/04/Abstract-SARS-CoV-2-in-red-with-RNA.png" />
          <p>COVIDIA</p>
        </header>
        <Cards cards={this.state.cards} />
        <CreateCard onSubmit={this.createCard} />
        <Deck />
      </div>
    );
  }
}

export default App;
