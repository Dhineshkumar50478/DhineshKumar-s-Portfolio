import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  return (
    <div id='contact-id' className='pt-5'>
        <p className='fs-2 text-center fw-bold mt-5' data-aos="fade-down" data-aos-duration="1000">Let's <span className='text-warning'>Touch Together</span></p>
        


<form action="" className="container pt-4">
  <div
    id="form-id"
    className="row justify-content-center"
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1000"
  >
    {/* Row 1: Name and Email */}
    <div className="row justify-content-center mb-3">
      <div className="col-12 col-md-6 col-lg-5 d-flex flex-column flex-md-row justify-content-center gap-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Name"
          required
          className="form-control px-3 py-2"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Your Email Id"
          required
          className="form-control px-3 py-2"
        />
      </div>
    </div>

    {/* Row 2: Phone Number and Subject */}
    <div className="row justify-content-center mb-3">
      <div className="col-12 col-md-6 col-lg-5 d-flex flex-column flex-md-row justify-content-center gap-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Phone Number"
          required
          className="form-control px-3 py-2"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Subject of Email"
          required
          className="form-control px-3 py-2"
        />
      </div>
    </div>

    {/* Row 3: Message */}
    <div className="row justify-content-center mb-3">
      <div className="col-12 col-md-8 col-lg-6">
        <textarea
          name=""
          id="input-msg"
          placeholder="Your Message Here.."
          className="form-control px-3 pt-2 pb-5"
          required
        ></textarea>
      </div>
    </div>

    {/* Row 4: Submit Button */}
    <div className="row justify-content-center">
      <div className="col-12 col-md-4 col-lg-3">
        <button
          className="btn btn-warning w-100 text-white fw-semibold"
          id="contact-btn"
        >
          Contact Me
        </button>
      </div>
    </div>
  </div>
</form>



    </div>
  )
}

export default Contact
