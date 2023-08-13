import React, { Component } from 'react'
import './Details.css'
import { withRouter, NavLink } from 'react-router-dom/cjs/react-router-dom.min'
const nurl = "https://api.jikan.moe/v4/anime"

class Recomanndation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendations: ""
        }
        this.countRef = React.createRef(false);
    }





    getRecommendation = () => {
        if (this.state.recommendations) {


            if (this.state.recommendations.length > 0) {
                return this.state.recommendations.map((item) => {
                    return (

                        <>


                            <div className="col-4 col-md-3 col-lg-2 my-3 my-lg-0 " key={item.entry.mal_id} >
                                <NavLink to={`/more/${item.entry.mal_id}`} className="text-decoration-none" >
                                    <img src={item.entry.images.jpg.image_url} alt="pic" className="w-75 rounded-2" />
                                    <div className="h6 text-primary ">{item.entry.title}</div>
                                </NavLink>

                            </div>


                        </>

                    )
                })

            } else {
                return (
                    <div className="h3 text-danger">No similar content</div>
                );

            }
        } else {
            return (

                <div className="text-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            )
        }
    }



    render() {

        return (
            <div className='my-2'>
                <div className='display-5 my-1 my-md-4 font1'>Similar</div>
                <div className="row ps-3">
                    {this.getRecommendation()}
                </div>

            </div>
        )
    }
    componentDidMount() {
        if (!this.countRef.current) {
            const getData = () => {




                fetch(`${nurl}/${this.props.id}/recommendations`)
                    .then((res) => res.json())
                    .then((result) => result.data.length > 12 ? this.setState({ recommendations: result.data.slice(0, 12) }) : this.setState({ recommendations: result.data }));
            }
            getData();
            this.countRef.current=true;

        }
    }
}
export default withRouter(Recomanndation);
