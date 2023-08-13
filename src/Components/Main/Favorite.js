import React  from 'react'

import Carousel from 'react-elastic-carousel';

import { useEffect, useRef } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const vurl = "https://api.jikan.moe/v4/top/anime?limit=15&filter=favorite"

export default function Top () {

  const [animesList,setAnimesList] = useState("");

  
    const isMountedRef = useRef(false);

    useEffect(() => {
      
     
      if (!isMountedRef.current) {
      
        const getData = ()=>{

          fetch(`${vurl}`)
                    .then((res) => res.json())
                    .then((result) => setAnimesList(result.data.slice(7,14)))
                    .catch((err) => console.log(err.message));


            }
            setTimeout(getData,3000);
           
            isMountedRef.current = true;

            // return () => clearTimeout(timeoutId);
            
           
           
        
       
      
          }

    }, []);


    

    const  breakPoints=[
        {width:1 , itemsToShow:1} ,
        {width:550 , itemsToShow:2 },
        {width:768 , itemsToShow:3 },
        {width:1200 , itemsToShow:4 }
    ];

    const fetchData =()=>{
    
        if(animesList){
            return animesList.map((item)=>{
                return(
                    <div>
                      <NavLink to={`/type/${item.mal_id}`} className="text-decoration-none">
                      <div className='position-relative'>
                        <img src={item.images.jpg.image_url} alt="slide" className='rounded' />
                        <div className="position-absolute top-0 end-0"><span class="badge rounded-pill text-bg-warning"><i class="bi bi-star-fill mx-1"></i>{item.score}</span></div>
                        </div>
                        </NavLink>
                       
                        </div>

                )
            })
        }

    }

    
  
    return (
      
      <div>
        <div className=' my-3 fs-2 fw-bold mx-2 text-center text-md-start'>FAVORITES</div>
        
        {animesList ?<Carousel breakPoints={breakPoints}>
            
            {fetchData()}
            <button className='btn btn-secondary'>More</button>

        </Carousel>: <div className="text-center">
                    <div class="spinner-border  " role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>}

      </div>
    )
  }





//   componentDidMount(){

//     if(this.props.type){
//         fetch(`https://api.jikan.moe/v4/top/anime?limit=7&&type=${this.props.type}` , {method:'GET'})
//         .then((res)=>res.json())
//         .then((result)=>this.setState({animesList:result.data}));

//     }else{

    





//     fetch(`https://api.jikan.moe/v4/top/anime?limit=7` , {method:'GET'})
//     .then((res)=>res.json())
//     .then((result)=>this.setState({animesList:result.data}));
//   }
// }
