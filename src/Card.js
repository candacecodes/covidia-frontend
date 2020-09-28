import React, { Component } from "react";

class Card extends Component {
  state = {
    showDetails: false,
  };

  // handleToggleDetails = () => {
  //   // toggle our showDetails state
  //   this.setState({ showDetails: !this.state.showDetails });
  // };

  render() {
    return (
      <div className="ui eight wide column">
        <h3>{this.props.card.description}</h3>

        {/* {this.state.showDetails && <HogDetails hog={this.props.hog} />} */}
        {/* {this.state.showDetails ? <HogDetails hog={this.props.hog} /> : null} */}

        {/* <button onClick={this.handleToggleDetails} className="ui button">
            Toggle Details
          </button> */}

        {/* <button
          className="ui button"
          onClick={() => this.props.handleHogHideAndSeek(this.props.hog)}
        >
          {this.props.buttonText}
        </button> */}
      </div>
    );
  }
}

export default Card;
