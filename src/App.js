import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

const circles = [1,2,3,4];

class App extends Component {
  state = {
    btnSelected: 1
  }
  handleSelection = (btnIdx) => {
    this.setState({btnSelected: btnIdx});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector circles={circles} btnSelected={this.state.btnSelected} handleSelection={this.handleSelection} />
          <Circles circles={circles} btnSelected={this.state.btnSelected} />
        </main>
      </div>
    );
  }
}

export default App;