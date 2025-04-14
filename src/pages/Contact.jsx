import React, { useRef, useState } from 'react';
import { useWindowSize } from '@react-hook/window-size';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import Lottie from 'lottie-react';
import balloonsAnimation from '../assets/balloons..json'; // ✅ ensure the path is correct

AOS.init();

const Contact = () => {
  const form = useRef();
  const [showCelebration, setShowCelebration] = useState(false);
  const [width, height] = useWindowSize();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_peir1pl', 'template_d43kc6r', form.current, 'yPgG18YMGQAB3LPxk')
      .then(
        () => {
          // ✅ Scroll to top
          window.scrollTo({ top: 0, behavior: 'auto' });

          // ✅ Show success toast
          toast.success('🎉 Message sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
            theme: 'colored',
          });

          // ✅ Trigger celebration animation
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 3000);
        },
        () => {
          toast.error('❌ Failed to send message. Please try again.', {
            position: 'top-center',
            autoClose: 3000,
            theme: 'dark',
          });
        }
      );

    e.target.reset();
  };

  return (
    <div id='contact-id' className='pt-5 position-relative'>
      <ToastContainer />

      {/* 🎈 Celebration Effects */}
      {showCelebration && (
        <>
          <Confetti width={width} height={height} />
          <div
            className='position-fixed top-0 start-50 translate-middle-x fade-in-balloons'
            style={{ zIndex: 1050 }}
          >
            <Lottie animationData={balloonsAnimation} style={{ height: 300 }} loop={false} />
          </div>
        </>
      )}

      <p className='fs-2 text-center fw-bold mt-5' data-aos='fade-down' data-aos-duration='1000'>
        Let's <span className='text-warning'>Touch Together</span>
      </p>

      <form ref={form} onSubmit={sendEmail} className='container pt-4'>
        <div
          id='form-id'
          className='row justify-content-center'
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1000'
        >
          {/* Name & Email */}
          <div className='row justify-content-center mb-3'>
            <div className='col-12 col-md-6 col-lg-5 d-flex flex-column flex-md-row justify-content-center gap-3'>
              <input type='text' name='user_name' placeholder='Your Name' required className='form-control px-3 py-2' />
              <input type='email' name='user_email' placeholder='Your Email Id' required className='form-control px-3 py-2' />
            </div>
          </div>

          {/* Phone */}
          <div className='row justify-content-center mb-3'>
            <div className='col-12 col-md-6 col-lg-5 d-flex flex-column flex-md-row justify-content-center gap-3'>
              <input type='text' name='user_phone' placeholder='Your Phone Number' required className='form-control px-3 py-2' />
            </div>
          </div>

          {/* Message */}
          <div className='row justify-content-center mb-3'>
            <div className='col-12 col-md-8 col-lg-6'>
              <textarea name='message' placeholder='Your Message Here..' className='form-control px-3 pt-2 pb-5' required></textarea>
            </div>
          </div>

          {/* Submit */}
          <div className='row justify-content-center'>
            <div className='col-12 col-md-4 col-lg-3'>
              <button type='submit' className='btn btn-warning w-100 text-white fw-semibold' id='contact-btn'>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
