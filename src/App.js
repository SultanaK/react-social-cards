import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import CardList from './CardList'
import Faq from './Faq'
import About from './About'
import NotFound from './NotFound'
import store from './STORE'
import Profile from './Profile/Profile'


class App extends React.Component {

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


  deleteItem = (id) => {
    const newCardData = this.state.cardData.filter((card) => {
      return card.id != id;
    })

    this.setState({
      cardData: newCardData,
    })
  }


  sortByRank = () => {
    console.log("sortByRank was called")
    
    let unranked = [].concat(this.state.cardData);
    //[...this.state.cardData] <- also works
    //Array.sort -> does not return a new value, just reorders an array 

    const ranked = unranked.sort((current, next) => 
      next.likes - current.likes 
    )
  
    this.setState({cardData: ranked}) 

  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Social Media App!!!</h1>          
          <Link to="/">Home</Link>
          {' '}
          <Link to="/about">About</Link>
          {' '}
          <Link to="/faq">Faq</Link>
        </header>
        <Switch>

          <Route exact path="/" render={() => {
            return (
              <CardList 
                cardData={this.state.cardData} 
                sortByRank={this.sortByRank} 
                addLike={this.addLike} 
              />
            )            
          }} />

          <Route exact path="/profile/:id" render={(routeProps) => {
            const cardId = routeProps.match.params.id;

            const selectedCard = this.state.cardData.find((card) => {
              return cardId === card.id.toString()
            }) 
            
            return (
              <Profile 
                history={routeProps.history} 
                {...selectedCard} 
                deleteItem={this.deleteItem} 
              />
            )
          }} /> 
          <Route exact path="/faq" component={Faq} /> 
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }


}

export default App;


