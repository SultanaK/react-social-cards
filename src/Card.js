import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt="profile pic" />
            <div className="card-content">
                <h3>Name: {props.name}</h3>
                <p>Age: {props.age}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card