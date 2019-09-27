import React,{Component} from 'react'
import RaceView from './raceView'
import './race.css';
import Loading from '../../Function/loading'


class SeeRaces extends Component {
  
    constructor(){
      super()
      this.state = {
        load:false,
        races : []
      }
      this.fetchData=this.fetchData.bind(this)
    }
    fetchData(){
      var stringrequest
      if(process.env.NODE_ENV !== 'production'){
        stringrequest="http://localhost:5000/api/races"
      }else{
        stringrequest="https://tiennelord.herokuapp.com/api/races"
      }
      fetch(stringrequest)
      .then(response => response.json())
      .then( responseJson=> {
        this.setState({load:true,races:responseJson})

      })
    }

    
  
    componentDidMount() {
      this.fetchData()
    }
  
  render (){
    const raceComponents = this.state.races.map(race=>
      <RaceView 
        key={race.id}
        drawer={this.props.drawer} 
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