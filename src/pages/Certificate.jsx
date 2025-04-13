import React from 'react'
import website from '../assets/WebsiteParticipant.png'
import PaperPresentation from '../assets/PaperPresentation.png'
import Kabbadi from '../assets/Kabbadi.png'
import Cricket from '../assets/Cricket.png'

const Certificate = () => {
  return (
<div id="certificate-id" className="pt-5">
  <div className="mt-5">
    <p
      className="text-center fw-bold fs-2"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      My <span className="text-warning">Certificates</span>
    </p>
  </div>

  <div className="row pt-3 gy-4 justify-content-center">
    {/* Certificate 1 */}
    <div id='cert-img'
      className="col-12 col-sm-6 col-lg-4 text-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img
        className="rounded img-fluid w-100"
        src={website}
        alt="Website"
        style={{ maxWidth: "360px", height: "250px", objectFit: "cover" }}
      />
    </div>
    {/* Certificate 2 */}
    <div id='cert-img'
      className="col-12 col-sm-6 col-lg-4 text-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img
        className="rounded img-fluid w-100"
        src={PaperPresentation}
        alt="Flutter"
        style={{ maxWidth: "360px", height: "250px", objectFit: "cover" }}
      />
    </div>
    {/* Certificate 3 */}
    <div id='cert-img'
      className="col-12 col-sm-6 col-lg-4 text-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img
        className="rounded img-fluid w-100"
        src={Kabbadi}
        alt="R-Language"
        style={{ maxWidth: "360px", height: "250px", objectFit: "cover" }}
      />
    </div>
    {/* Certificate 4 */}
    <div id='cert-img'
      className="col-12 col-sm-6 col-lg-3 text-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img className="rounded img-fluid" src={Cricket} alt="Speak" />
    </div>
  </div>
</div>


  )
}

export default Certificate