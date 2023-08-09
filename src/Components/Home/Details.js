import React, { Component } from "react";
import "./Details.css";
import Review from "./Review";
import Recomanndation from "./Recomanndation";
import { withRouter } from 'react-router-dom';
import Character from "./Character";




const durl = "https://api.jikan.moe/v4/anime"


class Details extends Component {

  constructor(props) {
    super(props)
    this.state = {
      details: "",
      imageDetails: "",
      trailerDetails: "",

    }
    this.countRef = React.createRef(false);

  }

  goBack = () => {
    this.props.history.goBack();


  }





  render() {
    if (this.state.details) {
      return (
        <div className="my-5 container pt-3 pt-md-4 ">
          <div className="row">
            <div className="col-12 col-md-5">
              <img
                src={this.state.imageDetails.large_image_url}
                alt="pic"
                className="img-fluid object-fit-cover rounded"
              />
            </div>
            <div className="col-12 col-md-7">
              <div className="container-fluid ">
                <div className="text-danger h1 mt-2 font fw-bold ">{this.state.details.title_english}</div>
                <div className="d-flex flex-wrap mt-3 fs-1 justify-evenly pt-1 font ">
                  <div>Genere -</div>
                  <div>{this.state.details.genres[0].name}</div>
                </div>
                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font ">
                  <div>Rating -</div>
                  <div className="text-info">{this.state.details.rating}</div>


                </div>
                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font">
                  <div>Type -</div>
                  <div>{this.state.details.type}</div>


                </div>

                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font">
                  <div>Duration -</div>
                  <div>{this.state.details.duration}</div>


                </div>
                <div className="d-flex mt-3 mt-md-1 mt-lg-4  fs-6 flex-wrap pt-1 fw-bold font ">
                  <div>Episodes -</div>
                  <div>{this.state.details.episodes}</div>


                </div>
                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font">
                  <div>Rank -</div>
                  <div>{this.state.details.rank}</div>
                </div>
                <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font ">
                  <div>Favorites -</div>
                  <div>{this.state.details.favorites}</div>
                </div>
                <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold text-warning font ">
                  <div>IMDB -</div>
                  <div>{this.state.details.score}</div>
                </div>
                <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font  ">
                  <div>Popularity -</div>
                  <div>{this.state.details.popularity}</div>
                </div>
                <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font ">
                  <div>Year -</div>
                  <div>{this.state.details.year}</div>
                </div>



              </div>
            </div>
          </div>
          <div>

            <div className="display-5 my-2 font1">Description</div>
            <div className="my-3">
              {this.state.details.synopsis}
            </div>
            <div>
              <div className="display-5 font1">Trailer</div>
              {this.state.trailerDetails ? <center>
                <iframe
                  className="w-100  my-4 lamba"
                  src={this.state.trailerDetails.embed_url}
                  title={this.state.details.title}
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </center> : <div className="h3">No trailer available</div>}

            </div>

          </div>
          <Character id={this.props.match.params.dataId} />

          <Review id={this.props.match.params.dataId} />



          <Recomanndation id={this.props.match.params.dataId} getData={this.getData} />

          <button className="btn btn-primary" onClick={this.goBack}><i class="bi bi-chevron-left"></i>Go Back </button>


        </div>
      );

    } else {
      return (
        <div className="text-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );

    }

  }

  componentDidMount() {
    if (!this.countRef.current) {
      const getData = () => {




        this.props.setProgress(10)

        let id = this.props.match.params.dataId;

        this.props.setProgress(50)

        fetch(`${durl}/${id}`, { method: "GET" })
          .then((res) => res.json())
          .then((result) => this.setState({ details: result.data, imageDetails: result.data.images.jpg, trailerDetails: result.data.trailer }))
        this.props.setProgress(100)
      }

      getData();
      this.countRef.current = true;

    }

  }
}


export default withRouter(Details);

