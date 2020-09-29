import React from "react";

// make this a filter component instead
// Filter by deck description
class Deck extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <h1>Filter </h1>

        {/* {this.props.pets.map((pet) => (
              <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />
            ))} */}
      </div>
    );
  }
}

export default Deck;
