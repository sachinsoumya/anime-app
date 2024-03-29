/* eslint-disable no-undef */
import React from 'react'

import Carousel from 'react-elastic-carousel';

import { useEffect, useRef } from 'react'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const vurl = "https://api.jikan.moe/v4/top/anime?limit=7&type=tv"

export default function Tv() {


    const [animesList, setAnimesList] = useState("");


    const isMountedRef = useRef(false);


    useEffect(() => {


        if (!isMountedRef.current) {

            const getData = () => {
                // eslint-disable-next-line no-undef
                fetch(`${vurl}`)
                    .then((res) => res.json())
                    .then((result) => setAnimesList(result.data))
                    .catch((error) => alert(`Oops - Tv ${error.message} check your internate connection or contact to owner`));


            }
            getData();
            isMountedRef.current = true;




        }

    }, []);




    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    const fetchData = () => {

        if (animesList) {
            return animesList.map((item) => {
                return (
                    <div key={item.mal_id}>
                        <NavLink to={`/type/${item.mal_id}`} className="text-decoration-none">
                            <div className='position-relative'>

                                <img src={item.images.jpg.image_url} alt="slide" className='rounded' />
                                <div className="position-absolute top-0 end-0"><span className="badge rounded-pill text-bg-warning "><i className="bi bi-star-fill mx-1"></i>{item.score}</span></div>
                            </div>

                        </NavLink>

                    </div>

                )
            })
        }

    }



    return (

        <div>
            <div className=' my-3 fs-2 fw-bold mx-0 mx-md-4  text-center text-md-start'>TV SHOWS</div>
            {animesList ?
                <Carousel breakPoints={breakPoints}>

                    {fetchData()}
                    <NavLink to="/series"><button className='btn btn-secondary'>More <i className="bi bi-arrow-right"></i></button></NavLink>

                </Carousel>
                : <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

        </div>
    )
}

