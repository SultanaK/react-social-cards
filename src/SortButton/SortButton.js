import React from 'react'

function SortButton(props) {
    return (
        <>
            <button onClick={props.sort}>Sort By Likes</button>
            <br />
        </>
    )
}

export default SortButton