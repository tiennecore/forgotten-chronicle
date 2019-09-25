import React from 'react'

import './header.css'
import Backdrop from './BackDrop'
import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state ={
            sideDrawerOpen: false,
            main:null
        }
        this.handleClickOpenMenu=this.handleClickOpenMenu.bind(this)
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
      };
    
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
      };

    handleClickOpenMenu(){
        this.setState(prevState =>({
            menu:!prevState.menu
        }))
    }

    handleMainvalue = (value) => {
        this.setState({main:value})
    }
    render (){
        var backdrop;
        var mainvalue;
        if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        if(this.state.main !== null){
            mainvalue=this.state.main
        }
        return(
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} main={this.handleMainvalue}/>
                {backdrop}
                <main style={{marginTop: '64px'}}>
                    {mainvalue}
                </main>             
            </div>
        );
    }
}