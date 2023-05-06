import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const topUrl = "https://api.jikan.moe/v4/top/anime?limit=18"

export default class TopAnime extends Component {

  constructor(props) {
    super(props)
    this.state = {
      animeDetails: "",
      defaultValue: 'Top'
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
                  <img src={item.images.jpg.image_url} alt='images' className='w-100 h-75' />
                  <figcaption className="figure-caption h4 fs-6 pt-2 fw-bold">{item.title_english}</figcaption>

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




      <div className="container-fluid">
        <div className='text-primary mt-5 h1 fw-bold fst-italic'>{this.props.type}</div>
        <div className="row justify-content-center gx-3 my-3">
          {this.displayAnime()}

        </div>


      </div>

    )
  }

  componentDidMount() {
    fetch(`${topUrl}&type=${this.props.type}&filter=${this.props.filter}`, { method: "GET" })
      .then((res) => res.json())
      .then((result) => this.setState({ animeDetails: result.data }))




  }
}
