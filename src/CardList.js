import React from 'react'
import './CardList.css'
import Card from './Card'



class CardList extends React.Component {

  state = {
    cardData: [
      {
        name: "Steve",
        imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
        age: 5,
        description: "Lorem ipsum dolor sit amet",
        id: 1,
        likes: 0
      },
      {
        name: "Chip",
        imageUrl: "https://source.unsplash.com/v3-zcCWMjgM/300x300",
        age: 3,
        description: "consectetur adipiscing elit",
        id: 2,
        likes: 0
      },
      {
        name: "Banjo",
        imageUrl: "https://source.unsplash.com/JU5ewSjt8Yw/300x300",
        age: 2,
        description: "Sed do eiusmod tempor incididunt ut ",
        id: 3,
        likes: 0
      },  
      {
        name: "Flip",
        imageUrl: "https://source.unsplash.com/NKN25UfGfkQ/300x300",
        age: 6,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        id: 4,
        likes: 0
      }
    ]
  }
  
  handleClick = (id) => {
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
    const cards = this.state.cardData.map((currentCard, index) => {
      return (
          <div>
            <Card 
                key={index}
                name={currentCard.name} 
                imageUrl={currentCard.imageUrl}
                age={currentCard.age}
                description={currentCard.description}
                likes={currentCard.likes}
            />
            <button onClick={() => this.handleClick(currentCard.id)}>Like!</button>
          </div>
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