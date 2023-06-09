import React, { Component } from 'react'
import { NavLink} from 'react-router-dom/cjs/react-router-dom.min'



const topUrl = "https://api.jikan.moe/v4/top/anime?limit=18"

 class TopAnime extends Component {

  constructor(props) {
    super(props)
    this.state = {
      animeDetails: "",
      defaultValue: 'Top',
      type:"",
      filter:""
    }
  }

  displayAnime = () => {
    if (this.state.animeDetails) {
      return this.state.animeDetails.map((item) => {
        return (
          <>

            <div key={item.mal_id} className='col-12 col-md-4 col-lg-2'>
              <NavLink to={`/type/${item.mal_id}`}>
                <figure>
                  <img src={item.images.jpg.image_url} alt='images' className='w-100 h-75 rounded-2 ' />
                  <figcaption className="figure-caption h4 fs-6 pt-2 fw-bold text-secondary">{item.title_english}</figcaption>

                </figure>
              </NavLink>

            </div>
          </>
        )
      })

    } else {
      return (
        <div className="text-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    }
  }




  render() {
    return (




      <div className="container-fluid py-1">
        {this.props.title?<div className='text-primary mt-5 h1 fw-bold fst-italic'>{`${this.props.title[0].toUpperCase()}${this.props.title.slice(1,this.props.title.length)}`}</div>:<div className='text-danger mt-5 h1 fw-bold fst-italic'>Not specifying</div>}
        <div className="row justify-content-center gx-3 my-3">
          {this.displayAnime()}

        </div>


      </div>

    )
  }

  componentDidMount() {
    if (this.props.data) {
      
      console.log(this.props.data);
      this.setState({ animeDetails: this.props.data });
      

    } else {
      if(this.props.type){
        this.setState({type:this.props.type})
        fetch(`${topUrl}&type=${this.props.type}`, { method: "GET" })
        .then((res) => res.json())
        .then((result) => this.setState({ animeDetails: result.data }))
    }else if(this.props.filter){
      this.setState({filter:this.props.filter})
      fetch(`${topUrl}&filter=${this.props.filter}`, { method: "GET" })
      .then((res) => res.json())
      .then((result) => this.setState({ animeDetails: result.data }))

    }else{
      fetch(`${topUrl}`, { method: "GET" })
      .then((res) => res.json())
      .then((result) => this.setState({ animeDetails: result.data }))


    }
  }
}
}
export default TopAnime;

//&type=${this.props.type}&filter=${this.props.filter}