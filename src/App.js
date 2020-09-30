import React, { Component } from "react";
import "./App.css";
import Cards from "./Cards";
import Deck from "./Deck";
import CreateCard from "./CreateCard";

class App extends Component {
  state = {
    cards: [],
    decks: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/cards")
      .then((res) => res.json())
      .then((cards) => {
        this.setState({ cards });
        // console.log(cards);
      });

    fetch("http://localhost:3000/decks")
      .then((res) => res.json())
      .then((decks) => {
        this.setState({ decks });
        // console.log(cards);
      });
  }

  // createCard = (description, imgsrc) => {
  //   console.log(description);
  //   console.log(imgsrc);
  // };

  createCard = (description, imgsrc, deck) => {
    console.log(description);
    console.log(imgsrc);

    fetch(`http://localhost:3000/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        card: { description: description, imgsrc: imgsrc, deck_id: deck },
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
              deck_id: deck,
              description: description,
              imgsrc: imgsrc,
            },
          ],
        });
      });
  };

  // edit template
  editCard = (description, id) => {
    console.log(description);
    console.log("id " + id);

    let data = {
      description: description,
    };

    fetch(`http://localhost:3000/cards/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        let cards = this.state.cards.map((card) => {
          if (card.id === json.id) {
            let newCard = {
              id: json.id,
              card: { description: description },
            };
            return newCard;
          } else {
            return card;
          }
        });
        this.setState({
          cards: cards,
        });
      });
  };

  // delete template
  deleteCard = (id) => {
    fetch(`http://localhost:3000/cards/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        let cards = this.state.cards.filter((card) => card.id !== id);
        this.setState({
          cards: cards,
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
        <Deck />
        <Cards
          cards={this.state.cards}
          decks={this.state.decks}
          deleteCard={this.deleteCard}
          editCard={this.editCard}
          // key = {value}
        />
        <CreateCard onSubmit={this.createCard} />
      </div>
    );
  }
}
// functional
// class

export default App;
