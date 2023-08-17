import React from 'react'
import './Carau.css' ;
import { useEffect, useRef } from 'react'
import { useState } from 'react';

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


const turl = "https://api.jikan.moe/v4/top/anime?limit=4&filter=bypopularity"

export default function Carau()  {

    const [slideAnime,setSlideAnime] = useState("");
    const isMountedRef = useRef(false);

    useEffect(() => {
        if (!isMountedRef.current) {
            const getData = () => {
                
                fetch(turl)
                    .then((res) => res.json())
                    .then((result) => setSlideAnime(result.data))
                    .catch((err) => alert(`Oops - slider ${err.message} check your internate connection or contact to owner`));

            }
            getData();
            isMountedRef.current = true;
        }

    }, []);





    

    const caraItem =()=>{
        // console.log(this.state.slideAnime)
        if (slideAnime) {
            return slideAnime.map((item) => {
                return (
                    <React.Fragment key={item.mal_id}>
                        <NavLink to={`/type/${item.mal_id}`} className="text-decoration-none">
                            <div className="carousel-item active">
                                <img src={item.images.jpg.image_url} className="d-block w-100 carasel object-fit-cover" alt="sliderimage" />
                                <div className="carousel-caption d-none d-md-block">

                                    <p className='text-danger fw-bold'>{item.title_english}</p>
                                    <div className='h5 text-warning fw-bold'>IMDB - {item.score}</div>
                                </div>
                            </div>
                        </NavLink>

                    </React.Fragment>
                )

            })
        } else {
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
    }




        return (
            <div className='my-5 h1  py-2'>
                <div id="carouselExampleRide" className="carousel slide  " data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner  ">
                        {/* <div class="carousel-item active">
                            <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" class="d-block w-100 carasel object-fit-cover" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.myanimelist.net/images/anime/9/9453l.jpg" class="d-block w-100 carasel object-fit-cover" alt="..."  />
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn.myanimelist.net/images/anime/1208/94745.jpg" class="d-block w-100 carasel object-fit-cover" alt="..." />
                        </div> */}


                        {caraItem()}


                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                





            </div>
        )
    }

    // makeAPICall(){
    //     if (!this.state.apiCalled) {
    //         fetch(`${turl}`, { method: 'GET' })
    //             .then((res) => res.json())
    //             .then((result) => this.setState({slideAnime:result.data , apiCalled:true} ))

    //     }
        
    // }

