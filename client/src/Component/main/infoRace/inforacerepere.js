import React from 'react'
export default class InfoRaceRepere extends React.Component {
  constructor(){
    super()
    this.state = {
      infoRacerepere : {}
    }
  }
  componentDidMount() {
    if(this.props.raceId!==undefined){
      var stringrequest= "http://localhost:5000/api/raceInfoRepere_race/"+this.props.raceId||"https://tiennelord.herokuapp.com/api/raceInfoRepere_race/"+this.props.raceId
    fetch(stringrequest)
    .then(response => response.json())
    .then( responseJson=> {
      this.setState({
        infoRacerepere:responseJson[0]
      })
    },)
    }
    
  }
  
  render (){
    return (
      <div>
        <p>
          Âge de départ : {this.state.infoRacerepere.AGE_MIN}<br/>
          Espérance de vie : {this.state.infoRacerepere.AGE_MAX}<br/>
          Taille :  {this.state.infoRacerepere.TAILLE_MIN} m à {this.state.infoRacerepere.TAILLE_MAX} m<br/>
          Poids : {this.state.infoRacerepere.POID_MIN}kg à  {this.state.infoRacerepere.POID_MAX}kg<br/>
          {this.state.infoRacerepere.DESCRIPTION}
        </p>
      </div>
    );
  }
}