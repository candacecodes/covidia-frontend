import React, { Component } from "react";

class CreateCard extends Component {
  state = {
    // id: "",
    description: "",
    imgsrc: "",
    deck: "",
  };

  handleForm = (e) => {
    e.preventDefault();
    const description = this.state.description;
    const imgsrc = this.state.imgsrc;
    const deck = this.state.deck;
    // console.log(description);
    // console.log(imgsrc);
    // this.props.createCard(description, imgsrc);

    this.props.onSubmit(description, imgsrc, deck);
    console.log(this.props);
  };

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleImgSrc = (e) => {
    this.setState({
      imgsrc: e.target.value,
    });
    // console.log(e.target.value);
  };

  handleDeckSrc = (e) => {
    console.log("deck_id", e.target.value);
    // this.setState({
    //   deck: parseInt(e.target.value),
    // });
    this.setState({
      deck: e.target.value,
    });
    // console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <h2>Add a Card</h2>
        <span class="oi oi-caret-bottom"></span>
        <form onSubmit={this.handleForm}>
          <div>
            <label>Description</label>
            <br />
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div>
            <label>Image Source</label> <br />
            <input
              type="text"
              value={this.state.imgsrc}
              onChange={this.handleImgSrc}
            />
          </div>
          <div>
            {/* {this.props.deck.map} | deck = array, inside of select, .map on deck array and return an option which fills in the select  */}
            <label>Deck</label> <br />
            <select
              name="decks"
              id="decks"
              value={this.state.deck}
              onChange={this.handleDeckSrc}
            >
              <option value="1">Virology</option>
              <option value="2">Epidemiology</option>
              <option value="3">Statistics</option>
              <option value="4">Trivia</option>
            </select>
          </div>
          <br />
          <button type="submit" class="btn btn-secondary">
            Create Card
          </button>
        </form>
      </div>
    );
  }
}

export default CreateCard;
