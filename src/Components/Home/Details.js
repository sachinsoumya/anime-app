import React, { Component } from "react";
import "./Details.css";
import Review from "./Review";
import Recomanndation from "./Recomanndation";

// import { Route } from "react-router-dom/cjs/react-router-dom.min";

const durl = "https://api.jikan.moe/v4/anime"


export default class Details extends Component {

  constructor(props) {
    super(props)
    this.state = {
      details: "",
      imageDetails: "",
      trailerDetails: "",

    }

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
                <div className="text-danger h1 mt-2">{this.state.details.title_english}</div>
                <div className="d-flex flex-wrap mt-3 fs-1 justify-evenly pt-1">
                  <div>Genere -</div>
                  <div>{this.state.details.genres[0].name}</div>
                </div>
                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold">
                  <div>Rating -</div>
                  <div className="text-info">{this.state.details.rating}</div>


                </div>
                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold">
                  <div>Type -</div>
                  <div>{this.state.details.type}</div>


                </div>

                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold">
                  <div>Duration -</div>
                  <div>{this.state.details.duration}</div>


                </div>
                <div className="d-flex mt-3 mt-md-1 mt-lg-4  fs-6 flex-wrap pt-1 fw-bold ">
                  <div>Episodes -</div>
                  <div>{this.state.details.episodes}</div>


                </div>
                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold">
                  <div>Rank -</div>
                  <div>{this.state.details.rank}</div>
                </div>
                <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold ">
                  <div>Favorites -</div>
                  <div>{this.state.details.favorites}</div>
                </div>
                <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold text-warning ">
                  <div>IMDB -</div>
                  <div>{this.state.details.score}</div>
                </div>
                <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold ">
                  <div>Popularity -</div>
                  <div>{this.state.details.popularity}</div>
                </div>
                <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold ">
                  <div>Year -</div>
                  <div>{this.state.details.year}</div>
                </div>



              </div>
            </div>
          </div>
          <div>

            <div className="display-3 my-2">Description</div>
            <div className="mt-2">
              {this.state.details.synopsis}
            </div>
            <div>
              <div className="display-4">Trailer</div>
              {this.state.trailerDetails ? <center>
                <iframe
                  className="w-100  my-5 lamba"
                  src={this.state.trailerDetails.embed_url}
                  title={this.state.details.title}
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </center> : <div className="h3">No trailer available</div>}

            </div>
            {/* <center>
              <div class="btn btn-primary btn-lg"><a href="https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood" class="text-white text-decoration-none">Watch all episodes</a></div>
            </center> */}
          </div>

          <Review id={this.props.match.params.dataId} />
         


          <Recomanndation id={this.props.match.params.dataId} getData={this.getData} />


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

    let id = this.props.match.params.dataId;

    fetch(`${durl}/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((result) => this.setState({ details: result.data, imageDetails: result.data.images.jpg, trailerDetails: result.data.trailer }))

  }

}

