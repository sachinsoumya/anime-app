import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import "./Details.css";
import { NavLink , withRouter } from 'react-router-dom'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

 class Character extends Component {




  constructor(props) {
    super(props)
    this.state = {
      characterList: ""

    }
    this.countRef = React.createRef(false);

  }


  fetchData = () => {
    if (this.state.characterList) {
      return this.state.characterList.map((item) => {
        return (
          <div >
            <NavLink to={`/character/${item.character.name}/${item.character.mal_id}`} className="text-decoration-none">
            <img src={`${item.character.images.jpg.image_url}`} alt="chracterspic" className='rounded-pill lamba shadow-lg' />
            </NavLink>
            <div className='w-100 text-center'>{item.character.name}</div>
          </div>
        )
      })

    }
  }


  fetchArtist = () => {
    if (this.state.characterList) {
      return this.state.characterList.map((item1) => {
        return item1.voice_actors.map((item2) => {
          if (item2.language === 'English') {
            return (
             
              <div>
                 <NavLink to={`/voice/${item2.person.mal_id}`} className="text-decoration-none">
                <img src={`${item2.person.images.jpg.image_url}`} alt="artistpic" className='rounded-3 lamba shadow-lg' />
                </NavLink>
                <div className='w-100 text-center'>{item2.person.name }</div>
              </div>
              


            )
          }else{
            return null;
          }

        })

      })
    }else{
      return <div>
        <div className="h3 text-danger">Oops data is sitll not coming</div>
      </div>
    }

  }




  render() {
    const { characterList } = this.state


    return (
      <div>
        <div className="display-5 my-2 font1">Characters</div>
        {characterList ?
          <Carousel breakPoints={breakPoints}>

            {this.fetchData()}

          </Carousel>

          : <div className="text-center">
            <div class="spinner-border  " role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>}

          <div className="display-5 my-2 font1">Voice Artists</div>

        <Carousel breakPoints={breakPoints}>
          {this.fetchArtist()}

        </Carousel>

      </div>
    )




  }

  componentDidMount() {

    if (!this.countRef.current) {
      const getData = async (id) => {
        console.log(id);
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
        const result = await res.json();
        this.setState({ characterList: result.data.slice(0, 8) })



      }

      getData(this.props.id);
      this.countRef.current = true;

    }

  }
}
export default withRouter(Character);
