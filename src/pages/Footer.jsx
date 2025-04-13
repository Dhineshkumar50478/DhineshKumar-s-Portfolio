import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import { FaCircleArrowUp } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  return (
    <div className='bg-black mt-5 pt-5 pb-5 container-fluid'>
  <div className='text-center ps-5 bg-black' id='footer-para'>
    <p id='p1' onClick={() => window.location.replace('#')} className='btn fw-bold m-1'>Home</p>
    <p id='p2' onClick={() => window.location.replace('/#about-id')} className='btn fw-bold m-1'>About Me</p>
    <p id='p3' onClick={() => window.location.replace('/#skill-id')} className='btn fw-bold m-1'>Skill</p>
    <p id='p4' onClick={() => window.location.replace('/#project-id')} className='btn fw-bold m-1'>Project</p>
    <p id='p4' onClick={() => window.location.replace('/#certificate-id')} className='btn fw-bold m-1'>Certificate</p>
    <p id='p4' onClick={() => window.location.replace('/#contact-id')} className='btn fw-bold m-1'>Contact</p>
  </div>

  <p className='pt-4 d-flex gap-3 justify-content-center flex-wrap fs-3' id='link-src'>
    <Link to="https://github.com/Dhineshkumar50478" className='text-white'><FaGithub id='ft-git' /></Link>
    <Link to="https://www.linkedin.com/in/dhineshkumarselvaraj//" className='text-white'><FaLinkedin id='linkedin' /></Link>
    <Link to="https://stackoverflow.com/users/30259781/dinesh-selvaraj" className='text-white'><FaStackOverflow id='stack' /></Link>
    <Link to="https://x.com/DSelvaraj67497?t=C7HVGh3W2h5fqaeZYxhNbw&s=09" className='text-white'><FaTwitter id='ft-twit' /></Link>
    <Link to='https://www.instagram.com/dhineshselvaraj09/' className='text-white'><FaInstagram id='insta' /></Link>
  </p>

  <div className='position-relative'>
    <p className='text-white text-center mt-5'><FaRegCopyright /> 2024 All Rights Reserved, Inc.</p>
    <Link>
      <FaCircleArrowUp onClick={scrollToTop} alt="Toparrow" className='text-white position-absolute end-0 fs-2 bottom-50 me-2' />
    </Link>
  </div>
</div>

  )
}

export default Footer