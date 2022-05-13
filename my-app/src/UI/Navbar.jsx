import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <div className="logo"></div>
                
                <li><NavLink className={({isActive})=>isActive ? 'activ':''} to='/'>Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive ? 'activ':''} to='/about'>About</NavLink></li>
                <li><NavLink className={({isActive})=>isActive ? 'activ':''} to='/colors'>Colors</NavLink></li>
                <li><NavLink className={({isActive})=>isActive ? 'activ':''} to='/features'>Features</NavLink></li>

            </ul>
        </div>
    );
};

export default Navbar;