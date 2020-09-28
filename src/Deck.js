import React from "react";

class Deck extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <h1>Selected Deck</h1>
        {/* {this.props.pets.map((pet) => (
              <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
            ))} */}
      </div>
    );
  }
}

export default Deck;
