import React from 'react'
import InfoRaceNoms from './inforacenoms'
import InfoRaceCapacite from './inforacecapacite'
import InfoRaceCarac from './inforacecarac'
import InfoRaceRepere from './inforacerepere'

class InfoRace extends React.Component {
  constructor(){
    super()
    this.state = {
      infoRacePrincipal : {},
      raceId:null,
      load:true
    }
    this.fetchData=this.fetchData.bind(this)
  }
  fetchData(){
    var stringrequest
    if(process.env.NODE_ENV !== 'production'){
      stringrequest="http://localhost:5000/api/race/"+this.state.raceId
    }else{
      stringrequest="https://tiennelord.herokuapp.com/api/race/"+this.state.raceId
    }
    fetch(stringrequest)
    .then(response => response.json())
    .then( responseJson=> {
      this.setState({infoRacePrincipal:responseJson[0],load:true})
    },)
  }
  static getDerivedStateFromProps(props, state){
    if(props.raceId !== state.raceId && props.raceId !== null){
      return{
        raceId:props.raceId,
        load:false
      }
    }
    return null
  }
  
  shouldComponentUpdate(nextProps,nextState){
    if(this.state.load !==nextState.load ){
      return true
    }else{
      return false
    }
  }
  componentDidUpdate(prevProps, prevState){
    this.fetchData()
  }
  componentDidMount(){
    this.fetchData()

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