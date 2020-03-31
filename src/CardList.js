import React from 'react'
import './CardList.css'
import Card from './Card'
import store from './STORE'

class CardList extends React.Component {

  state = {
    cardData: store.cardData
  }

  addLike = (id) => {
    const newCardData = this.state.cardData.map((card) => {
      if (card.id === id) {
        card.likes ++;
      }
      return card;
    })

    this.setState({
      cardData: newCardData,
    })
  }

  render() {
    const cards = this.state.cardData.map((currentCard) => {
      return (
            <Card 
                key={currentCard.id}
                name={currentCard.name} 
                imageUrl={currentCard.imageUrl}
                age={currentCard.age}
                description={currentCard.description}
                likes={currentCard.likes}
                id={currentCard.id}
                addLike={() => this.addLike(currentCard.id)}
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