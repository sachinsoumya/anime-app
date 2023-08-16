import React, { Component } from 'react'
import "./Details.css";
import { withRouter, NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const nurl = "https://api.jikan.moe/v4/anime"


class More extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recommendations: ""
        }

        this.countRef = React.createRef(false);
    }





    getRecommendation = () => {
        if (this.state.recommendations) {


            if (this.state.recommendations) {
                return this.state.recommendations.map((item) => {
                    return (

                        <React.Fragment key={item.entry.mal_id} >


                            <div className="col-4 col-md-3 col-lg-2 my-3 my-lg-0 " >
                                <NavLink to={`/recommendations/${item.entry.mal_id}`} className="text-decoration-none " >
                                    <img src={item.entry.images.jpg.image_url} alt="pic" className="w-75 rounded-2" />
                                    <div className="h6 text-primary">{item.entry.title}</div>
                                </NavLink>

                            </div>


                        </React.Fragment>

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
        } else {
            return (
                <div className="h3 text-danger">No similar content</div>
            )

        }
    }

    render() {

        return (
            <div className='ny-2'>
                <div className='display-5 my-3 font1'>Similar</div>
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
                    .then((result) => result.data.length > 12 ? this.setState({ recommendations: result.data.slice(0, 12) }) : this.setState({ recommendations: result.data }))
                    .catch((error)=>alert(`Opps!.. similar ${error.message} check your internate connection or contact to owner`))
            }
            setTimeout(getData,2000);
            this.countRef.current=true;
        }
    }
}
export default withRouter(More);
