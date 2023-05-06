import React, { Component } from 'react'
import { NavLink } from "react-router-dom"; 

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-body-tertiary bg-dark fixed-top"  data-bs-theme="dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Animick</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-pills">
                               
                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Top</NavLink>
                                </li>
                                
                               
                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link"  to="/movies">Movies</NavLink>
                                </li>
                                
                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link"  to="/series">Series</NavLink>
                                </li>
                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link"  to="/popular">Popular</NavLink>
                                </li>
                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link"  to="/upcoming">Upcoming</NavLink>
                                </li>
                                
                                
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
