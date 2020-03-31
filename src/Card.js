import React from 'react'
import LikeButton from './LikeButton'

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt="profile pic" />
            <div className="card-content">
                <h3>Name: {props.name}</h3>
                <LikeButton addLike={props.addLike} />
                <p>Age: {props.age}</p>
                <p>Likes: {props.likes}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card

Card.defaultProps = {
    imageUrl: "https://image.com", 
    name: "Todd",
    age: 5, 
    description: "Lorem ipsum"
}