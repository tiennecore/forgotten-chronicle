import React from 'react'
import { IconContext } from "react-icons";
import { IoMdMenu } from "react-icons/io";
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbarNavigation">
      <div />
      <div className="toolbarLogo" onClick={props.drawerClickHandler}>
        <IconContext.Provider value={{size:'2em',color:'white' }}>
            <IoMdMenu />
        </IconContext.Provider>
      </div>
      <div className="spacer" />
      <div className="toolbarNavigationItem">
        <p>
            Chronique oublié 
        </p>
      </div>
    </nav>
  </header>
)

export default toolbar