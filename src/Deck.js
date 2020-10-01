import React from "react";

// make this a filter component instead
// Filter by deck description
class Deck extends React.Component {
  render() {
    return (
      <div className="filter">
        <h1>Find By</h1>
        {/* <label>Deck</label> <br /> */}
        {/* <select>
              type="text" // option value={this.state.deck}
              onChange={this.handleDeckSrc}>
            </select> */}
        <select name="decks" id="decks">
          <option value="1">Virology</option>
          <option value="2">Epidemiology</option>
          <option value="3">Statistics</option>
          <option value="4">Trivia</option>
        </select>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Deck;
