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
                    <div key={item.mal_id}>
                        <div className="card my-3 w-75 mx-auto border border-white" >
                            <div className="row g-0">
                                <div className="col-md-2 ">
                                    <NavLink to={`/type/${item.anime.mal_id}`} className="text-decoration-none">
                                        <img src={`${item.anime.images.jpg.image_url}`} className="img-fluid rounded-start w-100 " alt="animeimg" />
                                    </NavLink>
                                </div>
                                <div className="col-md-10 align-self-center">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.anime.title}</h5>
                                        <div className="card-text text-secondary">Role - <span className='badge text-bg-warning'>{item.role}</span> </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                )

            })

        } else {
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

                <button className="btn btn-primary ms-5 mt-2 " onClick={() => this.props.history.goBack()}><i className="bi bi-chevron-left"></i>Go Back </button>







            </div>

        )
    }

    componentDidMount() {

        // console.log(this.props.match.params.dataId)

        if (!this.countRef.current) {

            const getData = async (id) => {
                try {
                    this.props.setProgress(10)
                    // console.log(id);
                    const res = await fetch(`https://api.jikan.moe/v4/characters/${id}/anime`)
                    this.props.setProgress(50)
                    const result = await res.json();
                    this.props.setProgress(70)
                    this.setState({ characterDetails: result.data })
                    this.props.setProgress(100)

                } catch (error) {
                    console.log('Error fetching data:', error.message)
                }






            }

            getData(this.props.match.params.dataId);
            this.countRef.current = true;

        }

    }
}
