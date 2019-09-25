import React,{Component} from 'react'
import { MdChevronRight } from "react-icons/md";
import { IconContext } from "react-icons";
import InfoRace from './info/infoRace'

export default class RaceView extends Component {
    constructor (){
        super()
        this.state={
            selected:false
        }
        this.handleClickInfoRace=this.handleClickInfoRace.bind(this)
    }
    handleClickInfoRace(){
        var pistache= <InfoRace raceId={this.props.raceId} />
        this.props.main(pistache)
    }

    render (){
        if(this.state.selected){
        }
        return(
            <div>
                <div className='raceDiv' onClick={this.handleClickInfoRace}>
                    <p className='NameRace'>
                        {this.props.name}
                    </p>
                    <IconContext.Provider value={{size:'2em',color:'#D3D3D3' }}>
                        <MdChevronRight style={{padding: 'auto auto'}}/>
                    </IconContext.Provider>
                </div>
            </div>
            
            
        );
    }
    
}