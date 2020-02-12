import React from 'react'

function MostLiked(props) {
    const items = props.cards.map((item, index) => {
        return <li key={index}>{item.name}: {item.likes}</li>
    })

    return(
        <div>
            <h3>LIKES</h3>
            <ul style={{listStyle: "none", padding: "0"}}>{items}</ul>
        </div>
        
    ) 
}

export default MostLiked