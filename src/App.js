import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Footer from './Components/Footer';
import TopAnime from './Components/Home/TopAnime';
import Navbar from './Components/Navbar';
import Details from './Components/Home/Details';
// import { useEffect, useState } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      searchData:""
    }
  }

  getResults=(data)=>{
    console.log(data);
    this.setState({searchData:data})
  }

  
  render() {
    return (

      <div>


        <Router>




          <Navbar getData={this.getResults} />



          <Route exact path="/"> <TopAnime type="Top" filter="undefined"  /></Route>
          <Route path="/movies"> <TopAnime type="movie" filter="undefined" /></Route>
          <Route path="/series"> <TopAnime type="tv" filter="undefined" /></Route>
          <Route path="/popular"><TopAnime type="popular" filter="bypopularity"   /></Route>
          <Route path="/upcoming"><TopAnime type="upcoming" filter="upcoming"  /></Route>
          <Route path="/search"><TopAnime type="Top" filter="undefined"  data={this.state.searchData}/></Route>
          <Route path="/type/:dataId" component={Details} />
          <Route path={`/details/recommendations${this.state.id}/:dataId`} component={Details} />



          <Footer />


        </Router>
      </div>



    );



  }

  componentDidMount(){
    let s = sessionStorage.getItem('id');
    this.setState({id:s})
    console.log(s);

  }
}






