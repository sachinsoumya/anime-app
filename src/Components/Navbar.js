import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }

    getData = (e) => {
        const v = e.target.value;
        console.log(v.length);
        if (v.length === 0) {
            this.props.history.goBack();
        } else {
            console.log(this.props.location.pathname);
            this.props.history.push(`${this.props.location.pathname}`);
            fetch(`https://api.jikan.moe/v4/anime?q=${v}&sfw`)
                .then((res) => res.json())
                .then((result) =>
                    this.props.getData(result.data)
                    
                );
        }
       


    }
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-md bg-body-tertiary bg-dark fixed-top" data-bs-theme="dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand fw-bold text-warning" to="/">Animick.com</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-3 mb-2 mb-lg-0 ">

                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Top</NavLink>
                                </li>


                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link" to="/movies">Movies</NavLink>
                                </li>

                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link" to="/series">TV</NavLink>
                                </li>
                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link" to="/popular">Popular</NavLink>
                                </li>
                                <li className="nav-item mx-lg-4">
                                    <NavLink className="nav-link" to="/favorite">Favorite</NavLink>
                                </li>


                            </ul>
                            <form className="d-flex" >
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchValue" onChange={this.getData} />
                                <NavLink to="/search"><button className="btn btn-outline-light" type="button"  ><i className="bi bi-search"></i></button></NavLink>
                            </form>
                            {this.props.color === "white" ?
                                <div className='mx-md-4 mt-md-0 mx-auto mt-2'><i className="bi bi-moon-stars text-white" onClick={this.props.selectThem}></i></div>

                                : <div className='mx-md-4 mt-md-0 mx-auto mt-2'><i className="bi bi-sun text-warning" onClick={this.props.selectThem}></i></div>}

                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
export default withRouter(Navbar);