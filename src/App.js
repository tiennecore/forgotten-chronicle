import React from 'react';
import Header from './Component/header/header'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }
  
  render (){
    return (
      <div>
        <Header />
      </div>
    );
  }
}


export default App;
