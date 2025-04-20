import React from 'react'
import { Link } from 'react-router-dom'
import Bookreview from '../assets/BookreviewWebsite.jpeg'
import amazon from "../assets/amazon2.jpeg"
import WeatherForecast from "../assets/WeatherForecast.jpg"
import appStore from '../assets/appstore2.jpeg'
import LoanPrediction from "../assets/LoanPrediction.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Project = () => {
  return (

    <div id="project-id" className="pt-5">
  <div className="mt-5">
    <p
      className="text-center fw-bold fs-2"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      My <span className="text-warning">Projects</span>
    </p>
    <div className="container">
      <div className="row gy-4 pt-3">
        {/* Project 1 */}
        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={Bookreview}
              alt="Bookreview"
              id="amazon-div"
              className="rounded img-fluid w-100"
              style={{maxWidth: "360px", height: "220px" }}
            />
            <Link to="https://book-review-app-ebon.vercel.app/landing">
              <p id="hover-text" className="pt-2 fw-bold">
                Bookreview Website
              </p>
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={WeatherForecast}
              alt="WeatherForecast"
              id="travel-div"
              className="rounded img-fluid w-100"
              style={{ maxWidth: "360px", height: "220px", }}
            />
            <Link to="https://forecasthub23.netlify.app/">
              <p id="hover-text" className="pt-2 fw-bold">
                WeatherForecast Website
              </p>
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={amazon}
              alt="amazon"
              id="rock-div"
              className="rounded img-fluid w-100"
              style={{maxWidth: "360px", height: "220px", }}
            />
            <Link to="https://amazonlandingpage1jk.netlify.app/">
              <p id="hover-text" className="pt-2 fw-bold">
                Amazon Landing Page
              </p>
            </Link>
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={appStore}
              alt="AppStore"
              id="rock-div"
              className="rounded img-fluid w-100"
              style={{maxWidth: "360px", height: "220px", }}
            />
            <Link to="https://appstore-app.netlify.app/">
              <p id="hover-text" className="pt-2 fw-bold">
                App Store
              </p>
            </Link>
          </div>
        </div>

        <div
          className="col-12 col-sm-6 col-lg-4 text-center"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div id="img-container">
            <img
              src={LoanPrediction}
              alt="Loan Prediction"
              id="amazon-div"
              className="rounded img-fluid w-100"
              style={{maxWidth: "360px", height: "220px" }}
            />
            <Link to="https://loan-port-website-git-main-dhineshkumars-projects.vercel.app">
              <p id="hover-text" className="pt-2 fw-bold">
                Loan Prediction and Approval Website
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Project