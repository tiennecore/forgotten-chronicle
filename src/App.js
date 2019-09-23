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
    var stringrequest="http://localhost:5000/api/races" || "/api/races"
    fetch(stringrequest)
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
        <p>this app {this.state.isloading ? "is loading" : this.state.race.map(Element => console.log(Element))}</p>
        
      </div>
    );
  }
}


export default App;
