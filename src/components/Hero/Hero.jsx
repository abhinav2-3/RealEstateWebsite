import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero_wrapper" id="hero">
      <div className="paddings innerWidth flexCenter hero_container">
        {/* Left Side */}
        <div className="flexColStart hero_left">
          <div className="hero_title">
            <div className="orange_circle" />
            <motion.h1
            initial={{y:'2rem',opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
              duration:2,
              type:'spring'
            }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero_dis">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you Search
            </span>
          </div>
          <div className="flexCenter search_bar">
            <HiLocationMarker color="var(--blue)" size={"25"} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1900} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={27} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexCenter hero_right">
          <motion.div
           initial={{x:'7rem',opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{
              duration:2,
              type:'spring'
            }}
           className="img_container">
            <img src="./hero-image.png" alt="hero-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
