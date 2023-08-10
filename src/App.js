import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Footer from './Components/Footer';
import TopAnime from './Components/Home/TopAnime';
import Navbar from './Components/Navbar';
import Details from './Components/Home/Details';
import Moredetails from './Components/Home/Moredetails';
import LoadingBar from 'react-top-loading-bar'
import Home from './Components/Main/Home';
import ArtistDetails from './Components/Home/ArtistDetails';




export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
      searchData: "",
      progress : 0
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
      this.setState({ color: "black" });
      sessionStorage.setItem('color', "white");

    } else {
      body.classList.remove('bg-dark');
      body.classList.remove('text-white');
      body.classList.add('bg-white');
       this.setState({ color: "white" });
       sessionStorage.setItem('color', "dark");
    }

  }

  setProgress = (progress)=>{
  this.setState({progress:progress})
}






  render() {
    return (
      <div id="myApp" className='bg-white overflow-hidden' >
        <Router>
          <Navbar getData={this.getResults} selectThem={this.changeThem} color={this.state.color} />
          <LoadingBar
            color='#ffc107'
            height={2}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />

          <Route exact path="/"> <Home  /></Route>
          <Route exact path="/top"> <TopAnime setProgress={this.setProgress} title="top" /></Route>
          <Route path="/movies"> <TopAnime  setProgress={this.setProgress} type="movie" title="movie" /></Route>
          <Route path="/series"> <TopAnime setProgress={this.setProgress} type="tv" title="TV" /></Route>
          <Route path="/popular"><TopAnime setProgress={this.setProgress} filter="bypopularity" title="popular" /></Route>
          <Route path="/favorite"><TopAnime setProgress={this.setProgress} filter="favorite" title="favorite" /></Route>
          <Route path="/search"><TopAnime setProgress={this.setProgress} title="searchs" data={this.state.searchData} /></Route>
          {/* <Route path="/type/:dataId" component={Details} /> */}
          <Route path="/type/:dataId" render={(routeProps) => <Details {...routeProps} setProgress={this.setProgress} />} />
          {/* <Route path={`/more/:dataId`} component={Moredetails} /> */}
           <Route path={`/more/:dataId`} render={(routeProps) => <Moredetails {...routeProps} setProgress={this.setProgress}  />} />
          <Route path="/recommendations/:dataId" render={(routeProps) => <Details {...routeProps} setProgress={this.setProgress}  />} />
          <Route path="/voice/:dataId" component={ArtistDetails}/>

          <Footer />


        </Router>
      </div>



    );



  }

  componentDidMount() {
    sessionStorage.setItem('color', 'dark')
  }




}







