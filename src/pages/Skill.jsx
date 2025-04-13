import React from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import tailwind from '../assets/tailwind_CSS.svg'
import bootstrap from '../assets/bootstrap-5.svg'
import reactnative from '../assets/react.svg'
import c from '../assets/c.svg'
import python from '../assets/python.svg'
import mongodb from '../assets/mongodb.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Skill = () => {
  return (
    

<div id="skill-id" className="pt-5">
  <div className="container-sm mt-5">
    <div>
      <p
        className="fs-2 fw-bold text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        My <span className="text-warning">Speciality</span>
      </p>

      {/* Frontend Tools Section */}
      <p
        className="fw-bold fs-4"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Frontend Tools
      </p>
      <div className="row gy-4 pt-3 gap-3">
        <div
          id="html-hover"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={html} alt="HTML" className="" width={100} height={100} />
          <p className="fw-bold fs-5">HTML 5</p>
        </div>
        <div
          id="hover-div"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={css} alt="CSS" className="" width={100} height={100} />
          <p className="fw-bold fs-5">CSS 3</p>
        </div>
        
        <div
          id="hover-div"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src={tailwind}
            alt="Tailwind CSS"
            className=""
            width={100}
            height={100}
          />
          <p className="fw-bold fs-5">Tailwind CSS</p>
        </div>
        <div
          id="hover-div"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src={bootstrap}
            alt="Bootstrap"
            className=""
            width={100}
            height={100}
          />
          <p className="fw-bold fs-5">Bootstrap 5</p>
        </div>
        <div
          id="hover-div"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src={reactnative}
            alt="React"
            className=""
            width={100}
            height={100}
          />
          <p className="fw-bold fs-5">React</p>
        </div>
      </div>

      {/* Programming Languages Section */}
      <p
        className="fw-bold fs-4 mt-5"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Programming Languages
      </p>
      <div className="row gy-4 pt-3 gap-3">
      <div
          id="hover-div"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={js} alt="JavaScript" className="" width={100} height={100} />
          <p className="fw-bold fs-5">JavaScript</p>
        </div>
        <div
          id="hover-div"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={python} alt="Python" className="" width={100} height={100} />
          <p className="fw-bold fs-5">Python</p>
        </div>
        <div
          id="hover-div"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={c} alt="C" className="" width={100} height={100} />
          <p className="fw-bold fs-5">C</p>
        </div>
       
      </div>

      {/* Databases Section */}
      <p
        className="fw-bold fs-4 mt-5"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Databases
      </p>
      <div className="row gy-4 pt-3 gap-3">
        <div
          id="hover-div"
          className="col-12 col-sm-6 col-md-4 col-lg-2 text-center rounded-3 pt-3 shadow"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img src={mongodb} alt="MongoDB" className="" width={100} height={100} />
          <p className="fw-bold fs-5">MongoDB</p>
        </div>
      </div>
    </div>
  </div>
</div>




  )
}

export default Skill