import React from 'react'
import './CardList.css'
import Card from './Card'

function CardList(props) {

    const cardData =  [
      {
        name: "Steve",
        imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
        age: 5,
        description: "Lorem ipsum dolor sit amet",
        id: 1
      },
      {
        name: "Chip",
        imageUrl: "https://source.unsplash.com/v3-zcCWMjgM/300x300",
        age: 3,
        description: "consectetur adipiscing elit",
        id: 2
      },
      {
        name: "Banjo",
        imageUrl: "https://source.unsplash.com/JU5ewSjt8Yw/300x300",
        age: 2,
        description: "Sed do eiusmod tempor incididunt ut ",
        id: 3
      },  
      {
        name: "Flip",
        imageUrl: "https://source.unsplash.com/NKN25UfGfkQ/300x300",
        age: 6,
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        id: 4
      }
    ];

    const cards = cardData.map((currentCard, index) => {
        return (
            <Card 
                key={index}
                name={currentCard.name} 
                imageUrl={currentCard.imageUrl}
                age={currentCard.age}
                description={currentCard.description}
            />
        )
    })

    return (
        <section className="CardList">
            {cards}
        </section>
    )
}

export default CardList