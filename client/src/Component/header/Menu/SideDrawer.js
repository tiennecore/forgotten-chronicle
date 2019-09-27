import React from 'react';
import './SideDrawer.css';
import SeeRaces from '../race/see'

export default class sideDrawer extends React.Component{
    constructor(){
        super()
        this.state ={
            selected:false,
            main:null
        }
        this.handleclickselection=this.handleclickselection.bind(this)
    }
    handleclickselection(){
        
        //this.props.drawerClickHandler
        this.setState({selected:!this.state.selected})
       
    }
    render(){
        var drawerClasses = 'side-drawer';
        var selected
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        if (this.state.selected){
            selected=
            <SeeRaces
                drawer={this.handleclickselection} 
                main={this.props.main} 
            />
        }
        return(
            <nav className={drawerClasses}>
                <div className = 'SideSelection' onClick={this.handleclickselection}>
                    <p>
                        Race
                    </p>
                </div>
                {selected}
            </nav>
        );
    }
}
