import React, { Component } from "react";
import EditableLabel from "react-inline-editing";

class Card extends Component {
  state = {
    showDetails: false,
    description: this.props.card.description,
    imgsrc: this.props.card.imgsrc,
  };

  // handleToggleDetails = () => {
  //   // toggle our showDetails state
  //   this.setState({ showDetails: !this.state.showDetails });
  // };

  // editCardInfo = (id) => {
  //   console.log(id);
  // };

  // function to console log what text is originally is when clicked
  _handleFocus = (text) => {
    // console.log("Focused with text: " + text); //
  };

  _handleFocusOutDescription = (id, description) => {
    // console.log("Left editor with text: " + description);
    // console.log("id " + id);
    this.setState({ description: description });
    this.props.editCard(description, id);
  };

  // _handleFocusOutImgSrc = (imgsrc, id) => {
  //   // console.log("Left editor with text: " + imgsrc);
  //   this.setState({ imgsrc: imgsrc });
  //   // stored state here
  // };

  render() {
    const { description, imgsrc } = this.state;
    const {
      editCard,
      deleteCard,
      card: { id },
    } = this.props;
    // card:{id} is destructuring an object
    // console.log(description);
    // console.log(imgsrc);
    return (
      <div className="card">
        {/* <h3> {description} </h3>
        <h4> {imgsrc} </h4> */}

        <EditableLabel
          text={description}
          labelClassName="myLabelClass"
          inputClassName="myInputClass"
          // inputWidth="200px"
          // inputHeight="25px"
          // inputMaxLength="50"
          // labelFontWeight="bold"
          // inputFontWeight="bold"
          // onFocus={this._handleFocus}
          onFocusOut={(description) =>
            this._handleFocusOutDescription(id, description)
          }
        />

        {/* add in imgsrc later  */}
        {/* <EditableLabel
          text={imgsrc}
          labelClassName="myLabelClass"
          inputClassName="myInputClass"
          inputWidth="200px"
          inputHeight="25px"
          inputMaxLength="50"
          labelFontWeight="bold"
          inputFontWeight="bold"
          // onFocus={this._handleFocus}
          onFocusOut={this._handleFocusOutImgSrc}
        /> */}

        <button
          // onClick={() => this.editCard(id)}
          type="button"
          class="btn btn-warning"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
        >
          {/* Edit Card */}~ ☼ ~ ☼ ~ ☼ ~ ☼ ~ ☼ ~
        </button>

        <button
          onClick={() => deleteCard(id)}
          type="button"
          class="btn btn-light"
        >
          <i>Delete Card</i>
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
