import React from 'react';
import './App.css';
import CardList from './CardList'
import MostLiked from './MostLiked'
import store from './STORE'

class App extends React.Component {

  state = {
    cards: store
  }
  
  handleAddLike = (id) => {
    const newCardData = this.state.cards.map((item) => {
      if (id !== item.id) {
        return item;
      }

      item.likes += 1;
      return item;
    })

    this.setState({
      cards: newCardData
    }) 
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Social Media App!!!</h1>
          <MostLiked cards={this.state.cards} />
          <CardList cards={this.state.cards} handleAddLike={this.handleAddLike} />
          {/* <button onClick={this.handleAddLike}>LIKE</button> */}
        </header>
      </div>
    );
  }

}

export default App;

