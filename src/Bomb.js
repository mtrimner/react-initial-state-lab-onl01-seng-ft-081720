import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {secondsLeft: props.initialCount}
    }

    countDown = () => {
        if (this.state.secondsLeft > 0) {
           return  <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        } else { return <p>Boom!</p> }
    }
    render () {
        return(
            this.countDown() 
        )
    }
}