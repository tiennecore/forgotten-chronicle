import React from 'react'

export default class Raceform extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          raceName:null,
          raceDescription:null,
          racePrejuge:null,
          repereAgeMin:null,
          repereAgeMax:null,
          repereTailleMin:null,
          repereTailleMax:null,
          reperePoidMin:null,
          reperePoidMax:null,
          repereDescription:null,
          nomDescription:null,
          nomMasc:null,
          nomFem:null,
          caracFor:null,
          caracInt:null,
          caracDex:null,
          caracCha:null,
          caracCon:null,
          caracSag:null,
          capaciteName:null,
          capaciteDescription:null,
        }
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
        var {name,value} = event.target
        if(value===''){
          value = null
        }
        this.setState({[name]:value})
    }
    
    handleSubmit(event) {
      var stringrequest="http://localhost:5000/api/newrace" || "/api/newrace"
      fetch(stringrequest, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {'Content-Type': 'application/json'
        }
      })
      event.preventDefault()
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                <h3>Nom de race:</h3>
                <input type="text" value={this.state.value} name = "raceName" defaultValue="" onChange={this.handleChange} /><br/>
                <textarea placeholder="description" value={this.state.value} name = "raceDescription" defaultValue="" onChange={this.handleChange} /><br/>
                <textarea placeholder="Préjugés typiques" value={this.state.value} name = "racePrejuge" defaultValue="" onChange={this.handleChange} /><br/>
                <hr/>
                <h3>Repère</h3>
                age minimum : <input type="number" value={this.state.value} name = "repereAgeMin" defaultValue="" onChange={this.handleChange} /><br/>
                age maximum : <input type="number" value={this.state.value} name = "repereAgeMax" defaultValue="" onChange={this.handleChange} /><br/>
                taille minimum : <input type="number" value={this.state.value} name = "repereTailleMin" defaultValue="" onChange={this.handleChange} /><br/>
                taille maximum : <input type="number" value={this.state.value} name = "repereTailleMax" defaultValue="" onChange={this.handleChange} /><br/>
                poid minimum : <input type="number" value={this.state.value} name = "reperePoidMin" defaultValue="" onChange={this.handleChange} /><br/>
                poid maximum : <input type="number" value={this.state.value} name = "reperePoidMax" defaultValue="" onChange={this.handleChange} /><br/>
                <textarea placeholder="description" value={this.state.value} name = "repereDescription" defaultValue="" onChange={this.handleChange} /><br/>
                <hr/>
                <h3>Noms</h3>
                <textarea placeholder="description"value={this.state.value} name = "nomDescription" defaultValue="" onChange={this.handleChange} /><br/>
                <textarea placeholder="masculin"value={this.state.value} name = "nomMasc" defaultValue="" onChange={this.handleChange} /><br/>
                <textarea placeholder="feminin"value={this.state.value} name = "nomFem" defaultValue="" onChange={this.handleChange} /><br/>
                <hr/>
                <h3>capacité Raciale</h3>
                force : <input type="number" value={this.state.value} name = "caracFor" defaultValue="" onChange={this.handleChange} /><br/>
                intelligence : <input type="number" value={this.state.value} name = "caracInt" defaultValue="" onChange={this.handleChange} /><br/>
                constitution : <input type="number" value={this.state.value} name = "caracCon" defaultValue="" onChange={this.handleChange} /><br/>
                sagesse : <input type="number" value={this.state.value} name = "caracSag" defaultValue="" onChange={this.handleChange} /><br/>
                charisme : <input type="number" value={this.state.value} name = "caracCha" defaultValue="" onChange={this.handleChange} /><br/>
                dexterité : <input type="number" value={this.state.value} name = "caracDex" defaultValue="" onChange={this.handleChange} /><br/>

                capacité raciale : <input type="text" value={this.state.value} name = "capaciteName" defaultValue="" onChange={this.handleChange} /><br/>
                <textarea placeholder="description"value={this.state.value} name = "capaciteDescription" defaultValue="" onChange={this.handleChange} /><br/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}