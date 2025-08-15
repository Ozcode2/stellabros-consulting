import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const About = () => {
  const headingRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Adjust based on how much of the element should be visible before triggering
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div className="abouts sec-pad">
      <div className="pro-container">
        <h2 ref={headingRef} className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">About us</span>
          <span className="heading-sec__sub">
            At Stellabros, we are passionate about bringing ideas to life
            through creative innovation. These are the services we render
          </span>
        </h2>
      </div>
      <div ref={aboutRef} className="about-grid">
        <div className="about">
          <div className="about-wrap">
            <img className="about-img" src="./code.png"></img>
            <div className="about-text">
              <h3 className="about-title">
                Web design & development
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
              </h3>
              <p className="about-paragraph">
                At Stellabros, we craft visually stunning, responsive, and
                user-friendly websites that bring your ideas to life. Our team
                combines creativity with cutting-edge technology to build
                digital experiences that leave lasting impressions and help your
                business grow online. We turn visions into reality.
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-wrap">
            <img className="about-img" src="./stylist.png"></img>
            <div className="about-text">
              <h3 className="about-title">
                Fashion Design / Stylist
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
              </h3>
              <p className="about-paragraph">
                Stellabros redefines fashion with bespoke designs and
                personalized styling services tailored to express individuality.
                We blend elegance, creativity, and modern trends to ensure you
                stand out with confidence, class, and a unique touch that speaks
                your style. And matches the occasion
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-wrap">
            <img className="about-img" src="./design.png"></img>
            <div className="about-text">
              <h3 className="about-title">
                Interior Design
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
              </h3>
              <p className="about-paragraph">
                Transform your spaces with Stellabros' innovative interior
                design solutions. We create aesthetically pleasing, functional,
                and inspiring environments that reflect your taste and
                lifestyle—bringing warmth, comfort, beauty, and sophistication
                into every corner of your space.
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-wrap">
            <img className="about-img" src="./capture.png"></img>
            <div className="about-text">
              <h3 className="about-title">
                Videography & Photography
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
              </h3>
              <p className="about-paragraph">
                At Stellabros, we capture moments that matter through the lens
                of creativity and precision. Our videography and photography
                services are tailored to tell your story with clarity, emotion,
                and artistic excellence—whether it's for personal memories,
                events, or brand promotion.
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-wrap">
            <img className="about-img" src="./socials.png"></img>
            <div className="about-text">
              <h3 className="about-title">
                Social media promotions / Ads
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
              </h3>
              <p className="about-paragraph">
                Stellabros helps your brand stand out in the digital world with
                impactful social media promotions and targeted ads. We create
                engaging content and effective campaigns that boost visibility,
                attract the right audience, and drive real results for your
                business. We make your brand impossible to ignore.
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-wrap">
            <img className="about-img" src="./entertainment.png"></img>
            <div className="about-text">
              <h3 className="about-title">
                Entertainment
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </span>
              </h3>
              <p className="about-paragraph">
                At Stellabros, we bring excitement and unforgettable experiences
                through top-notch entertainment services. From event hosting to
                creative performances, we are dedicated to making every occasion
                lively, engaging, and truly memorable for all audiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
