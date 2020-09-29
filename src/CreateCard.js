import React, { Component } from "react";

class CreateCard extends Component {
  state = {
    // id: "",
    description: "",
    imgsrc: "",
  };

  handleForm = (e) => {
    e.preventDefault();
    const description = this.state.description;
    const imgsrc = this.state.imgsrc;
    // console.log(description);
    // console.log(imgsrc);
    // this.props.createCard(description, imgsrc);
    this.props.onSubmit(description, imgsrc);
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
          </div>{" "}
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
