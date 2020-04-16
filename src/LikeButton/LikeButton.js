import React from 'react'

class LikeButton extends React.Component {

    // handleClick = () => {
    //     // other stuff happens here
    //     this.props.addLike()
    // }

    render() {
        return (
            <button onClick={this.props.addLike}>Like</button>
        )
    }
}

export default LikeButton;