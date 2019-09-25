import React from 'react'

export default class InfoRaceCarac extends React.Component {
  constructor(){
    super()
    this.state = {
      infoRaceCarac : {}
    }
  }
  componentDidMount() {
    if(this.props.raceId!==undefined){
      var stringrequest="https://tiennelord.herokuapp.com/api/raceInfoNames/"+this.props.raceId
    fetch(stringrequest)
    .then(response => response.json())
    .then( responseJson=> {
      this.setState({infoRaceCarac:responseJson[0]})
    },)
    }
    
  }
  
  render (){
    return (
      <div>
        
        <p>
          Caractéristique race :<br/>
          {this.state.infoRaceCarac.c_for ? "Force : "+this.state.infoRaceCarac.c_for+",":null}
          {this.state.infoRaceCarac.inte ? "Intelligence : "+this.state.infoRaceCarac.inte+",":null}
          {this.state.infoRaceCarac.char ? "Charisme : " +this.state.infoRaceCarac.char+",":null}
          {this.state.infoRaceCarac.dex ? "Dextérité : "+this.state.infoRaceCarac.dex+",":null}
          {this.state.infoRaceCarac.sag ? "Sagesse : "+this.state.infoRaceCarac.sag+",":null}
          {this.state.infoRaceCarac.con ? "Constitution : "+this.state.infoRaceCarac.con+",":null}
        </p>

      </div>
    );
  }
}

