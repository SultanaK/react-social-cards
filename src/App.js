import React from 'react';
import './App.css';
import CardList from './CardList';
import SortButton from './SortButton';

class App extends React.Component {

  state = {
    toggled: false,
    cardData: [
      {
        id: 1,
        name: "Steve",
        imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
        age: 5,
        description: "Lorem ipsum dolor sit amet",
        likes: 0
      },
      {
        id: 2,
        name: "Chip",
        imageUrl: "https://source.unsplash.com/v3-zcCWMjgM/300x300",
        age: 3,
        description: "consectetur adipiscing elit",
        likes: 0
      },
      {
        id: 3,
        name: "Banjo",
        imageUrl: "https://source.unsplash.com/JU5ewSjt8Yw/300x300",
        age: 2,
        description: "Sed do eiusmod tempor",
        likes: 0
      },
      {
        id: 4,
        name: "Flip",
        imageUrl: "https://source.unsplash.com/NKN25UfGfkQ/300x300",
        age: 6,
        description: "Ut enim ad minim veniam",
        likes: 0
      }
    ]
  }

  addLike = (id) => {
    // create a new value for cards
    const newCards = this.state.cardData.map((card) => {
      if (id === card.id) {
        card.likes++; 
      }
      return card
    })

    // put new card value in state under "cards" key
    this.setState({
      cardData: newCards
    })
  }

  sortByRank = () => {
    console.log("sortByRank was called")

    const sortedCards = this.state.cardData.sort((current, next) => {
      return next.likes - current.likes
    })

    this.setState({
      cardData: sortedCards
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1>My AMAZING Social Media App!</h1>
          <SortButton handleSortByRank={this.sortByRank}/>
          <CardList cards={this.state.cardData} addLike={this.addLike} />
        </header>
      </div>
    );
  }


}

export default App;
