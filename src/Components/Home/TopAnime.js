import React, { Component } from 'react'
// import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { NavLink, withRouter } from 'react-router-dom'



const topUrl = "https://api.jikan.moe/v4/top/anime?limit=18"

class TopAnime extends Component {

  constructor(props) {
    super(props)
    this.state = {
      animeDetails: "",
      defaultValue: 'Top',
      type: "",
      filter: ""
    }
    this.countRef = React.createRef(false);
  }


  goBack = () => {
    this.props.history.push('/');
  }



  displayAnime = () => {
    if (this.state.animeDetails) {
      if (this.state.animeDetails.length) {
        return this.state.animeDetails.map((item) => {
          return (
            <React.Fragment key={item.mal_id}>

              <div  className='col-12 col-md-4 col-lg-2' >
                <NavLink to={`/type/${item.mal_id}`} className="text-decoration-none">
                  <div className='position-relative'>
                    <figure>
                      <img src={item.images.jpg.image_url} alt='images' className='w-100 h-75 rounded-2 ' />
                      <figcaption className="figure-caption h4 fs-6 pt-2 fw-bold text-primary text-center text-md-start  ">{item.title_english}</figcaption>
                      <div className='position-absolute top-0 end-0'><span className="badge rounded-pill text-bg-warning"><i className="bi bi-star-fill mx-1"></i>{item.score}</span></div>


                    </figure>
                  </div>
                </NavLink>

              </div>
            </React.Fragment>
          )
        })
      }
      else {
        return (
          <div className='text-danger text-center border border-danger w-50 fs-1 p-4 display-1 fw-bold' >
            <div >No Animes Found</div>
            <div><i className="bi bi-emoji-frown fs-1"></i></div>
          </div>
        )
      }

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
        {this.props.title ? <div className='text-primary mt-5 h1 fw-bold fst-italic'>{`${this.props.title[0].toUpperCase()}${this.props.title.slice(1, this.props.title.length)}`}</div> : <div className='text-danger mt-5 h1 fw-bold fst-italic'>Not specifying</div>}
        <div className="row justify-content-center gx-3 my-3" >
          {this.displayAnime()}

        </div>

        <button className="btn btn-primary" onClick={this.goBack}><i className="bi bi-chevron-left"></i>Go Home</button>


      </div>

    )
  }

  componentDidMount() {
    if (!this.countRef.current) {
      const getData = () => {
        // console.log(this.props.setProgress);

        this.props.setProgress(10);

        if (this.props.data) {
          this.props.setProgress(50);
          console.log(this.props.data);
          this.setState({ animeDetails: this.props.data });
          this.props.setProgress(100);



        } else {
          if (this.props.type) {

            this.setState({ type: this.props.type })
            this.props.setProgress(50);

            fetch(`${topUrl}&type=${this.props.type}`, { method: "GET" })

              .then((res) => res.json())
              .then((result) => this.setState({ animeDetails: result.data }))
            this.props.setProgress(100)



          } else if (this.props.filter) {
            this.setState({ filter: this.props.filter })
            this.props.setProgress(50);
            fetch(`${topUrl}&filter=${this.props.filter}`, { method: "GET" })
              .then((res) => res.json())
              .then((result) => this.setState({ animeDetails: result.data }))

            this.props.setProgress(100);


          } else {
            this.props.setProgress(50);
            fetch(`${topUrl}`, { method: "GET" })
              .then((res) => res.json())
              .then((result) => this.setState({ animeDetails: result.data }))
            this.props.setProgress(100);


          }



        }


      }
      getData();
      this.countRef.current = true;

    }

  }
}
export default withRouter(TopAnime);

//&type=${this.props.type}&filter=${this.props.filter}