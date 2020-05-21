import React from 'react'

function Card(props) {
    // props.id
    return (
        <div className="card">
            <img src={props.imageUrl} alt="profile pic" />
            <div className="card-content">
                <h3>{props.name.toUpperCase()}</h3>
                <p>Age: {props.age} | Likes: {props.likes}</p>
                <p>{props.description}</p>
                <button onClick={() => props.handleAddLike(props.id)}>Add like</button>
            </div>
        </div>
    )
}

export default Card