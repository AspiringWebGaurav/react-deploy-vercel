import React from 'react'
import '../assets/style/testimonial.css'
import '../assets/style/Responsiveness.css'
// import '../assets/style/animation.css'
import kulkarni from '../assets/images/kulkarni.png'
import shivam from '../assets/images/shivam_pandey.png'
import shape5 from '../assets/images/shape-5.png'

const Testimonial = () => {
  return (
    <div className="testi-main tnb">
      <div className="container">
        <div className="small-heading">
          <h4>Testimonial</h4>
        </div>
        <div className="big-heading">
          <h5>Our Client Says</h5>
        </div>
        <div className="testimonials">
          <div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <p>"Excellent customer service , On time deployment of Projects."</p>
                  <img src={kulkarni} alt="Raghunandan Kulkarni" />
                  <h4>Raghunandan Kulkarni</h4>
                </div>
              </div>
              {/* col 6 */}
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <p>"Excellent development team. They put extra efforts in completing the tasks unlike others who just complain about timings and budget."</p>
                  <img src={shivam}alt="Shivam Pandey" />
                  <h4>Shivam Pandey</h4>
                </div>
              </div>
              {/* col 6 */}
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <p>"Dedicated web, android app development team."</p>
                  <img src={kulkarni}  alt="Tejas Kothari" />
                  <h4>Tejas Kothari</h4>
                </div>
              </div>
              {/* col 6 */}
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="testi-text">
                  <p>"Excellent development team. They put extra efforts in completing the tasks unlike others who just complain about timings and budget."</p>
                  <img src={shivam} alt="Shivam Pandey" />
                  <h4>Shivam Pandey</h4>
                </div>
              </div>
              {/* col 6 */}
            </div>
          </div>
        </div>
      </div>
      <div className="star3">
        <img src={shape5} alt="Star" />
      </div>
    </div>

  )
}

export default Testimonial