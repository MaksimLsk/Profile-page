import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__socials">
            <a href="" className="footer__social-link">
              <FaLinkedin />
            </a>

            <a href="" className="footer__social-link">
              <FaGithub />
            </a>
          </div>

          <p className="footer__copyright text-cs">&copy; 2024<span>Luique</span>. All rights reserved</p>

          <p className="footer__copyright text-cs">Developped by <span>MaksimLsk</span></p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
