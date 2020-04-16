import React from 'react'
import AppContext from '../AppContext'

function SortButton() {
    return (
        <AppContext.Consumer>
            {(contextProps) => (
                <>
                    <button onClick={contextProps.sortByRank}>Sort By Likes</button>
                    <br />
                </>
            )}
        </AppContext.Consumer>
    )
}

export default SortButton