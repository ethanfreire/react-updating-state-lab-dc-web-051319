// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }
  }
  updateTimesClickedValue = () =>{
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    return(
      <div>
      <label>timesClicked:</label>

      <button onClick = {this.updateTimesClickedValue}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
export default DigitalClicker
