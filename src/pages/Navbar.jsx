import React from 'react';

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          {/* Left-aligned "Welcome" */}
          <a className="navbar-brand fs-4 fw-semibold" href="/">
            Welcome.
          </a>
          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Right-aligned items */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-4">
              <button
                id="nav-home"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('home-id')}
              >
                Home
              </button>
              <button
                id="nav-about"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('about-id')}
              >
                About
              </button>
              <button
                id="nav-skill"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('skill-id')}
              >
                Skill
              </button>
              <button
                id="nav-project"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('project-id')}
              >
                Project
              </button>
              <button
                id="nav-certificate"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('certificate-id')}
              >
                Certificates
              </button>
              <button
                id="nav-contact"
                className="nav-item nav-link fw-semibold btn"
                onClick={() => handleScroll('contact-id')}
              >
                Contact
              </button>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
