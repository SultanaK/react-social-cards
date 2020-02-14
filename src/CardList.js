import React from 'react'
import './CardList.css'
import Card from './Card'



class CardList extends React.Component {
  

  render() {

    const cards = this.props.cards.map((currentCard, index) => {
      return (
            <Card 
                key={index}
                name={currentCard.name} 
                imageUrl={currentCard.imageUrl}
                age={currentCard.age}
                description={currentCard.description}
                likes={currentCard.likes}
                id={currentCard.id}
                handleAddLike={this.props.handleAddLike}
            />
        )
    })

    return (
        <section className="CardList">
            {cards}            
        </section>
    )
  }

}

export default CardList