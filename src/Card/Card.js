import React from 'react'
import { Link } from 'react-router-dom'
import LikeButton from '../LikeButton/LikeButton'
import AppContext from '../AppContext'

class Card extends React.Component {
    static contextType = AppContext;

    render() {
        console.log(this.context)
        return (
            <div className="card">
                <img src={this.props.imageUrl} alt="profile pic" />
                <div className="card-content">
                    <h3>Name: {this.props.name}</h3>
                    <p><Link to={`/profile/${this.props.id}`}>View</Link></p>
                    <LikeButton addLike={this.props.addLike} />
                    <p>Age: {this.props.age}</p>
                    <p>Likes: {this.props.likes}</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Card

Card.defaultProps = {
    imageUrl: "https://image.com", 
    name: "Todd",
    age: 5, 
    description: "Lorem ipsum"
}