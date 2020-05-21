import React from 'react'
import Card from './Card'
import './Card.css';

//Define a component called CardList
function CardList(props) {
  const cards = props.cards.map((card, index) =>
    <div className="card-wrapper" key={index}>
      <Card 
          name={card.name} 
          age={card.age} 
          id={card.id}
          description={card.description} 
          imageUrl={card.imageUrl} 
          likes={card.likes}
          handleAddLike={props.addLike}
      />
    </div>
  );

  return (
      <section className="CardList">
          {cards}
      </section>
  )
}

export default CardList;
