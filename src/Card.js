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
    const { description, imgsrc } = this.props.card;
    return (
      <div className="card">
        <h3> {description} </h3>
        <h4> {imgsrc} </h4>

        <button
          type="button"
          class="btn btn-warning"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          Add Card to Your Deck
        </button>

        <button type="button" class="btn btn-light">
          Edit Card
        </button>

        <button type="button" class="btn btn-light">
          Delete Card
        </button>

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
