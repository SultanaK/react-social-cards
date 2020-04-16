import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import CardList from '../CardList/CardList'
import Faq from '../Faq/Faq'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'
import store from '../STORE'
import Profile from '../Profile/Profile'
import AppContext from '../AppContext'


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
      return card.id !== id;
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
    
    const contextValue = {
      cards: this.state.cardData,
      deleteItem: this.deleteItem,
      addLike: this.addLike,
      sortByRank: this.sortByRank
    }

    return (
      <AppContext.Provider value={contextValue}>
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
            <Route exact path="/" component={CardList} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/faq" component={Faq} /> 
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </AppContext.Provider>
    );
  }


}

export default App;


