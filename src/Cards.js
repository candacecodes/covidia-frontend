import React from "react";
import Card from "./Card";

// class Cards extends React.Component {
//   render() {
//     return (
//       <div className="ui cards">
//         <h1>Covid Cards</h1>
//         {/* {this.props.cards.map((card) => (
//             <Card key={card.id} card={card} onAdoptPet={this.props.onAdoptPet} />
//           ))} */}
//       </div>
//     );
//   }
// }

const Cards = ({ cards }) => {
  console.log(cards);
  return (
    <div className="ui grid container">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          //   handleHogHideAndSeek={redeemHog}
          //   buttonText="Redeem Hog"
        />
      ))}
    </div>
  );
};

export default Cards;
