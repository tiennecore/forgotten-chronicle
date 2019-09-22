import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isloading : true,
      race : []
    }
  }
  componentDidMount() {
    fetch("http://localhost:5000/races")
    .then(response => response.json())
    .then( responseJson=> {
      this.setState({
        race:responseJson,
        isloading:false
      })
    },)
  }

  render (){
    return (
      <div>
        <p>this app {this.state.isloading ? "is loading" : "is load"}</p>

      </div>
    );
  }
}


export default App;
