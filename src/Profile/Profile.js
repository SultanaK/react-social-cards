import React from 'react'
import './Profile.css'
import AppContext from '../AppContext'

class Profile extends React.Component {

  static contextType = AppContext;

  deleteAndGoBack = (id) => {
    this.context.deleteItem(id)
    // go back
    this.props.history.push("/");
  }
  
  render() {

    const id = this.props.match.params.id
    const currentCard = this.context.cards.find((card) => 
      id === card.id.toString()
    )

    return(
      <div className="profile">
        <img src={currentCard.imageUrl} alt="profile pic" />
        <h1>{currentCard.name}</h1>
        <p>
          {currentCard.description}
        </p>
        <p>
          <strong>Likes: {currentCard.likes}</strong>
        </p>
        <button 
          onClick={() => this.deleteAndGoBack(currentCard.id)} 
          className="deleteButton" >
          Delete :(
        </button>
      </div>
    )
  }
}

export default Profile
