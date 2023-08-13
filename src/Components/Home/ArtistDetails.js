import React, { Component } from 'react'
import './ArtistDetails.css'
import './Details.css'
import {NavLink} from 'react-router-dom'

export default class ArtistDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Artistdetails: ""

        }
        this.countRef = React.createRef(false);

    }

    happyBirthday = (dateString) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        const suffix = this.getDaySuffix(day);
        return `${day}${suffix} ${month} ${year}`;

    }


    getDaySuffix = (day) => {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }

    workDone = () => {
        if (this.state.Artistdetails) {
            return this.state.Artistdetails.voices.slice(0, 10).map((item) => {
                return (
                    <tr>
                        <th scope="row">1</th>
                        <td> <NavLink to={`/type/${item.anime.mal_id}`}><div><img src={`${item.anime.images.jpg.image_url}`} alt="anime" className='animepicWidth rounded-3 shadow-lg' /></div></NavLink><div className='w-50 fw-bold text-primary'>{item.anime.title}</div> </td>
                        <td><div><img src={`${item.character.images.jpg.image_url}`} alt="anime" className='rounded-1 shadow-lg' /></div><div className='fw-bold text-primary'>{item.character.name}</div><div className='text-warning'>{item.role}</div></td>

                    </tr>
                )
            })
        }

    }

    goBack = ()=>{
        this.props.history.goBack();
    }

    render() {
        console.log(this.state.Artistdetails)

        if (this.state.Artistdetails) {
            return (
                <div className="my-5 container pt-3 pt-md-4 ">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-5 text-center text-md-start">
                            <img
                                src={this.state.Artistdetails.images.jpg.image_url}

                                alt="artistpic"
                                className="img-fluid object-fit-cover rounded w-50"
                            />
                        </div>
                        <div className="col-12 col-md-7 ">
                            <div className="container-fluid ">
                                <div className="text-danger h1 mt-2 font fw-bold text-center text-md-start ">{this.state.Artistdetails.name}</div>
                                <div className="d-flex flex-wrap mt-3 fs-1 justify-evenly pt-1 font justify-content-center justify-content-md-start">
                                    <div>Birthday -</div>
                                    <div>{this.happyBirthday(this.state.Artistdetails.birthday)}</div>
                                </div>
                                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font justify-content-center justify-content-md-start">
                                    <div>About -</div>
                                    <div className="text-info">{this.state.Artistdetails.about}</div>


                                </div>
                                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font justify-content-center justify-content-md-start">
                                    <div>Member Favorites -</div>
                                    <div>{this.state.Artistdetails.favorites}</div>


                                </div>

                                <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font justify-content-center justify-content-md-start">
                                    <div >Website -</div>
                                    <div ><a href={`${this.state.Artistdetails.website_url}`}>{this.state.Artistdetails.website_url}</a></div>


                                </div>
                                {/* <div className="d-flex mt-3 mt-md-1 mt-lg-4  fs-6 flex-wrap pt-1 fw-bold font ">
                        <div>Episodes -</div>
                        <div>{this.state.details.episodes}</div>
      
      
                      </div> */}
                                {/* <div className="d-flex mt-3 mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font">
                        <div>Rank -</div>
                        <div>{this.state.details.rank}</div>
                      </div> */}
                                {/* <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font ">
                        <div>Favorites -</div>
                        <div>{this.state.details.favorites}</div>
                      </div> */}
                                {/* <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold text-warning font ">
                        <div>IMDB -</div>
                        <div>{this.state.details.score}</div>
                      </div> */}
                                {/* <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font  ">
                        <div>Popularity -</div>
                        <div>{this.state.details.popularity}</div>
                      </div> */}
                                {/* <div className="d-flex mt-3  mt-md-1 mt-lg-4 fs-6 flex-wrap pt-1 fw-bold font ">
                        <div>Year -</div>
                        <div>{this.state.details.year}</div>
                      </div> */}



                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='my-4'>

                            <div className="display-5 my-2 font1 text-center text-md-start">Voice Acting Roles</div>

                            <table className="table  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Animie</th>
                                        <th scope="col">Character</th>

                                    </tr>
                                </thead>
                                <tbody>


                                    {this.workDone()}
                                </tbody>
                            </table>
                        </div>



                    </div>







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

        console.log(this.props.match.params.dataId)

        if (!this.countRef.current) {
            const getData = async (id) => {
                console.log(id);
                const res = await fetch(`https://api.jikan.moe/v4/people/${id}/full`)
                const result = await res.json();
                this.setState({ Artistdetails: result.data })



            }

            getData(this.props.match.params.dataId);
            this.countRef.current = true;

        }

    }

}
