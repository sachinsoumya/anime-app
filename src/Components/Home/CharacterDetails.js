import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class CharacterDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            characterDetails: ""

        }
        this.countRef = React.createRef(false);

    }




    fetcAmimies = () => {
        // const { characterDetails } = this.state.characterDetails;

        if (this.state.characterDetails) {
            return this.state.characterDetails.map((item) => {
                return (
                    <div>
                        <div className="card my-3 w-75 mx-auto border border-white" >
                            <div class="row g-0">
                                <div class="col-md-2 ">
                                    <NavLink to={`/type/${item.anime.mal_id}`} className="text-decoration-none">
                                        <img src={`${item.anime.images.jpg.image_url}`} className="img-fluid rounded-start w-100 " alt="animeimg" />
                                    </NavLink>
                                </div>
                                <div class="col-md-10 align-self-center">
                                    <div class="card-body">
                                        <h5 class="card-title">{item.anime.title}</h5>
                                        <div class="card-text text-secondary">Role - <span className='badge text-bg-warning'>{item.role}</span> </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                )

            })

        }else{
            <div className="text-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

        }
    }

    
    render() {
        return (
            <div className='py-4'>
                <div className='my-5 h6 text-center px-2 px-md-0'><span className='text-danger fs-2 fw-bold'>{this.props.match.params.name}</span> also belongs below animies</div>

                {this.fetcAmimies()}

                <button className="btn btn-primary ms-5 mt-2 " onClick={()=>this.props.history.goBack()}><i class="bi bi-chevron-left"></i>Go Back </button>





                {/* <div className='w-100 d-flex justify-content-evenly flex-wrap'><img src="https://cdn.myanimelist.net/images/anime/1173/92110l.jpg?s=0add0435feb2bb613326a05941c61cdb" alt="anime"  className='w-25'/>
      <img src="https://cdn.myanimelist.net/images/anime/10/47347l.jpg?s=548dd4aba0c4644f8b5fbae5cfad52ea" alt="geo" className='w-25' />
      <img src="https://cdn.myanimelist.net/images/anime/1470/117265l.jpg?s=1b7025e7ed265b9b1b54c09f9a0dd2fa" alt="geo" className='w-25' />
      <img src="https://cdn.myanimelist.net/images/anime/1470/117265l.jpg?s=1b7025e7ed265b9b1b54c09f9a0dd2fa" alt="geo" className='w-25' />
      <img src="https://cdn.myanimelist.net/images/anime/1470/117265l.jpg?s=1b7025e7ed265b9b1b54c09f9a0dd2fa" alt="geo" className='w-25' /> */}
                {/* <div className="card mb-3 w-75 mx-auto border border-white" >
                    <div class="row g-0">
                        <div class="col-md-2">
                            <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=548dd4aba0c4644f8b5fbae5cfad52ea" className="img-fluid rounded-start " alt="..." />
                        </div>
                        <div class="col-md-10 align-self-center">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="card my-3 w-75 mx-auto border border-white" >
                    <div class="row g-0">
                        <div class="col-md-2 ">
                            <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=548dd4aba0c4644f8b5fbae5cfad52ea" className="img-fluid rounded-start " alt="..." />
                        </div>
                        <div class="col-md-10 align-self-center">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>

        )
    }

    componentDidMount() {

        console.log(this.props.match.params.dataId)

        if (!this.countRef.current) {
            const getData = async (id) => {
                console.log(id);
                const res = await fetch(`https://api.jikan.moe/v4/characters/${id}/anime`)
                const result = await res.json();
                this.setState({ characterDetails: result.data })



            }

            getData(this.props.match.params.dataId);
            this.countRef.current = true;

        }

    }
}
