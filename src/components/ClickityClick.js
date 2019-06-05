// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{
  constructor(){
    super()
    //define the initial state
    this.state = {
      hasBeenClicked: false
    }
  }

  handleClick = () => {
    //Update out state here...
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))//prints true
    //console.log(this.state.hasBeenClicked) > //prints false
  }

  render(){
    return(
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default ClickityClick
