import React from 'react';
import './App.css';
import CardList from './CardList'
import store from './STORE'
import { Route, Switch } from 'react-router-dom'
import MostLiked from './MostLiked'
import About from './About'
import Nav from './Nav'
import NotFound from './NotFound'

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
          <Nav/>

          <Switch>
            <Route path="/" exact={true} 
              render={() => <CardList cards={this.state.cards} handleAddLike={this.handleAddLike} />} 
            />
            <Route path="/about" exact={true} component={About} />
            <Route path="/likes" exact={true} >
              <MostLiked cards={this.state.cards} />
            </Route>
            <Route path="/likes/whatever" exact={true}>
              Somehting else
            </Route>
            <Route component={NotFound} />
          </Switch>
   
        </header>
      </div>
    );
  }

}

export default App;

