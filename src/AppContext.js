import React from 'react'

const AppContext = React.createContext({
    addLike: () => {},
    sortByRank: () => {},
    deleteItem: () => {},
    cards: []
})

export default AppContext