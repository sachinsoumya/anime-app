import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div >
        <div className="footer bg-black mt-5 text-secondary">
          <div className="row justify-content-center g-3 pb-2">
            <div className='col-12 col-md-4 d-flex justify-content-center'>
              <div >
                <div className='fw-bold mb-2 text-warning'>Navigation</div>
                <NavLink to='/top' className=' link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover '><div>Browse Top</div></NavLink>
                <NavLink to='/movies' className=' link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><div>Browse Movies</div></NavLink>
                <NavLink to='/popular' className=' link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><div>Browse Popular</div></NavLink>
                <NavLink to='/series' className=' link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><div>Browse TV</div></NavLink>
                <NavLink to='/favorite' className=' link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'><div>Browse Favorites</div></NavLink>

             

              </div>
              
            </div>
            <hr className="border border-secondary border-1 opacity-50 w-100 d-md-none"></hr>
            <div className='col-12 col-md-4 d-flex justify-content-center'>
              <div className='text-start'>
                <div className='fw-bold mb-2 text-warning'>Connect with us</div>
                <div>
                  <a href="https://www.facebook.com/" className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover "> <i className="bi bi-facebook fs-4 me-2"></i>Facebook</a>
                </div>
                <div  >
                  <a href="https://www.instagram.com/sachinsoumya/" className='link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover '><i className="bi bi-instagram fs-4 me-2 "></i>Instagram</a>
                </div>
                <div  >
                  <a href="https://www.youtube.com/channel/UC3WgqcI1eJaLSfg2h6fLTyg" className='link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover '><i className="bi bi-youtube fs-4 me-2 "></i>Youtube</a>
                </div>
                <div  >
                  <a href="https://twitter.com/SoumyaSachinPa1" className='link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover '><i className="bi bi-twitter fs-4 me-2"></i>Twitter</a>
                </div>

              </div>
            </div>
            <hr className="border border-secondary border-1 opacity-50 w-100 d-md-none"></hr>
            <div className='col-12 col-md-4 d-flex justify-content-center'>
              <div >
                <div className='fw-bold mb-2 text-warning'>Animick</div>
                <NavLink to='/' className=' link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover '><div><i className="bi bi-mortarboard-fill fs-4 me-2 text-danger"></i>Start a free trial</div></NavLink>
                <div>About</div>
                <div>Terms of use</div>
                <div>Help/FAQ</div>
                <div>Privacy Policy</div>
                <div>Jobs</div>

              </div>
            </div>
           

          </div>
          {/* <div className="d-flex  justify-content-center">
            <div>
              <i className="bi bi-facebook fs-2 "></i>
            </div>
            <div>
              <i className="bi bi-instagram fs-2 ms-3 "></i>
            </div>
            <div>
              <i className="bi bi-youtube fs-2 ms-3"></i>

            </div>

          </div> */}

        
        <div className='bg-dark text-center text-white py-1'><i className="bi bi-c-circle me-1"></i>copyright 2023 Animick | Sachin | India</div>
        </div>


      </div>
    )
  }
}
