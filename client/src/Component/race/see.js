import React,{Component} from 'react'
import RaceView from './raceView'
import './race.css';
import Loading from '../Function/loading'


class SeeRaces extends Component {
  
    constructor(){
      super()
      this.state = {
        load:false,
        races : []
      }
    }

    
  
    componentDidMount() {
      var stringrequest="https://tiennelord.herokuapp.com/api/races"
      fetch(stringrequest)
      .then(response => response.json())
      .then( responseJson=> {
        console.log(stringrequest)
        this.setState({load:true,races:responseJson})

      })
    }
  
  render (){
    const raceComponents = this.state.races.map(race=>
      <RaceView 
        key={race.id} 
        raceId={race.id} 
        name={race.name}
        main={this.props.main} 
      />
    )
    return (
      <div>
        {this.state.load ? 
          <div className='racesDiv'>
            {raceComponents}
          </div>
        :<Loading/>}
      </div>
    );
  }
  }
   export default SeeRaces