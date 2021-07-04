import React from 'react';
import {NavLink} from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Navbar=()=>{
    return(
        <>
        <div className="headerr">
        <div className='nav'>
        <Fade right>
        <NavLink exact activeClassName='active_class' to='/'>Home</NavLink>
        <NavLink exact activeClassName='active_class' to='/project'>Projects</NavLink>
        <NavLink exact activeClassName='active_class' to='/internship'>Internships</NavLink>
        </Fade>
        
        </div>
        </div>
        </>
    );
}
export default Navbar;