import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import profile from '../assets/Profile.png'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Skill from './Skill';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Certificate from './Certificate';
import resume from '../assets/DhineshKumar-FullstackDeveloper LastUpdatedResume.pdf';
import { FaDownload } from "react-icons/fa6";

// ..
AOS.init();


const Home = () => {

  const [text] = useTypewriter({
    words: ['Full Stack Web Developer','Frontend Developer','React Developer','MERN Stack Developer','UI/UX Enthusiast','Web Designer','Backend Developer'],
    loop: {},
    Cursor ,
    typeSpeed: 150,
    delaySpeed: 1000,
    deleteSpeed:50,
    
  });


  return (

<div>
  <div className='ps-3 pe-3 mt-5'>
    <Navbar />
    <div id='home-id' className='pt-5'>
      <div className='container'>
        <div className='row'>
          {/* Left Column */}
          <div className='col-12 col-sm-12 col-md-6 ps-5 mt-5' data-aos="fade-up" data-aos-duration="1500">
            <p className='fw-bold fs-3 pt-5'>
              Hi, It's Me <br />
              <span className='fw-bold display-4' data-aos="fade-right" data-aos-duration="3000">DhineshKumar</span><br />
              <span className='fs-1 fw-bold ps-4'>
                And I'm a <span className='text-warning'>{text}</span><br />
              </span>
            </p>

            <p>A full-stack developer doesn’t just write code—they write the story of tomorrow’s <br /> digital world.</p>

    
            <p className='pt-4 d-flex flex-wrap justify-content-center gap-4 fs-3' id='link-src'>
              <Link to="https://github.com/Dhineshkumar50478" className='text-black'><FaGithub id='git' /></Link>
              <Link to="https://www.linkedin.com/in/dhineshkumarselvaraj//" className='text-black'><FaLinkedin id='linkedin' /></Link>
              <Link to="https://stackoverflow.com/users/30259781/dinesh-selvaraj" className='text-black'><FaStackOverflow id='stack' /></Link>
              <Link to="https://x.com/DSelvaraj67497?t=C7HVGh3W2h5fqaeZYxhNbw&s=09" className='text-black'><FaTwitter id='twit' /></Link>
              <Link to='https://www.instagram.com/dhineshselvaraj09/' className='text-black'><FaInstagram id='insta' /></Link>
            </p>

            <div className='d-flex justify-content-center align-items-center'>
              <Link
                id="nav-resume"
                to={resume}
                download="DhineshKumar Resume"
                target="_blank"
                className="mt-4 gap-2 d-flex justify-content-center px-4 px-md-5 py-2 btn btn-warning rounded-pill shadow fw-semibold text-white text-decoration-none">
                Download Resume <FaDownload className='mt-1' />
              </Link>
            </div>



          </div>

          {/* Right Column with Profile Image */}
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 mt-4 mt-md-0' data-aos="fade-down" data-aos-duration='2000'>
            <div>
              <img src={profile} alt="Profile" className='ms-2 img-fluid' id='dancing-img' />
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Additional Sections */}
    <About />
    <Skill />
    <Project />
    <Certificate />
    <Contact />
  </div>
  <Footer />
</div>


  )
}

export default Home