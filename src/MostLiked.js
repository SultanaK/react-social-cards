import React from 'react'

function MostLiked(props) {

    let items = [].concat(props.cards)

    const rankedItems = items.sort((current, next) => {
        return next.likes - current.likes
    })

    const rankedItemMarkup = rankedItems.map((item, index) => {
        return <li key={index}>{item.name}: {item.likes}</li>
    })

    return(
        <div>
            <h3>LIKES</h3>
            <ul style={{listStyle: "none", padding: "0"}}>{rankedItemMarkup}</ul>
        </div>
        
    ) 
}

export default MostLiked