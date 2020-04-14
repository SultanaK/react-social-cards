import React from 'react'
import './CardList.css'
import Card from './Card'
import SortButton from './SortButton'

class CardList extends React.Component {

  

  
  render() {
    const cards = this.props.cardData.map((currentCard) => {
      return (
            <Card 
                key={currentCard.id}
                name={currentCard.name} 
                imageUrl={currentCard.imageUrl}
                age={currentCard.age}
                description={currentCard.description}
                likes={currentCard.likes}
                id={currentCard.id}
                addLike={() => this.props.addLike(currentCard.id)}
            />
        )
    })

    return (
        <section className="CardList">
            <SortButton sort={this.props.sortByRank} />
            {cards}            
        </section>
    )
  }

}

export default CardList