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

const Cards = ({ cards, decks, editCard, deleteCard }) => {
  // const {x, y, z} = props => different way of destructuring; and put in props in argument for function
  // from ES5 {cards} destructures = separates props into separate objects
  console.log(cards);
  return (
    <div className="cardlistdiv">
      {/* <h1> -- </h1> */}
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          editCard={editCard}
          deleteCard={deleteCard}

          //   handleHogHideAndSeek={redeemHog}
          //   buttonText="Redeem Hog"
        />
      ))}
    </div>
  );
};

export default Cards;
