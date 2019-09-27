import React from 'react'

import './header.css'
import Backdrop from './Menu/BackDrop'
import Toolbar from './Menu/Toolbar'
import SideDrawer from './Menu/SideDrawer'
import Main from '../main/Main'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state ={
            sideDrawerOpen: false,
            main:null,
            preMain:null
        }
        this.handleClickOpenMenu=this.handleClickOpenMenu.bind(this)
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        })
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
        this.setState((prevState) => {
            return {main:value,preMain:prevState.main,sideDrawerOpen: !prevState.sideDrawerOpen}
        })
    }
    render (){
        var backdrop;
        if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return(
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} main={this.handleMainvalue}/>
                {backdrop}
                <main style={{marginTop: '64px'}}>
                    <Main infoId= {this.state.main} />
                </main>             
            </div>
        );
    }
}