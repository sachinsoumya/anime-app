import React  from 'react'

import Carousel from 'react-elastic-carousel';

import { useEffect, useRef } from 'react'
import { useState } from 'react';

const vurl = "https://api.jikan.moe/v4/top/anime?limit=7"

export default function Top () {

  const [animesList,setAnimesList] = useState("");

  
    const isMountedRef = useRef(false);

    useEffect(() => {
      
     
      if (!isMountedRef.current) {
      
        const getData = ()=>{
              fetch(`${vurl}`)
                    .then((res) => res.json())
                    .then((result) => setAnimesList(result.data))
                    .catch((err) => console.log(err.message));


            }
            getData();
            isMountedRef.current = true;
           
           
        
       
      
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
                        <img src={item.images.jpg.image_url} alt="slide" className='rounded' />
                       
                        </div>

                )
            })
        }

    }

    
  
    return (
      
      <div>
        <div className='text-primary my-2'>Top</div>
        <Carousel breakPoints={breakPoints}>
            
            {fetchData()}
            <button className='btn btn-secondary'>More</button>

        </Carousel>

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
