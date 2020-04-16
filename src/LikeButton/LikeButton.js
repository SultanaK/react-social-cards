import React from 'react'
import AppContext from '../AppContext'

class LikeButton extends React.Component {

    // handleClick = () => {
    //     // other stuff happens here
    //     this.props.addLike()
    // }
    static contextType = AppContext

    render() {
        return (
            <button onClick={() => this.context.addLike(this.props.id)}>Like</button>
        )
    }
}

export default LikeButton;