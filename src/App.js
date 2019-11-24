import React, { Component } from 'react'
import Ninja from "./Ninja"
import { fchmodSync } from 'fs';

class App extends Component {
  state = {
    ninjas: [
      {name: 'ryu', age: '25',  belt: 'red', id: 11},
      {name: 'shua',age: '27', belt: 'blue', id: 12},
      {name: 'rama',age: '33', belt: 'black', id: 31},
      {name: 'amer',age: '22', belt: 'brown', id: 14}
    ]
  }
  render() {
    return (
      <>
        <div className="w3-bar w3-teal w3-container">
          <a href="#" className="w3-bar-item w3-button w3-mobile branding">
            HENRY productions</a>
          <span className="w3-mobile w3-right">
            <a href="#" className="w3-bar-item w3-button w3-hover-red">Home</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-red">Link 1</a>
            <a href="#" className="w3-bar-item w3- w3-hover-red">Link 2</a>
          </span>
        </div>
        <div className="App cc w3-container w3-light-grey">
            <Ninja ninjas = {this.state.ninjas} />
        </div>
      </>
    );
  }
}

export default App;
