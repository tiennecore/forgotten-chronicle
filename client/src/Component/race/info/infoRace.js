import React from 'react'
import InfoRaceNoms from './inforacenoms'
import InfoRaceCapacite from './inforacecapacite'
import InfoRaceCarac from './inforacecarac'
import InfoRaceRepere from './inforacerepere'

class InfoRace extends React.Component {
  constructor(){
    super()
    this.state = {
      infoRacePrincipal : {}
    }
  }
  componentDidMount() {
    var stringrequest="https://tiennelord.herokuapp.com/api/race/"+this.props.raceId
    fetch(stringrequest)
    .then(response => response.json())
    .then( responseJson=> {
      this.setState({infoRacePrincipal:responseJson[0]})
    },)
  }
  
  render (){
    return (
      <div className='infoRaceDiv'>
        <p>
          Description : {this.state.infoRacePrincipal.DESCRIPTION}<br/><br/>
          Préjugés typiques : {this.state.infoRacePrincipal.PREJUGE}
        </p>
        {this.state.infoRacePrincipal.noms_ID ? <InfoRaceNoms raceId={this.state.infoRacePrincipal.noms_ID} /> :null }     
        <h3>Création personnage</h3>
        {this.state.infoRacePrincipal.capacite_raciale_ID ? <InfoRaceCapacite raceId={this.state.infoRacePrincipal.capacite_raciale_ID} /> :null }
        {this.state.infoRacePrincipal.carac_ID ? <InfoRaceCarac raceId={this.state.infoRacePrincipal.carac_ID} /> :null }
        <h3>Repères</h3>
        {this.state.infoRacePrincipal.repere_ID ? <InfoRaceRepere raceId={this.state.infoRacePrincipal.repere_ID} /> :null }        
      </div>
    );
  }
}

export default InfoRace