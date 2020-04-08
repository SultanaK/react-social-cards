import React from 'react';
import './App.css';
import CardList from './CardList'
import Faq from './Faq'
import About from './About'
import NotFound from './NotFound'
import { Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {

  constructor(props) { // Called before component mounts
    super(props);
    console.log("constructor")
  }
  
  componentDidMount() {
    console.log("ComponentDidMount")
  } // Called after component mounts

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
          <Route exact path="/" component={CardList} />
          <Route exact path="/faq" component={Faq} /> 
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate")
  } // Called after each render

  // componentWillUnmount() {} // Called before component unmounts

}

export default App;

