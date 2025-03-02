import React from 'react';
import './Founder.css';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Founder = () => {
  return (
    <div className="founder-container">
      <div className="founder-content">
        <div className="founder-image-container">
          <img
            src="https://scholarsavenue.com/wp-content/uploads/2025/01/Usman-Awan.webp"
            alt="Founder"
            className="founder-image"
          />
        </div>
        <div className="founder-text-container">
          <h2 className="founder-name">Usman Awan</h2>
          <p className="founder-description">
            Meet Usman Awan, the driving force behind Scholars Avenue. Usman’s story is one of scholarship triumphs that have shaped his academic journey.
            Usman received multiple scholarships throughout his academic journey, like prestigious Erasmus Mundus Scholarship and Fully Funded Scholarship at the Cardiff University UK.
            Connect with Usman!
          </p>
          <div className="founder-socials">
            <div className="social-icons-wrapper">
              <a
                href="https://www.instagram.com/itsusmantalks/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/itsusmanawan/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.youtube.com/channel/UCRCxQN9aZuFm2PxQ2U7Szhg"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;