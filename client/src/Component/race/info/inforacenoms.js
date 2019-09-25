import React from 'react'

class InfoRaceNoms extends React.Component {
  constructor(){
    super()
    this.state = {
      infoRaceNames : {}
    }
  }
  componentDidMount() {
    if (this.props.raceId !== undefined){
        var stringrequest="https://tiennelord.herokuapp.com/api/raceInfoNames/"+this.props.raceId
        fetch(stringrequest)
        .then(response => response.json())
        .then( responseJson=> {
        this.setState({
            infoRaceNames:responseJson[0]
        })
        },)
    }
    
  }
  
  render (){
      return (
          <div>
              <h3>Les noms :</h3>
              <p>
                  {this.state.infoRaceNames.DESCRIPTION} <br/>
                  Example noms masculins: {this.state.infoRaceNames.MASC}<br/>
                  Example noms feminins: {this.state.infoRaceNames.FEM}<br/>
              </p>

          </div>
      );
  }
}

export default InfoRaceNoms