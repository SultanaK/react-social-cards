import React from 'react'
import './CardList.css'
import Card from '../Card/Card'
import SortButton from '../SortButton/SortButton'
import AppContext from '../AppContext'

class CardList extends React.Component {

  static contextType = AppContext

  render() {
    const cards = this.context.cards.map((currentCard) => {
      return (
            <Card 
                key={currentCard.id}
                name={currentCard.name} 
                imageUrl={currentCard.imageUrl}
                age={currentCard.age}
                description={currentCard.description}
                likes={currentCard.likes}
                id={currentCard.id}
            />
        )
    })

    return (
        <section className="CardList">
            <SortButton />
            {cards}            
        </section>
    )
  }

}

export default CardList