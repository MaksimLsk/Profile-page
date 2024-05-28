// import React from 'react';
import profileImg from "../../assets/profile1.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>
          <h1 className="home__title text-cs"><span>MAKSIM</span> LÕSJUK</h1>

          <p className="home__job">
            <span className="text-cs">I am</span> <b>Web Developper</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt='' className='home__profile' />
            </div>
            <p className="home__data home__data-one">
              <span className="text-lg">
                1

                {/* if need to add a symbol "+" for the experience */}
                {/* <b>+</b> */}

              </span>

              <span className="text-sm text-cs">
                Year of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">
                3
              </span>

              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />

          </div>

          <p className="home__text">From Tallinn, Estonia. Living in Lyon, France</p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaLinkedin />
            </a>

            <a href="" className="home__social-link">
              <FaGithub />
            </a>
          </div>

          <div className="home__btns">
            <a href="" className="btn text-cs">
              Download CV
            </a>

            <a href="" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;