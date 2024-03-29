import React, { Component } from 'react';
import './Details.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


// const data={};


// const options={}

export default class Statistics extends Component {


    constructor(props) {
        super(props)
        this.state = {
            getStatistics: "" ,
            counter:false

        }
        this.countRef = React.createRef(false);

    }


    setCounter=(value)=>{
        this.setState({counter:value})
    }





    render() {




        return (
            <div className='my-5'> 
                <div className='font1 display-5 my-1 my-md-4'>Statistics</div>
                <div className='w-100 bg-body-tertiary p-3 text-center rounded my-3 '>

                   {this.state.getStatistics ? <div className="row justify-content-center align-items-center g-3">

                         <div className="col-6 col-md-4 col-lg-2">

                            <div className="card shadow-lg" style={{backgroundColor:'aqua'}}>
                                <div className="card-header fw-bold">
                                    Total
                                </div>
                                <ScrollTrigger onEnter={()=>this.setCounter(true)} onExit={()=>this.setCounter(false)}>
                                <div className="card-body">
                                    <div className=" mb-0 fs-2 fw-semibold">
                                        <div className='fs-4'>{this.state.counter && <CountUp start={0} end={`${this.state.getStatistics.total}`} duration={2} delay={0}/>}</div>
                                       
                                    </div>
                                </div>
                                </ScrollTrigger>
                            </div>

                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                        <div className="card  shadow-lg" style={{backgroundColor:'aqua'}}>
                                <div className="card-header fw-bold">
                                <i className="bi bi-eye-fill mx-1"></i> Watching
                                </div>
                                <ScrollTrigger onEnter={()=>this.setCounter(true)} onExit={()=>this.setCounter(false)}>
                                <div className="card-body">
                                    <div className=" mb-0 fs-2 fw-semibold">
                                    <div className='fs-4'>{this.state.counter && <CountUp start={0} end={`${this.state.getStatistics.watching}`} duration={2} delay={0}/>}</div>
                                       
                                    </div>
                                </div>
                                </ScrollTrigger>
                                
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                        <div className="card  shadow-lg" style={{backgroundColor:'aqua'}}>
                                <div className="card-header fw-bold">
                                <i className="bi bi-hand-thumbs-up-fill mx-1"></i> Completed
                                </div>
                                <ScrollTrigger onEnter={()=>this.setCounter(true)} onExit={()=>this.setCounter(false)}>
                                <div className="card-body">
                                    <div className=" mb-0 fs-2 fw-semibold">
                                    <div className='fs-4'>{this.state.counter && <CountUp start={0} end={`${this.state.getStatistics.completed}`} duration={2} delay={0}/>}</div>
                                       
                                    </div>
                                </div>
                                </ScrollTrigger>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                        <div className="card  shadow-lg" style={{backgroundColor:'aqua'}}>
                                <div className="card-header fw-bold">
                                <i className="bi bi-pause-circle-fill mx-1"></i>On hold
                                </div>

                                <ScrollTrigger onEnter={()=>this.setCounter(true)} onExit={()=>this.setCounter(false)}>
                                <div className="card-body">
                                    <div className=" mb-0 fs-2 fw-semibold">
                                    <div className='fs-4'>{this.state.counter && <CountUp start={0} end={`${this.state.getStatistics.on_hold}`} duration={2} delay={0}/>}</div>
                                       
                                    </div>
                                </div>
                                </ScrollTrigger>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                        <div className="card  shadow-lg" style={{backgroundColor:'aqua'}}>
                                <div className="card-header fw-bold">
                                <i className="bi bi-eye-slash-fill mx-1"></i>Dropped
                                </div>
                                <ScrollTrigger onEnter={()=>this.setCounter(true)} onExit={()=>this.setCounter(false)}>
                                <div className="card-body">
                                    <div className=" mb-0 fs-2 fw-semibold">
                                    <div className='fs-4'>{this.state.counter && <CountUp start={0} end={`${this.state.getStatistics.dropped}`} duration={2} delay={0}/>}</div>
                                       
                                    </div>
                                </div>
                                </ScrollTrigger>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                        <div className="card shadow-lg" style={{backgroundColor:'aqua'}}>
                                <div className="card-header fw-bold text-start text-md-center mx-1 mx-md-0">
                               <i className="bi bi-bookmark-plus-fill ms-0 ms-md-1"></i>Watch later
                                    
                                </div>
                                <ScrollTrigger onEnter={()=>this.setCounter(true)} onExit={()=>this.setCounter(false)}>

                                <div className="card-body">
                                    <div className=" mb-0 fs-2 fw-semibold">
                                    <div className='fs-4'>{this.state.counter && <CountUp start={0} end={`${this.state.getStatistics.plan_to_watch}`} duration={2} delay={0}/>}</div>
                                       
                                       
                                    </div>
                                </div>
                                </ScrollTrigger>
                            </div>
                        </div>
                    </div>: <div className="text-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

                </div>









            </div>
        )
    }

    componentDidMount() {



        if (!this.countRef.current) {
            const getData = async (id) => {
                // console.log(id);
                try{
                const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/statistics`)
                const result = await res.json();
                this.setState({ getStatistics: result.data })
                }catch(error){
                    alert(`Opps !..statictics ${error.message} check your internate connection or contact to owner`)
                }
                // console.log(result);



            }

            getData(this.props.id);
            this.countRef.current = true;

        }

    }
}
