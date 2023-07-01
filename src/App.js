import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Footer from './Components/Footer';
import TopAnime from './Components/Home/TopAnime';
import Navbar from './Components/Navbar';
import Details from './Components/Home/Details';
import Moredetails from './Components/Home/Moredetails';




export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      searchData: ""
    }
  }

  getResults = (data) => {
    console.log(data);
    this.setState({ searchData: data })
  }
  changeThem = () => {
    let body = document.getElementById('myApp');
    if (body.classList.contains('bg-white')) {
      body.classList.remove('bg-white')
      body.classList.add('bg-dark');
      body.classList.add('text-white');
      this.setState({ color: "black" })
      
    } else {
      body.classList.remove('bg-dark');
      body.classList.remove('text-white');
      body.classList.add('bg-white');
      this.setState({ color: "white" })
    }

  }






  render() {
    return (
      <div id="myApp" className='bg-white overflow-hidden' >
        <Router>
          <Navbar getData={this.getResults} selectThem={this.changeThem} color={this.state.color} />

          <Route exact path="/"> <TopAnime title="top" /></Route>
          <Route path="/movies"> <TopAnime type="movie" title="movie" /></Route>
          <Route path="/series"> <TopAnime type="tv" title="TV" /></Route>
          <Route path="/popular"><TopAnime  filter="bypopularity" title="popular" /></Route>
          <Route path="/favorite"><TopAnime filter="favorite" title="favorite" /></Route>
          <Route path="/search"><TopAnime title="searchs"  data={this.state.searchData} /></Route>
          <Route path="/type/:dataId" component={Details} />
          <Route path={`/more/:dataId`} component={Moredetails} />
          <Route path="/recommendations/:dataId" component={Details} />

          <Footer />


        </Router>
      </div>



    );



  }




}






