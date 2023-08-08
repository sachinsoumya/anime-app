import React, { Component } from 'react'
import "./Details.css";
const rurl = "https://api.jikan.moe/v4/anime"

export default class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviewDetails: ""
        }
        this.countRef = React.createRef(false);
    }
    arrReview = () => {
        if (this.state.reviewDetails) {


            if (this.state.reviewDetails.length > 0) {
                let newArr = this.state.reviewDetails.slice(0, 4);
                return newArr.map((item) => {
                    return (
                        <>
                            <div class="col-md-1 col-10 " key={item.mal_id}>
                                <img
                                    class="ms-md-4 ms-0 object-fit-cover w-50 img-fluid "
                                    src={item.user.images.jpg.image_url}
                                    alt="Generic placeholder"
                                />
                            </div>
                            <div class="col-md-11 col-12">
                                <h5 class="mt-0 text-info">{item.user.username}</h5>
                                <div>{item.review.slice(0, 200)}</div>
                                <span className=' mx-0'>
                                    <a class="btn btn-secondary btn-sm my-md-1 my-2" data-bs-toggle="collapse" href={`#${item.mal_id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Read full review
                                    </a>

                                </span>
                                <div class="collapse w-100" id={item.mal_id}>
                                    {sessionStorage.getItem('color') === 'dark' ? <div className="card card-body bg-white">
                                        {item.review.slice(0, 750)}
                                    </div> : <div className='card card-body bg-dark' >{item.review.slice(0, 750)}</div>}
                                </div>
                            </div>

                        </>

                    )
                })
            } else {
                return (

                    <div className='h3 text-danger'>No review yet</div>
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
            <div>
                <div className="display-5 font1">Reviews</div>
                <div className="row my-4">
                    {this.arrReview()}

                </div>



            </div>
        )
    }
    componentDidMount() {
        if (!this.countRef.current) {
            const getData = () => {
                fetch(`${rurl}/${this.props.id}/reviews`, { method: "GET" })
                    .then((res) => res.json())
                    .then((result) => this.setState({ reviewDetails: result.data }));


            }

            getData();
            this.countRef.current=true;
            
        }
    }
}
