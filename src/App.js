import React from 'react';
import './App.css';
import CardList from './CardList'

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
          <CardList />
        </header>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate")
  } // Called after each render

  // componentWillUnmount() {} // Called before component unmounts

}

export default App;

