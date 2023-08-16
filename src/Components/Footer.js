import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div >
        <div className="footer bg-black mt-5 text-warning ">
          <div className="row justify-content-center g-3">
            <div className='col-12 col-md-4 d-flex justify-content-center'>
              <div >
                <div className='fw-bold mb-2'>Navigation</div>
                <div>Browse Top</div>
                <div>Browse Movies</div>
                <div>Browse Popular</div>
                <div>Browse TV</div>
                <div>Browse Favorites</div>

              </div>
            </div>
            <div className='col-12 col-md-4 d-flex justify-content-center'>
              <div className='text-start'>
                <div className='fw-bold mb-2'>Connect with us</div>
                <div>
                  <i className="bi bi-facebook fs-4 me-2 "></i>Facebook
                </div>
                <div  >
                  <i className="bi bi-instagram fs-4 me-2  "></i>Instagram
                </div>
                <div  >
                  <i className="bi bi-youtube fs-4 me-2 "></i>Youtube
                </div>
                <div  >
                  <i class="bi bi-twitter fs-4 me-2 "></i>Youtube
                </div>

              </div>
            </div>
            <div className='col-12 col-md-4 d-flex justify-content-center'>
              <div >
                <div>Privacy</div>
                <div>Terms of use</div>

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
          
        </div>
      </div>
    )
  }
}
