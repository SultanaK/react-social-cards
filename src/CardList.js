import React from 'react'
import './CardList.css'
import Card from './Card'



class CardList extends React.Component {
  
  handleClick = (id) => {
    // const newCardData = this.state.cardData.map((card) => {
    //   if (card.id === id) {
    //     card.likes ++;
    //   }
    //   return card;
    // })

    // this.setState({
    //   cardData: newCardData,
    // }) 
  }

  //this.state
  //this.props.cards
  

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