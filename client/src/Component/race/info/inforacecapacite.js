import React from 'react'

export default class InfoRaceCapacite extends React.Component {
  constructor(){
    super()
    this.state = {
      InfoRaceCapacite : {}
    }
  }
  componentDidMount() {
    if (this.props.raceId !== undefined){
      var stringrequest= "https://tiennelord.herokuapp.com/api/raceInfoCapacite_raciale/"+this.props.raceId
      fetch(stringrequest)
      .then(response => response.json())
      .then( responseJson=> {
        this.setState({
          InfoRaceCapacite : responseJson[0]
        })
      },)
    }
    
  }
  
  render (){
    return (
      <div>
        <p>
          Les Capacité racaiale : {this.state.InfoRaceCapacite.nom} <br/>
          Description : {this.state.InfoRaceCapacite.description}
        </p>
      </div>
    );
  }
}

