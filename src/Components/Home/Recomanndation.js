import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
const nurl = "https://api.jikan.moe/v4/anime"

export default class Recomanndation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendations: ""
        }
    }

    toStoreData=(id)=>{
        sessionStorage.setItem('id', id)
    }
    
    

    getRecommendation = () => {
        if (this.state.recommendations) {
            return this.state.recommendations.map((item) => {
                return (

                    <>


                        <div className="col-4 col-md-3 col-lg-2 my-2 my-lg-0" key={item.entry.mal_id} >
                            <NavLink to={`/details/recommendations${item.entry.mal_id}/${item.entry.mal_id}`}>
                                <img src={item.entry.images.jpg.image_url} alt="pic" className="w-75" onClick={()=>this.toStoreData(item.entry.mal_id)}/>
                            </NavLink>

                        </div>


                    </>

                )
            })

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

    render() {

        return (
            <div>
                <div className="row">
                    {this.getRecommendation()}
                </div>

            </div>
        )
    }
    componentDidMount() {
        fetch(`${nurl}/${this.props.id}/recommendations`)
            .then((res) => res.json())
            .then((result) => result.data.length > 12 ? this.setState({ recommendations: result.data.slice(0, 12) }) : this.setState({ recommendations: result.data }));
    }
}
