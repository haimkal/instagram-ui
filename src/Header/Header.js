import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';
import Menu from './Menu/Menu';
export default function Header(props) {
    return (
        <header className="Header sticky-top sm-fixed-bottom"> 
            <nav className="navbar navbar-dark bg-dark">
                <div className="bigContainer d-flex justify-content-between">
                    <div className="container d-flex justify-content-start">
                        <a className="navbar-brand" href="/">FuNky Camera</a>
                        <Menu/>
                    </div>
                    <div className="nav ml-auto">
                        <HeaderAvatar />
                    </div>
                </div>    
            </nav>
        </header>
    )
}
