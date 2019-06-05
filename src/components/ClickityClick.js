import React, { Component } from 'react';

export default class ClickityClick extends Component {

  state = {
    hasBeenClicked: false
  }

  handleClick = (e) => {
    let clicker = this.state.hasBeenClicked
    this.setState({
      hasBeenClicked: !clicker
    })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
